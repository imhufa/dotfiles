#! /usr/bin/zsh

if [ -f "$HOME/.screenlayout/mode.sh" ];
then
	zsh "$HOME/.screenlayout/mode.sh"
fi

if [ -f "$HOME/.screenlayout/disp.sh" ];
then
	zsh "$HOME/.screenlayout/disp.sh"
fi

if [ -f "$HOME/.screenlayout/main.sh" ];
then
	zsh "$HOME/.screenlayout/main.sh"
fi

SCREENLAYOUT_DONE="1"

echo "All display scripts done.";echo $date

