export ZSH="$HOME/dotfiles/oh-my-zsh"

ZSH_THEME='kimwz'

DISABLE_AUTO_TITLE="true"

DISABLE_LS_COLORS="true"

source "$ZSH/oh-my-zsh.sh"

if [ -f "$HOME/dotfiles/scripts/source.sh" ]; then
	. "$HOME/dotfiles/scripts/source.sh";
fi

plugins=(git colorize command-not-found themes)

