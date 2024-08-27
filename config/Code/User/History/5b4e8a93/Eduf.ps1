Write-Host -ForegroundColor DarkMagenta 'so you received a script from hufa, huh?'
Start-Sleep -Seconds 2
Write-Host -ForegroundColor DarkCyan 'ok then...'
Write-Warning -Message 'you dare be ready...?'
Pause

$target_domain=Read-Host -Prompt 'Enter domain: '
$target_url=Read-Host -Prompt 'Enter url: '

wget `
    --quiet `
    --show-progress `
    --progress-type=bar `
    --no-parent `
    --recursive `
    --level=5 `
    --convert-links `
    --no-clobber `
    --recursive `
    --page-requisites `
    --adjust-extension `
    --span-hosts `
    --restrict-file-name=windows `
    --domains $target_domain `
    $target_url

Write-Progress -currentOperation ./wget -Status "Progress:" -PercentComplete 100 -Completed ' '
