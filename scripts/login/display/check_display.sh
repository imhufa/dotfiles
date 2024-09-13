#!/usr/bin/env zsh

file="$HOME/.display-mode-check"
search_string="2560x1080_75.00"
tmpfile="/tmp/mode.tmp"

xrandr -q | grep "2560x1080_75.00" | awk -F " " ' { print $1 } ' > $tmpfile; wait

if grep -q "$search_string" "$tmpfile"; then
	echo '1' > $file
else
	echo '0' > $file
fi

wait

if [ -f $tmpfile ]; then
	rm $tmpfile
fi

