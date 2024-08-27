### source shell
#
# bash
if [ -n "$BASH_VERSION" ]; then
    if [ -f "$HOME/.bashrc" ]; then
	. "$HOME/.bashrc";wait
    fi
fi

# source
if [ -f "$HOME/.scripts/source.sh" ]; then
	. $HOME/.scripts/source.sh;
fi

### zsh config

# theme
#
ZSH_THEME="gnzh"

# options
# 
DISABLE_AUTO_TITLE="true"

# plugins
#
plugins=(git)

