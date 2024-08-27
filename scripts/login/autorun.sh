#!/usr/bin/zsh

pkill compton; wait
pkill tint2; wait
pkill conky; wait
pkill openbox; wait
pkill nitrogen; wait

compton; wait
openbox; wait
tint2; wait
conky; wait
nitrogen

