#!/bin/sh

echo -n "\033]0; Converting stress.mp4 (1/1)\007"
/usr/bin/ffmpeg -y -i "/home/go/Desktop/stress.mp4" -f avi -r 29.97 -vcodec libxvid -vtag XVID -filter:v scale=w=704:h=384 -aspect 16:9 -maxrate 1800k -b:v 1500k -qmin 3 -qmax 5 -bufsize 4096 -mbd 2 -bf 2 -trellis 1 -flags +aic -cmp 2 -subcmp 2 -g 300 -acodec libmp3lame -ar 48000 -b:a 128k -ac 2 "/home/go/Desktop/stress.avi"

read -p "Press Enter to Continue" dumbyvar
rm "/home/go/.winff/ff240622001501.sh"
