Write-Warning -Message "This script will install requirements to run yt-dlp"
$continueMsg = 'Do you want to continue..? y/n'
do {
    $noResponse = Read-Host -Prompt $continueMsg
    if ($noResponse -eq 'n') {
        Write-Host "sucks to suck..." | Start-sleep -Seconds 3
        Write-Host "bye..." | Start-Sleep -Seconds 2
        Exit
    else $yesResponse = Write-Host "beginning requirements installation..."
    }
} until ($noResonse -eq 1)



