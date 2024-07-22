Write-Warning -Message "This script will install requirements to run yt-dlp"
$continueMsg = 'Do you want to continue..?'
do {
    choice /c yn /m $continueMsg
    $continueResponse = $LASTEXITCODE
    if ($continueResponse

