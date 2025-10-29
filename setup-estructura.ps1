$ErrorActionPreference = 'Stop'

$root = Split-Path -Parent $MyInvocation.MyCommand.Path
$assets = Join-Path $root 'assets'
$recetas = Join-Path $root 'recetas'
$porDia = Join-Path $recetas 'por-dia'
$fest = Join-Path $recetas 'festividades'

# Create directories
$dirs = @(
  $assets,
  (Join-Path $assets 'css'),
  (Join-Path $assets 'js'),
  (Join-Path $assets 'img'),
  $recetas,
  $porDia,
  $fest
)

$days = @('lunes','martes','miercoles','jueves','viernes','sabado','domingo')
$holidays = @('navidad','ano-nuevo','san-valentin','pascua','halloween','accion-de-gracias','cumpleanos','dia-de-la-madre','dia-del-padre')

foreach ($d in $days) { $dirs += (Join-Path $porDia $d) }
foreach ($h in $holidays) { $dirs += (Join-Path $fest $h) }

foreach ($d in $dirs) { New-Item -ItemType Directory -Path $d -Force | Out-Null }

function Ensure-IndexHtml {
  param(
    [string]$Folder,
    [string]$Title
  )
  $file = Join-Path $Folder 'index.html'
  if (-not (Test-Path $file)) {
    $html = @"
<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>$Title</title>
  <link rel="stylesheet" href="../../assets/css/styles.css" />
</head>
<body>
  <h1>$Title</h1>
  <p>Contenido de $Title.</p>
</body>
</html>
"@
    Set-Content -Path $file -Value $html -Encoding UTF8
  }
}

foreach ($d in $days) { Ensure-IndexHtml -Folder (Join-Path $porDia $d) -Title ("Recetas por dia - $d") }
foreach ($h in $holidays) { Ensure-IndexHtml -Folder (Join-Path $fest $h) -Title ("Recetas para festividad - $h") }

# Minimal CSS
$css = Join-Path $assets 'css/styles.css'
if (-not (Test-Path $css)) {
  $cssContent = 'body{font-family:system-ui,Segoe UI,Arial,sans-serif;margin:2rem;line-height:1.6} a{color:#0d6efd;text-decoration:none} a:hover{text-decoration:underline}'
  Set-Content -Path $css -Value $cssContent -Encoding UTF8
}
