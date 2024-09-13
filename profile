#!/usr/bin/zsh

if [[ -n $BASH_VERSION ]]; then
	if [ -f "$HOME/dotfiles/bashrc" ]; then
		. "$HOME/dotfiles/bashrc";
	fi
fi

