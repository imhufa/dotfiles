#! /usr/bin/zsh

echo -n "Enter ytlink: "
read ytlink

yt-dlp $ytlink \
	"bv*+ba" \
	-o '%(id)s.%(ext)s' \
	--quiet \
	--progress
