#!/usr/bin/env zsh

$tmpdisp="/tmp/disp.tmp"
$layout_3="$HOME/.screenlayout/main.sh"

if [ "$DISPLAY_MODE_SET" -eq 1 ]; then
	. $layout_3 && export DISPLAY_MODE_SCALED="1"
else
	export DISPLAY_MODE_SCALED="0"
fi

wait

if [ "$DISPLAY_MODE_SCALED" -eq 1 ]; then
	rm $tmpdisp
fi

