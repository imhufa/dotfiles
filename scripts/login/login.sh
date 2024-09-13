#!/usr/bin/zsh

dir="$DOTFILES_DIR/scripts/login"

. $dir/fix-xset.sh; wait
. $dir/fix-display.sh; wait
. $dir/autorun.sh

