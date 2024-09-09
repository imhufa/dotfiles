#! /usr/bin/zsh

echo -n "Enter ytlink: "
read ytlink

yt-dlp $ytlink \
	--audio-quality 'bv*+ba' \
	-o '%(id)s.%(ext)s' \
	--quiet \
	--progress

