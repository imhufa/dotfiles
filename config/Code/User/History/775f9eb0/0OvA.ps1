Write-Information -MessageData "script using wget command rather than Invoke-Webrequest" -Tags "wget"
Write-Warning -Message "This script will downloads entire directories over specific content rather than entire site. README.md means... Read."
Write-Host "Begin...?" | Pause
Clear-Host

Read-Host -Prompt "Enter domainURL: "
Read-Host =Prompt "Enter linkURL: "

wget `
    -recursive `
    -level 5 `
    -no-clobber `
    -page-requisites `
    -adjust-extension `
    -span-hosts `
    -restrict-file-names=windows `
    -domain `
        $domainURL `
    -no-parent `
        $linkURL

Clear-Host
Write-Progress -Completed "Done."
Pause

