$ErrorActionPreference = "Continue"
$probe = "D:\MiniProject-site\multi-demo\screenshots\_ciel_probe3"
New-Item -ItemType Directory -Path $probe -Force | Out-Null

# Prefix queries for the product image filenames still missing.
$queries = @(
  @{ name = "stripped-club";   q = "cielshop.in/wp-content/uploads/elementor/thumbs/53581D51*" },
  @{ name = "breezy";          q = "cielshop.in/wp-content/uploads/elementor/thumbs/IMG_0996*" },
  @{ name = "racer";           q = "cielshop.in/wp-content/uploads/2025/04/img_7818*" },
  @{ name = "lafamilia";       q = "cielshop.in/wp-content/uploads/elementor/thumbs/IMG_0190*" },
  @{ name = "gothic-zipper";   q = "cielshop.in/wp-content/uploads/elementor/thumbs/IMG_4060*" },
  @{ name = "rebel-cargo";     q = "cielshop.in/wp-content/uploads/2025/03/*" },
  @{ name = "punk-wave";       q = "cielshop.in/wp-content/uploads/2025/02/IMG_5763*" },
  @{ name = "punk-wave-thumb"; q = "cielshop.in/wp-content/uploads/elementor/thumbs/IMG_5763*" },
  @{ name = "denim-coord";     q = "cielshop.in/wp-content/uploads/elementor/thumbs/IMG_4341*" },
  @{ name = "denim-coord2";    q = "cielshop.in/wp-content/uploads/*/IMG_4341*" }
)

$found = @{}
foreach ($qq in $queries) {
  $enc = [uri]::EscapeDataString($qq.q)
  $r = & curl.exe -sS --max-time 40 "http://web.archive.org/cdx/search/cdx?url=$enc&output=text&fl=original,timestamp,statuscode&collapse=urlkey&filter=statuscode:200&limit=6" 2>&1
  Start-Sleep -Seconds 3
  $real = $r | Where-Object { $_ -match '^\S+\s+\d{14}\s+200' }
  if ($real) {
    Write-Host ("HIT  {0}:" -f $qq.name)
    $real | ForEach-Object { Write-Host "       $_" }
    $found[$qq.name] = $real
  } else {
    Write-Host ("MISS {0}" -f $qq.name)
  }
}

# Try a direct id_ fetch for any hits (use first timestamp per name).
$slugMap = @{
  "stripped-club" = $null; "breezy" = "breezy-embroidered-shirt"; "racer" = "racer-shirt-25";
  "lafamilia" = "la-familia-zipper-shacket"; "gothic-zipper" = "gothic-zipper-shirt";
  "rebel-cargo" = "rebel-strap-cargo"; "punk-wave" = "punk-wave-patch-denims";
  "punk-wave-thumb" = "punk-wave-patch-denims"; "denim-coord" = "denim-coord-set"; "denim-coord2" = "denim-coord-set"
}
foreach ($key in $found.Keys) {
  $slug = $slugMap[$key]
  if (-not $slug) { continue }
  $first = ($found[$key][0] -split '\s+')
  $url = $first[0]; $ts = $first[1]
  $ext = [System.IO.Path]::GetExtension($url); if (-not $ext) { $ext = ".jpg" }
  $out = Join-Path $probe "$slug$ext"
  if (Test-Path $out) { continue }
  $m = & curl.exe -sS -L --compressed --max-time 90 -o $out -w "%{http_code}|%{content_type}|%{size_download}" "http://web.archive.org/web/${ts}id_/$url" 2>&1
  $parts = "$m" -split '\|'
  $ok = $parts[1] -like 'image/*' -and [int]($parts[2] -replace '\D','') -gt 5000
  if ($ok) { Write-Host ("DL   {0} <- {1} ts {2} ({3}KB)" -f $slug, $url.Split('/')[-1], $ts, [math]::Round([int]($parts[2] -replace '\D','')/1KB)) }
  else { Write-Host ("DLFAIL {0} {1}" -f $slug, $m); Remove-Item $out -ErrorAction SilentlyContinue }
  Start-Sleep -Seconds 3
}
Write-Host "DONE"
