$ErrorActionPreference = "Continue"
$dir = "D:\MiniProject-site\multi-demo\public\images\cielshop\products"
$probe = "D:\MiniProject-site\multi-demo\screenshots\_ciel_probe2"
New-Item -ItemType Directory -Path $probe -Force | Out-Null

# Full-size originals discovered in the Wayback-captured homepage HTML,
# plus un-suffixed originals of the three thumbnails already recovered.
$cands = @(
  @{ slug = "rebel-strap-cargo"; u = "https://cielshop.in/wp-content/uploads/2025/03/1742473295531_IMG_7915-scaled.jpeg" },
  @{ slug = "racer-shirt-25"; u = "https://cielshop.in/wp-content/uploads/2025/04/img_7818-scaled.jpeg" },
  @{ slug = "ciel-patchwork-denims"; u = "https://cielshop.in/wp-content/uploads/2024/12/IMG_6279-scaled.jpg" },
  @{ slug = "two-zipper-pants"; u = "https://cielshop.in/wp-content/uploads/2024/12/IMG_7567.jpg" },
  @{ slug = "gothic-patchwork-denims"; u = "https://cielshop.in/wp-content/uploads/2024/12/IMG_7991.jpg" },
  @{ slug = "henley-pu-leather-shirt"; u = "https://cielshop.in/wp-content/uploads/2024/12/IMG_7797.jpg" },
  @{ slug = "mystery-0489"; u = "https://cielshop.in/wp-content/uploads/2024/12/IMG_0489-scaled.jpg" },
  @{ slug = "mystery-7399"; u = "https://cielshop.in/wp-content/uploads/2025/03/IMG_7399.jpeg" },
  @{ slug = "mystery-9949"; u = "https://cielshop.in/wp-content/uploads/2024/12/IMG_9949-scaled.jpeg" },
  @{ slug = "mystery-8097"; u = "https://cielshop.in/wp-content/uploads/2024/12/IMG_8097-scaled.jpg" },
  @{ slug = "mystery-4401"; u = "https://cielshop.in/wp-content/uploads/2024/12/IMG_4401-scaled.jpeg" },
  @{ slug = "mystery-6903"; u = "https://cielshop.in/wp-content/uploads/2025/02/IMG_6903.jpeg" },
  @{ slug = "mystery-3431"; u = "https://cielshop.in/wp-content/uploads/2024/12/IMG_3431-scaled.jpeg" },
  @{ slug = "mystery-3733"; u = "https://cielshop.in/wp-content/uploads/2024/12/IMG_3733-scaled.jpg" },
  @{ slug = "mystery-3960"; u = "https://cielshop.in/wp-content/uploads/2024/12/IMG_3960-scaled.jpg" },
  @{ slug = "mystery-image00007"; u = "https://cielshop.in/wp-content/uploads/2025/03/image00007-768x683.jpeg" }
)

$recovered = @()
foreach ($c in $cands) {
  $enc = [uri]::EscapeDataString($c.u)
  $j = & curl.exe -sS --max-time 30 "https://archive.org/wayback/available?url=$enc" 2>&1
  Start-Sleep -Seconds 4
  if ("$j" -match '"timestamp":\s*"(\d+)"') {
    $ts = $Matches[1]
    $ext = [System.IO.Path]::GetExtension($c.u)
    if (-not $ext) { $ext = ".jpg" }
    $out = Join-Path $probe "$($c.slug)$ext"
    $m = & curl.exe -sS -L --compressed --max-time 90 -o $out -w "%{http_code}|%{content_type}|%{size_download}" "http://web.archive.org/web/${ts}id_/$($c.u)" 2>&1
    $parts = "$m" -split '\|'
    $isImg = $parts[1] -like 'image/*' -and [int]($parts[2] -replace '\D', '') -gt 5000
    if ($isImg) {
      Write-Host ("OK   {0,-26} {1} {2}KB (ts {3})" -f $c.slug, $parts[1], [math]::Round([int]($parts[2] -replace '\D','')/1KB), $ts)
      $recovered += $c.slug
    } else {
      Write-Host ("FAIL {0,-26} {1}" -f $c.slug, "$m")
      Remove-Item $out -ErrorAction SilentlyContinue
    }
    Start-Sleep -Seconds 4
  } else {
    Write-Host ("NONE {0}" -f $c.slug)
  }
}
Write-Host ""
Write-Host "RECOVERED: $($recovered -join ', ')"
