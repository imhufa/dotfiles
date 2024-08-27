#!/bin/sh

echo -n "\033]0; Converting 0001-2.mp4 (1/2)\007"
/usr/bin/ffmpeg -ss 00:01:00  -y -i "/home/go/Desktop/yt/2/0001-2.mp4" -f mp4   -r:v 30 -vcodec libx264 -preset slow -filter:v scale=1920:1080 -b:v 1000k  -aspect 21:9 -flags +loop -cmp chroma -b:v 1250k -maxrate 1500k -bufsize 4M -bt 256k -refs 1 -bf 3 -coder 1 -me_method umh -me_range 16 -subq 7 -partitions +parti4x4+parti8x8+partp8x8+partb8x8 -g 250 -keyint_min 25 -level 30 -qmin 10 -qmax 51 -qcomp 0.6 -trellis 2 -sc_threshold 40 -i_qfactor 0.71 -acodec aac -strict experimental -b:a 112k -ar 48000 -ac 2  -t 00:00:30  "/home/go/tmp_3682415.mp4"
/usr/bin/ffplay "/home/go/tmp_8326198.mp4"

rm "/home/go/tmp_8326198.mp4"
rm "/home/go/.winff/ff240627000208.sh"
