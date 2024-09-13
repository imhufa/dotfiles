#!/usr/bin/env zsh

dir="$DOTFILES_DIR/scripts/login/display"
step1="check_display.sh"
step2="set_display.sh"
step3="scale_display.sh"

. "$dir/$step1"; wait
. "$dir/$step2"; wait
. "$dir/$step3"

