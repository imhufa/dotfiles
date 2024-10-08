Write-Information -MessageData "script using wget command rather than Invoke-Webrequest" -Tags "wget"
Write-Warning -Message "This script will downloads entire directories over specific content rather than entire site. README.md means... Read."
Write-Host "Begin...?" | Pause
Clear-Host

$domainURL = Read-Host -Prompt "Enter domain of link: "
$linkURL = Read-Host -Prompt "Enter link to directory to download: "

wget `
    --recursive `
    --level 5 `
    --no-clobber `
    --page-requisites `
    --adjust-extension `
    --span-hosts `
    --restrict-file-names=windows `
    --domain `
        $domainURL `
    --no-parent `
        $linkURL `
    --verbose

Clear-Host
Write-Output "Done."
Pause

Write-Output "Script by hufa."
Write-Output "https://github.com/imhufa"
Write-Output "https://gist.github.com/imhufa"
Write-Output "https://hufalab.com [TBD] under construction"
Write-Output "contact@hufalab.com"
Write-Output "https://ko-fi.com/imhufa"
Pause

