#! /usr/bin/env zsh

function getitW () {
	local warg="$1"
	local wdurl="$2"
	local wlink="$3"
	local outpath="$4"

	if [ -n $warg ]; then
		if [ "$warg" == "help" ]; then
			echo -e 'usage:\n\ngetitW [option]<domain(noprotocol)><link>[outfile/path]\n\n### OPTIONS # ####### ####\n# [  help  query  exec   ]\n# -------- ---- ---\n\n'
		elif [ "$warg" == "query" ]; then
			echo 'query deez nutz. thefuck...'
		elif [ "$warg" == "exec" ]; then
			if [ -z $wdurl ]; then
				echo 'error. missing domain url.'
			else
				if [ -z wlink ]; then
					echo 'error. missing target link.'
				else
					if [ -z $outpath ]
						local outfile="$(pwd)"
					fi
				fi
			fi
		fi
	fi

	if [ "$warg" == "exec" ]; then
		if [ -n $outfile ]; then
			wget \
				--recursive \
				--level 5 \
				--no-clobber \
				--page-requisites \
				--adjust-extension \
				--span-hosts \
				--convert-links \
				--restrict-file-names=windows \
				--domain \
					$wdurl \
				--no-parent \
					$wlink \
				-o \
					$outfile \
				--quiet \
				--show-progress; wait
		else
			wget \
				--recursive \
				--level 5 \
				--no-clobber \
				--page-requisites \
				--adjust-extension \
				--span-hosts \
				--convert-links \
				--restrict-file-names=windows \
				--domain \
					$wdurl \
				--no-parent \
					$wlink \
				-o \
					$outpath \
				--quiet \
				--show-progress; wait
}

