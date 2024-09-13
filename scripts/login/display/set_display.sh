#!/usr/bin/env zsh

file="$HOME/.display-mode-check"
search_string="1"
layout_1="$HOME/.screenlayout/mode.sh"
layout_2="$HOME/.screenlayout/disp.sh"
tmpdisp="/tmp/disp.tmp"

if grep -q "$search_string" "$file"; then
	. $layout_2 && echo '1' > $tmpdisp
else
	. $layout_1; wait && \
		. $layout_2 && echo '1' > $tmpdisp
fi

wait

if grep -q "$search_string" "$tmpdisp"; then
	export DISPLAY_MODE_SET="1"
else
	export DISPLAY_MODE_SET=$(echo $null)
fi

