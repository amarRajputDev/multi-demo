$ErrorActionPreference = "Stop"
$root = "D:\MiniProject-site\multi-demo\public\images"

# name -> unsplash photo id (stable CDN ids)
$manifest = @{
  # ---- Aurora Academy: cinematic, elite ----
  "aurora\hero-lecture"      = "photo-1427504494785-3a9ca7044f45"
  "aurora\mentor"            = "photo-1524178232363-1fb2b075b655"
  "aurora\study"             = "photo-1456513080510-7bf3a84b82f8"
  "aurora\results"           = "photo-1523050854058-8df90110c9f1"
  "aurora\campus"            = "photo-1562774053-701939374585"
  "aurora\faculty-1"         = "photo-1560250097-0b93528c311a"
  "aurora\faculty-2"         = "photo-1573496359142-b8d87734a5a2"
  "aurora\faculty-3"         = "photo-1472099645785-5658abf4ff4e"
  "aurora\faculty-4"         = "photo-1544005313-94ddf0286df2"

  # ---- Scholar House: warm academic ----
  "scholar-house\hero-teacher" = "photo-1503676260728-1c00da094a0b"
  "scholar-house\classroom"    = "photo-1580582932707-520aed937b7b"
  "scholar-house\library"      = "photo-1498243691581-b145c3f54a5a"
  "scholar-house\students"     = "photo-1571260899304-425eee4c7efc"
  "scholar-house\writing"      = "photo-1434030216411-0b793f4b4173"
  "scholar-house\faculty-1"    = "photo-1507003211169-0a1dd7228f2d"
  "scholar-house\faculty-2"    = "photo-1494790108377-be9c29b29330"
  "scholar-house\faculty-3"    = "photo-1506794778202-cad84cf45f1d"
  "scholar-house\faculty-4"    = "photo-1580489944761-15a19d654956"

  # ---- Pulse Prep: energetic ----
  "pulse-prep\hero-team"     = "photo-1522202176988-66273c2fd55f"
  "pulse-prep\lab"           = "photo-1532094349884-543bc11b234d"
  "pulse-prep\coding"        = "photo-1531482615713-2afd69097998"
  "pulse-prep\whiteboard"    = "photo-1509228468518-180dd4864904"
  "pulse-prep\meeting"       = "photo-1523240795612-9a054b0db644"
  "pulse-prep\faculty-1"     = "photo-1500648767791-00dcc994a43e"
  "pulse-prep\faculty-2"     = "photo-1517841905240-472988babdf9"
  "pulse-prep\faculty-3"     = "photo-1531427186611-ecfd6d936c79"
  "pulse-prep\faculty-4"     = "photo-1573497019940-1c28c88b4f3e"

  # ---- Northstar: editorial minimal ----
  "northstar\hero-desk"      = "photo-1488190211105-8b0e65b80b4e"
  "northstar\mentor"         = "photo-1454165804606-c3d57bc86b40"
  "northstar\books"          = "photo-1481627834876-b7833e8f5570"
  "northstar\notes"          = "photo-1517245386807-bb43f82c33c4"
  "northstar\student"        = "photo-1517486808906-6ca8b3f04846"
  "northstar\faculty-1"      = "photo-1556157382-97eda2d62296"
  "northstar\faculty-2"      = "photo-1438761681033-6461ffad8d80"
  "northstar\faculty-3"      = "photo-1568602471122-7832951cc4c5"
  "northstar\faculty-4"      = "photo-1618077360395-f3068be8e001"

  # ---- Quantum: technical STEM ----
  "quantum\hero-physics"     = "photo-1635070041078-e363dbe005cb"
  "quantum\chemistry"        = "photo-1606761568499-6d2451b23c66"
  "quantum\laptops"          = "photo-1516321318423-f06f85e504b3"
  "quantum\lab"              = "photo-1580894732444-8ecded7900cd"
  "quantum\math"             = "photo-1596495578065-6e0763fa1178"
  "quantum\faculty-1"        = "photo-1624395213043-fa2e123b2656"
  "quantum\faculty-2"        = "photo-1628157588553-5eeea00af15c"
  "quantum\faculty-3"        = "photo-1519085360753-af0119f7cbe7"
  "quantum\faculty-4"        = "photo-1573497491208-6b1acb260507"

  # ---- Bloom: friendly, warm ----
  "bloom\hero-kids"          = "photo-1577896851231-70ef18881754"
  "bloom\learning"           = "photo-1546410531-bb4caa6b424d"
  "bloom\child"              = "photo-1503454537195-1dcabb73ffb9"
  "bloom\reading"            = "photo-1588072432836-e10032774350"
  "bloom\art"                = "photo-1596462502278-27bfdc403348"
  "bloom\faculty-1"          = "photo-1595152772835-219674b2a8a6"
  "bloom\faculty-2"          = "photo-1615109398623-88346a601842"
  "bloom\faculty-3"          = "photo-1619895862022-09114b41f16f"
  "bloom\faculty-4"          = "photo-1587616211892-f743fcca64f9"
}

$failed = @()
foreach ($key in $manifest.Keys) {
  $dir = Split-Path (Join-Path $root "$key.jpg") -Parent
  if (-not (Test-Path $dir)) { New-Item -ItemType Directory -Path $dir -Force | Out-Null }
  $out = Join-Path $root "$key.jpg"
  $id = $manifest[$key]
  $url = "https://images.unsplash.com/$id`?auto=format&fit=crop&w=1400&q=72"
  try {
    & curl.exe -sS -L --max-time 60 -o $out $url
    $size = (Get-Item $out).Length
    if ($size -lt 8000) { throw "too small ($size bytes)" }
    Write-Host "OK  $key  ($([math]::Round($size/1KB)) KB)"
  } catch {
    Write-Host "FAIL $key : $_"
    $failed += $key
  }
}

if ($failed.Count -gt 0) {
  Write-Host "`nFAILED: $($failed -join ', ')"
  exit 1
} else {
  Write-Host "`nAll images downloaded."
}
