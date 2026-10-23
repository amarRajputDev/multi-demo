$ErrorActionPreference = "Continue"
$root = Split-Path $PSScriptRoot -Parent
Set-Location $root
$env:CHROME_PATH = "$env:LOCALAPPDATA\ms-playwright\chromium-1248\chrome-win64\chrome.exe"

$srv = Start-Process -FilePath "node" `
  -ArgumentList "node_modules\next\dist\bin\next","start","-p","3325" `
  -PassThru -WindowStyle Hidden `
  -RedirectStandardOutput "$root\lh-out.log" `
  -RedirectStandardError "$root\lh-err.log"

Start-Sleep -Seconds 5

try {
  foreach ($item in @(
    @{ url = "http://localhost:3325/"; name = "showcase" },
    @{ url = "http://localhost:3325/demos/aurora"; name = "aurora" },
    @{ url = "http://localhost:3325/demos/bloom"; name = "bloom" }
  )) {
    Write-Host "=== $($item.name) ==="
    npx --yes lighthouse@12 $item.url `
      --only-categories=performance,accessibility,best-practices `
      --form-factor=mobile --screenEmulation.mobile `
      --quiet --chrome-flags="--headless=new --no-sandbox" `
      --output=json --output-path="$root\screenshots\lh-$($item.name).json"
    if (Test-Path "$root\screenshots\lh-$($item.name).json") {
      $j = Get-Content "$root\screenshots\lh-$($item.name).json" -Raw | ConvertFrom-Json
      foreach ($cat in "performance","accessibility","best-practices") {
        $score = [math]::Round(100 * $j.categories.$cat.score)
        Write-Host ("{0}: {1}" -f $cat, $score)
      }
    }
  }
} finally {
  if ($srv -and !$srv.HasExited) { taskkill /PID $srv.Id /T /F | Out-Null }
  Remove-Item "$root\lh-out.log","$root\lh-err.log" -ErrorAction SilentlyContinue
}
