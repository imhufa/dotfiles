#!/usr/bin/zsh

xrandr --rmmode 2560x1080_75.00;wait
xrandr --newmode "2560x1080_75.00"  295.08  2560 2744 3024 3488  1080 1081 1084 1128  -HSync +Vsync && xrandr --addmode HDMI-A-0 2560x1080_75.00

