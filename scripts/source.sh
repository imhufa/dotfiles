#!/usr/bin/zsh

. "$HOME/.bash_aliases"
. "$HOME/.bash_path"
. "$HOME/.bash_export"
. "$HOME/.profile"

if [ -d "$HOME/.cargo/env" ]; then
	. "$HOME/.cargo/env";
fi

