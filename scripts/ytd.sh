#! /usr/bin/zsh

echo -n "Enter ytlink: "
read ytlink

yt-dlp \
	'bv*+ba' \
		$ytlink \
	-o '%(id)s.%(ext)s' \
	--quiet \
	--progress

