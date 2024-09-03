#!/usr/bin/zsh

### git

function gacp() {
	git add .; wait
	git commit -m '$1'; wait
	git push; wait
}

mkcd ()
{
	mkdir -p -- "$1" && cd -P -- "$1"
}

mkp ()
{
	mkdir -p -- "$1"
}

