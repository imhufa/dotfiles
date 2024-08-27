#!/usr/bin/zsh

. "$HOME/.screenlayout/mode.sh"
xrandr --output HDMI-A-0 --primary --mode 2560x1080_75.00 --pos 0x0 --rate 75 --dpi 96 --primary --rotate normal; wait
xrandr --output HDMI-A-1 --off; wait
xrandr --output DisplayPort-0 --off; wait

