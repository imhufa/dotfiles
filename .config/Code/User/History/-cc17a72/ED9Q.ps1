Write-Warning -Message "This script will install requirements to run yt-dlp"
$continueMsg = 'Do you want to continue..? y/n'
do {
    $noResponse = Read-Host -Prompt $continueMsg
    if ($noResponse -eq 'n') {
        Write-Host "sucks to suck..." | Start-sleep -Seconds 3
        Write-Host "bye..." | Start-Sleep -Seconds 2
        Exit
    }
    $yesResponse = Read-Host -Prompt $continueMsg
    if ($yesResponse -eq 'y') {
        Write-Host "k. installing requirements..."
        Start-Sleep -Seconds 3
    }
} until ($noResonse -eq 2)

Clear-Host
Write-Host "Worked."
Pause



