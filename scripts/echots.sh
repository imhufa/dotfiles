#!/usr/bin/zsh

echo -n 'echoFile: '
read echoFile
echo '[<>]: '$(date +%T) >> $echoFile

