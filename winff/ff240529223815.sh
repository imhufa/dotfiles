#!/bin/sh

echo -n "\033]0; Converting rm001.mp4 (1/1)\007"
/usr/bin/ffmpeg -ss 0:0:9 -y -i "/home/go/.seacrit/hub/vid/roommate/rm001.mp4" -crf 20.0 -vcodec libx264 -filter:v scale=1920:1080 -preset slow -acodec aac -strict experimental   -r:a 44100 -b:a 96000k -coder 1 -flags +loop -cmp chroma -partitions +parti4x4+partp8x8+partb8x8 -me_method hex -subq 6 -me_range 16 -g 250 -keyint_min 25 -sc_threshold 40 -i_qfactor 0.71 -b_strategy 1 -threads 0 -r:v 30  -aspect 16:9 -b:a 96000k -ac 2 -vol 100   "/home/go/videos/winff/tmp_6481718.mp4"
/usr/bin/ffplay "/home/go/videos/winff/tmp_6481718.mp4"

rm "/home/go/videos/winff/tmp_6481718.mp4"
rm "/home/go/.winff/ff240529223815.sh"
