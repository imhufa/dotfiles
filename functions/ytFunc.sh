#!/usr/bin/zsh

function ytlist () {
	listPath=$(echo $1)
	yt-dlp \
		-a \
		$listPath \
		--audio-quality 'bv*+ba' \
		-o "%(autonumber)03d.%(ext)s" \
		--progress \
		--quiet
}

