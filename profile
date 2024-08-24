### profile ###

# bash
if [ -f "$HOME/.scripts/motd.sh" ]; then
	. "$HOME/.scripts/motd.sh"
fi

if [ -n "$BASH_VERSION" ]; then
    if [ -f "$HOME/.bashrc" ]; then
	. "$HOME/.bashrc";wait
    fi
fi

# zsh
if [ -n $ZSH_VERSION ]; then
	if [ -f "$HOME/.zshrc" ]; then
		. "$HOME/.zshrc"; wait
	fi
fi

# display
if [ -n "$DISPLAY_FIXED" ]; then
	echo 'display fixed.'
else
	. "$HOME/.screenlayout/display_fixed.sh"; wait
fi

if [ -n "$DISPLAY_FIXED" ]; then
	echo 'screenlayout fixed.'
else
	. "$HOME/.screenlayout/fix-display.sh"; wait
fi

# autorun

if [ -n $USER ]; then
	if [ -f "$HOME/.scripts/source.sh" ]; then
		. "$HOME/.scripts/source.sh"; wait
	else
		echo 'error: check source.'
	fi
fi

