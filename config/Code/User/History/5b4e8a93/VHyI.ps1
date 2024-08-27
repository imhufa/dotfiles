Write-Host -ForegroundColor DarkMagenta 'so you received a script from hufa, huh?'
Start-Sleep -Seconds 2
Write-Host -ForegroundColor DarkCyan 'ok then...'
Write-Warning -Message 'you dare be ready...?'
Pause

$target_domain=Read-Host -Prompt 'Enter domain: '
$target_url=Read-Host -Prompt 'Enter url: '

wget `
    recursive `
    level 5 `
    no-clobber `
    recursive `
    page-requisites `
    recursive `
    adjust-extension `
    span-hosts `
    convert-links `
    restrict-file-name=windows `
    domain `
        $target_domain
    no-parent `
        $target_url

