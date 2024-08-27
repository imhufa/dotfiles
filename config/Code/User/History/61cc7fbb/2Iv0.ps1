Write-Warning -Message "This script will install requirements to run yt-dlp"
$continueMsg = 'Do you want to continue..?'
do {
    choice /c yn /m $continueMsg
    $continueResponse = $LASTEXITCODE
    if ($continueResponse -eq 0) {
        Write-Host "sucks to suck..."
        Start-Sleep -Seconds 3
        Write-Host "bye."
        Start-Sleep -Seconds 2
        Exit
    }
} until ($continueResponse -eq 1)


