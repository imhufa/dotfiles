#!/usr/bin/env bash

if [[ -f "$HOME/.screenlayout/1.sh" ]]; then
	zsh "$HOME/.screenlayout/1.sh";export DISPLAY_FIX_1="1:$DISPLAY_FIX_1"
elif
	DISPLAY_FIX_1=
fi

if [[ -n DISPLAY_FIX_1 ]]; then
	if [ -f $HOME/.screenlayout/2.sh" ]; then
		zsh "$HOME/.screenlayout/2.sh";
	fi
fi

