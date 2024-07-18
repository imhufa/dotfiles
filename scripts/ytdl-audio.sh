#! /usr/bin/zsh

echo -n "Enter ytlink: "
read ytlink
echo -n "Enter outpath: "
read outpath

yt-dlp \
	--hls-prefer-ffmpeg \
	--extract-audio \
	--audio-quality 0 \
	--audio-format flac \
	--output \
		$outpath \
	--buffer-size 256K \
		$ytlink


