Write-Warning -Message "This script will install requirements to run yt-dlp"
$continueMsg = 'Do you want to continue..?'
do {
    $continueResponse = Read-Host -Prompt $continueMsg
    if ($continueResponse -eq 'n') {
        Write-Host "sucks to suck..." | Start=sleep -Seconds 3
        Write-Host "bye..." | Start-Sleep -Seconds 2
        Exit
    }
} until ($continueResponse -eq 1)



