Write-Host -ForegroundColor DarkMagenta 'are you downloading porn again..?'
Start-Sleep -Seconds 5 && Clear-Host
Write-Host -ForegroundColor DarkCyan 'ok then..'
Start-Sleep -Seconds 3 && Clear-Host
Write-Warning -Message 'When prompted, type the URL of the video you wanna download if VideoURL is asked.' && Start-Sleep -Seconds 2
Write-Warning -Message 'Type the main domain of the video you want to download it from (ex. youtube.com).' && Start-Sleep -Seconds 2
Write-Warning -Message 'No need for prefix (https://, etc) when VideoDomain is asked for' && Start-Sleep -Seconds 2
Pause -Message 'Comprende Pendejo/Pendeja? Then press enter.'
Clear-Host

$VideoURL=Read-Host -Prompt 'Enter URL: '
$outputWhere=Read-Host -Prompt 'Enter OutputPath: '

yt-dlp `
    --quiet `
    --hls-prefer-ffmpeg `
    -f mp4 `
    --buffer-size 128K `
        $VideoURL `
    -o `
        $outputWhere

Write-Verbose -InformationAction SilentlyContinue && Write-Verbose -ProgressAction SilentlyContinue
