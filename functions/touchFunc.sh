#!/usr/bin/zsh

function touchme () {
	touchFile=$(echo $1)
	touch 1.tmp
	chmod 755 1.tmp
	mv 1.tmp $touchFile
}

