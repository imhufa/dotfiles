#! /usr/bin/zsh

echo -n "Enter hwamain: "
read hwamain
echo -n "Enter hwalink: "
read hwalink

wget \
	--recursive \
	--level 5 \
	--no-clobber \
	--page-requisites \
	--adjust-extension \
	--span-hosts \
	--convert-links \
	--restrict-file-names=windows \
	--domain \
		$hwamain \
	--no-parent \
		$hwalink
