#!/usr/bin/zsh

### git

function gacp () {
	git add .; wait
	git commit -m "$1"; wait
	git push; wait
}

function mkcd () {
	mkdir -p -- "$1" && cd -P -- "$1"
}

function mkp () {
	mkdir -p -- "$1"
}

function quip () {
	curdir=$(pwd)
	ipFile=$(echo $curdir)/ip.tmp
	allFile=$(echo $curdir)/allip.tmp

	if [ -e $curdir/ip.tmp ]; then
		echo '' > ip.tmp
	else
		touch ip.tmp && chmod 755 ip.tmp
	fi
	
	clear;wait

	if [[ -n $1 ]]; then
		if [ "$1"="http" ]; then
			curl -s http://icanhazip.com > ip.tmp
		elif
			[ "$1"="https" ]; then
			curl -s https://icanhazip.com > ip.tmp
		elif
			[ "$1"="all" ]; then
			echo -e 'http: '$(curl -s http://icanhazip.com) > $curdir/allip.tmp && echo -e 'https: '$(curl -s https://icanhazip.com) >> $curdir/allip.tmp
		else
			if [ -e $curdir/ip.tmp ]; then
				rm -f $ipFile
			elif
				[ -e $curdir/allip.tmp ]; then
				rm -f $allFile
			fi
		fi
	fi
	
	if [ -e $curdir/ip.tmp ]; then
		cat $ipFile; wait && rm -f $ipFile
	fi

	if [ -e $curdir/allip.tmp ]; then
		cat $allFile; wait && rm -f $allFile
	fi
	
	curdir=(echo $null)
	allFile=(echo $null)
	ipFile=(echo $null)
}

function treeno () {
	if [[ -n $1 ]]; then
		tree -L 1 -a --noreport -- "$1"
	else
		tree -L 1 -a --noreport
	fi
}

function treeone () {
	if [[ -n $1 ]]; then
		tree -L 1 -a -- "$1"
	else
		tree -L 1 -a
	fi
}

function treetwo () {
	if [[ -n $1 ]]; then
		tree -L 2 -a -- "$1"
	else
		tree -L 2 -a
	fi
}

function treela () {
	if [[ -n $1 ]]; then
		tree -L 1 -l -a -- "$1"
	else
		tree -L 1 -l -a
	fi
}

function etree () {
	if [[ -n $1 ]]; then
		tree --noreport -L 1 -a -- "$1" > tree.tmp
	else
		tree --noreport -L 1 -a > tree.tmp
	fi
	cat tree.tmp
}

