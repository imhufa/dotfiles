Write-Warning -Message "This script will install requirements to run yt-dlp"
$continueMsg = 'Do you want to continue..?'
do {
    $continueResponse = Read-Host -Prompt $continueMsg
    if ($continueResponse -eq 'y')