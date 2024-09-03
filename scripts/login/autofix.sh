#!/usr/bin/zsh

# xrandr
if [ -n "$DISPLAY_FIXED" ]; then
	echo 'display fixed.'
else
	. "$HOME/.screenlayout/display_fixed.sh"; wait
fi

if [ -n "$DISPLAY_FIXED" ]; then
	echo 'screenlayout fixed.'
else
	. "$HOME/.screenlayout/fix-display.sh"; wait
fi

# xset
if [ -f "$HOME/.scripts/login/fix-xset.sh" ]; then
	. "$HOME/.scripts/login/fix-xset.sh"; wait
fi
clear
