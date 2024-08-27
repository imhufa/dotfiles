#!/usr/bin/zsh

. "$HOME/.bash_aliases"
. "$HOME/.bash_path"
. "$HOME/.bash_export"
. "$HOME/.profile"

source $ZSH/oh-my-zsh.sh

if [ -d "$HOME/.cargo/env" ]; then
	. "$HOME/.cargo/env";
fi

