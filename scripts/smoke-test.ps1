$ErrorActionPreference = "Continue"
$root = Split-Path $PSScriptRoot -Parent
Set-Location $root

$srv = Start-Process -FilePath "node" `
  -ArgumentList "node_modules\next\dist\bin\next","start","-p","3311" `
  -PassThru -WindowStyle Hidden `
  -RedirectStandardOutput (Join-Path $root "smoke-out.log") `
  -RedirectStandardError (Join-Path $root "smoke-err.log")

Start-Sleep -Seconds 5

$routes = @(
  @{ p = "/"; e = 200 },
  @{ p = "/demos"; e = 200 },
  @{ p = "/demos/unknown-demo"; e = 404 },
  @{ p = "/demos/nope/inner"; e = 404 }
)
foreach ($slug in "aurora","scholar-house","pulse-prep","northstar","quantum","bloom") {
  foreach ($seg in "", "/courses", "/faculty", "/results", "/about", "/contact") {
    $routes += @{ p = "/demos/$slug$seg"; e = 200 }
  }
}

$bad = @()
foreach ($r in $routes) {
  try {
    $resp = Invoke-WebRequest -Uri ("http://localhost:3311" + $r.p) -UseBasicParsing -TimeoutSec 25 -MaximumRedirection 5
    $code = [int]$resp.StatusCode
  } catch {
    $resp = $_.Exception.Response
    $code = if ($resp) { [int]$resp.StatusCode } else { 0 }
  }
  if ($code -eq $r.e) { Write-Host ("OK   {0} {1}" -f $code, $r.p) }
  else { Write-Host ("BAD  {0} {1} (expected {2})" -f $code, $r.p, $r.e); $bad += $r.p }
}

# Broken-image sweep: every /images/... referenced in rendered HTML must exist.
$missingImgs = @()
foreach ($r in ($routes | Where-Object { $_.e -eq 200 })) {
  try {
    $html = (Invoke-WebRequest -Uri ("http://localhost:3311" + $r.p) -UseBasicParsing -TimeoutSec 25).Content
  } catch { continue }
  $matches2 = [regex]::Matches($html, '/images/[A-Za-z0-9_\-./]+')
  foreach ($m in $matches2) {
    $val = $m.Value -replace '\?.*$', ''
    $file = Join-Path (Join-Path $root "public") ($val -replace '/', '\')
    if (-not (Test-Path $file)) { $missingImgs += "$($r.p) -> $val" }
  }
}

Write-Host ""
Write-Host "BAD ROUTES: " ($bad -join "; ")
Write-Host "MISSING IMAGES: " (($missingImgs | Select-Object -Unique) -join "; ")

taskkill /PID $srv.Id /T /F | Out-Null
if ($bad.Count -gt 0 -or $missingImgs.Count -gt 0) { exit 1 } else { exit 0 }
