$node = "C:\Users\Dell\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe"
$script = Join-Path $PSScriptRoot "research-crawl.cjs"

$forwardArgs = @($args)
if ($forwardArgs.Count -gt 0 -and $forwardArgs[0] -eq "--") {
  if ($forwardArgs.Count -eq 1) {
    $forwardArgs = @()
  } else {
    $forwardArgs = $forwardArgs[1..($forwardArgs.Count - 1)]
  }
}

& $node $script @forwardArgs
exit $LASTEXITCODE
