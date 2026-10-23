$ErrorActionPreference = "Continue"
$dir = "D:\MiniProject-site\multi-demo\public\images\cielshop"
$prod = Join-Path $dir "products"
$brand = Join-Path $dir "brand"
New-Item -ItemType Directory -Path $brand -Force | Out-Null

# Exact (url, timestamp) pairs verified via CDX. id_ = original bytes.
$jobs = @(
  # --- products (exact filename match with the brief's URLs) ---
  @{ dir = $prod; file = "ciel-patchwork-denims.jpg"; url = "https://cielshop.in/wp-content/uploads/elementor/thumbs/IMG_6279-scaled-qy7csubuen0udi3ioaaxbt4fxbaln6ga7csx2kyuro.jpg"; ts = "20250618164422" },
  @{ dir = $prod; file = "breezy-embroidered-shirt.jpg"; url = "https://cielshop.in/wp-content/uploads/2025/06/IMG_0996-300x300.jpeg"; ts = "20250618143247" },
  @{ dir = $prod; file = "camo-coord-set.jpg"; url = "https://cielshop.in/wp-content/uploads/2025/04/Photoroom_20250407_163655-300x300.jpeg"; ts = "20250618151629" },
  # --- brand / campaign imagery (brand-owned, archived) ---
  @{ dir = $brand; file = "lookbook-page.jpg"; url = "https://cielshop.in/wp-content/uploads/2024/12/2-pdf_page-0001-1-1536x1087.jpg"; ts = "20250618151213" },
  @{ dir = $brand; file = "brand-931905.jpg"; url = "https://cielshop.in/wp-content/uploads/2024/12/931905BF-3756-471D-8186-9B18B0F247A0-1024x1024.jpg"; ts = "20250618142656" },
  @{ dir = $brand; file = "gallery-4401.jpg"; url = "https://cielshop.in/wp-content/uploads/elementor/thumbs/IMG_4401-scaled-qyc3m84tph2db1rwle2sn17e7prkth2tnz7e4z7ryc.jpeg"; ts = "20250618164224" },
  @{ dir = $brand; file = "gallery-3733.jpg"; url = "https://cielshop.in/wp-content/uploads/elementor/thumbs/IMG_3733-scaled-qyb3z5hunumv97idu9x4kb92nzvcrad6xcrtyjn3gk.jpg"; ts = "20250619010657" },
  @{ dir = $brand; file = "gallery-8097.jpg"; url = "https://cielshop.in/wp-content/uploads/elementor/thumbs/IMG_8097-scaled-qy7mqu4zc33a70398j4ogyxgrcs896nzr9jc3g5yys.jpg"; ts = "20250618161144" },
  @{ dir = $brand; file = "gallery-9949.jpg"; url = "https://cielshop.in/wp-content/uploads/elementor/thumbs/IMG_9949-scaled-qyc4vqhilpd5fdo3uk9iv1rtmbgchwqyx8apm9qkp0.jpeg"; ts = "20250618161755" },
  @{ dir = $brand; file = "gallery-0292.jpg"; url = "https://cielshop.in/wp-content/uploads/2025/06/IMG_0292-300x300.jpeg"; ts = "20250618142456" },
  @{ dir = $brand; file = "gallery-1015.jpg"; url = "https://cielshop.in/wp-content/uploads/2025/06/IMG_1015-300x300.jpeg"; ts = "20250618152445" },
  @{ dir = $brand; file = "gallery-1055.jpg"; url = "https://cielshop.in/wp-content/uploads/2025/06/IMG_1055-300x300.jpeg"; ts = "20250618143532" },
  @{ dir = $brand; file = "gallery-7759.jpg"; url = "https://cielshop.in/wp-content/uploads/2025/02/IMG_7759-300x300.jpeg"; ts = "20250618145431" },
  @{ dir = $brand; file = "gallery-7574.jpg"; url = "https://cielshop.in/wp-content/uploads/2024/12/IMG_7574-scaled-300x300.jpg"; ts = "20250618142552" },
  @{ dir = $brand; file = "gallery-3960.jpg"; url = "https://cielshop.in/wp-content/uploads/2024/12/IMG_3960-scaled-300x300.jpg"; ts = "20250619013106" },
  @{ dir = $brand; file = "gallery-42FA88.jpg"; url = "https://cielshop.in/wp-content/uploads/2024/12/42FA88D6-C918-4A14-86BB-5DB891BDA78D-300x300.jpg"; ts = "20250618153632" }
)

$ok = 0; $fail = 0
foreach ($j in $jobs) {
  $out = Join-Path $j.dir $j.file
  if (Test-Path $out) { Write-Host ("SKIP {0}" -f $j.file); $ok++; continue }
  $m = & curl.exe -sS -L --compressed --max-time 90 -o $out -w "%{http_code}|%{content_type}|%{size_download}" "http://web.archive.org/web/$($j.ts)id_/$($j.url)" 2>&1
  $parts = "$m" -split '\|'
  $good = $parts[1] -like 'image/*' -and [int]($parts[2] -replace '\D','') -gt 5000
  if ($good) { Write-Host ("OK   {0,-28} {1}KB" -f $j.file, [math]::Round([int]($parts[2] -replace '\D','')/1KB)); $ok++ }
  else { Write-Host ("FAIL {0,-28} {1}" -f $j.file, $m); Remove-Item $out -ErrorAction SilentlyContinue; $fail++ }
  Start-Sleep -Seconds 3
}
Write-Host "OK=$ok FAIL=$fail"
