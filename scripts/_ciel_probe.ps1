$ErrorActionPreference = "Continue"
$dir = "D:\MiniProject-site\multi-demo\screenshots\_ciel_probe"
if (-not (Test-Path $dir)) { New-Item -ItemType Directory -Path $dir -Force | Out-Null }

$products = @(
  @{ slug = "stripped-club-shirt";       name = "Stripped Club Shirt";              price = 1699; url = "https://cielshop.in/wp-content/uploads/elementor/thumbs/53581D51-1DA6-478B-A893-D91F2E905285-rctjvquzcyee3ud0dbdqzvghn23bks9oexxhr1kd38.png" }
  @{ slug = "breezy-embroidered-shirt";  name = "Breezy Embroidered Shirts";        price = 1799; url = "https://cielshop.in/wp-content/uploads/elementor/thumbs/IMG_0996-scaled-r74ydmhs0gx64rbrk9c7ulodekpz66wnw3dl6q5l50.jpeg" }
  @{ slug = "racer-shirt-25";            name = "RACER - Shirts 25";                price = 1799; url = "https://cielshop.in/wp-content/uploads/elementor/thumbs/img_7818-scaled-r3s175gr5mmedfuc0kdwdybrzeetknb8zgwjjc9lc4.jpeg" }
  @{ slug = "la-familia-zipper-shacket"; name = "Zipper LA Familia Printed Shacket";price = 2249; url = "https://cielshop.in/wp-content/uploads/elementor/thumbs/IMG_0190-scaled-r7kt23irzcr7xpc09pyan9xm9vmnft1h5sl39snrr8.jpeg" }
  @{ slug = "henley-pu-leather-shirt";   name = "Henley PU Leather Zipper Shirt";   price = 1549; url = "https://cielshop.in/wp-content/uploads/elementor/thumbs/IMG_7797-qy7hlnxkz1lr0h2aihmj9p4fuph3vrjmaqvsl2q0qs.jpg" }
  @{ slug = "gothic-zipper-shirt";       name = "Gothic - Zipper Shirt";            price = 1629; url = "https://cielshop.in/wp-content/uploads/elementor/thumbs/IMG_4060-1-scaled-r2popnclm0hj0q8lj1p1lg16ml2uqoo3vo094l8zt0.jpeg" }
  @{ slug = "rebel-strap-cargo";         name = "Rebel Strap Cargo";                price = 2599; url = "https://cielshop.in/wp-content/uploads/elementor/thumbs/1742473295531_IMG_7915-scaled-r34yx438wdevkksgufkxulmbmmlsnxxktil1u6iv5w.jpeg" }
  @{ slug = "punk-wave-patch-denims";    name = "Punk Wave Patch Denims";           price = 2699; url = "https://cielshop.in/wp-content/uploads/elementor/thumbs/IMG_5763-scaled-r1ne91lu3u583aqtd1ek6jhjtkfovnfjgojmme57pg.jpeg" }
  @{ slug = "two-zipper-pants";          name = "2 Zipper Pants";                   price = 2099; url = "https://cielshop.in/wp-content/uploads/elementor/thumbs/IMG_7567-r2pog656p5ifya07vg7gyc4uzpsm4k1jkr6zx5awjo.jpeg" }
  @{ slug = "gothic-patchwork-denims";   name = "Gothic Patchwork Denims";          price = 2499; url = "https://cielshop.in/wp-content/uploads/elementor/thumbs/IMG_7991-qyg3bkb0biz4hf7nxleztk5a8b1h6eve9mgx9onm84.jpeg" }
  @{ slug = "camo-coord-set";            name = "Camo Co-ord Set";                  price = 2799; url = "https://cielshop.in/wp-content/uploads/elementor/thumbs/Photoroom_20250407_163655-r453tidenpfm6g4djhs6g3wg65ol76auocwmxtnupw.jpeg" }
  @{ slug = "denim-coord-set";           name = "Denim Co-ord Set";                 price = 2499; url = "https://cielshop.in/wp-content/uploads/elementor/thumbs/IMG_4341-1-qyghhvuksfkdrzxz0om81a5go9qh6lt5fh622tzy2s.jpg" }
  @{ slug = "ciel-patchwork-denims";     name = "Ciel Patchwork Denims";            price = 2499; url = "https://cielshop.in/wp-content/uploads/elementor/thumbs/IMG_6279-scaled-qy7csubuen0udi3ioaaxbt4fxbaln6ga7csx2kyuro.jpg" }
)

$ok = 0; $fail = 0
foreach ($p in $products) {
  $ext = [System.IO.Path]::GetExtension($p.url)
  $out = Join-Path $dir "$($p.slug)$ext"
  $meta = & curl.exe -sS -L --max-time 45 -o $out -w "%{http_code}|%{content_type}|%{size_download}" $p.url 2>&1
  $parts = "$meta" -split '\|'
  $code = $parts[0]; $ctype = $parts[1]; $size = [int]($parts[2] -replace '\D','')
  $isImg = $ctype -like 'image/*'
  $bigEnough = $size -gt 3000
  $status = if ($isImg -and $bigEnough) { "OK  "; $ok++ } else { "FAIL"; $fail++ }
  Write-Host ("{0} {1,-30} http={2} type={3} size={4}" -f $status, $p.slug, $code, $ctype, $size)
}
Write-Host ""
Write-Host "RECOVERED: $ok / 13    FAILED: $fail"
