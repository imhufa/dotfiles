export ZSH="$HOME/dotfiles/oh-my-zsh"

ZSH_THEME="gnzh"

DISABLE_AUTO_TITLE="true"

plugins=(git)

source "$ZSH/oh-my-zsh.sh"

if [ -f "$HOME/dotfiles/scripts/source.sh" ]; then
	. "$HOME/dotfiles/scripts/source.sh";
fi


