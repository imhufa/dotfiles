#! /usr/bin/zsh

if [ -n "$DISPLAY" ]; then
	xrandr && testif=1
else
	testif=
fi

