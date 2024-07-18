#! /usr/bin/zsh

echo -n "Enter ytlink: "
read ytlink
echo -n "Enter outpath: "
read outpath

yt-dlp \
	--hls-prefer-ffmpeg \
	-f mp4 \
	--output \
		$outpath \
	--buffer-size 128K \
		$ytlink


