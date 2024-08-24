#!/usr/bin/zsh

xrandr --listactivemonitors | grep "HDMI-A-0" > $HOME/.screenlayout/.display_fixed
wait

if [ -f "$HOME/.screenlayout/.display_fixed" ]; then
	DISPLAY_FIXED=$(cat $HOME/.screenlayout/.display_fixed)
else
	DISPLAY_FIXED=
fi

