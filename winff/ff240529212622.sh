#!/bin/sh

echo -n "\033]0; Converting rm001.mp4 (1/1)\007"
/usr/bin/ffmpeg -y -i "/home/go/.seacrit/hub/vid/roommate/rm001.mp4" -f mp4   -r:v 60 -vcodec libx264 -preset slow -filter:v scale=1280:720 -b:v 1000k  -aspect 21:9 -flags +loop -cmp chroma -b:v 1250k -maxrate 1500k -bufsize 4M -bt 256k -refs 1 -bf 3 -coder 1 -me_method umh -me_range 16 -subq 7 -partitions +parti4x4+parti8x8+partp8x8+partb8x8 -g 250 -keyint_min 25 -level 30 -qmin 10 -qmax 51 -qcomp 0.6 -trellis 2 -sc_threshold 40 -i_qfactor 0.71 -acodec aac -strict experimental -b:a 112k   -r:a 44100 -ac 2  -vol 117  "/home/go/videos/winff/rm001.mp4"

read -p "Press Enter to Continue" dumbyvar
rm "/home/go/.winff/ff240529212622.sh"
