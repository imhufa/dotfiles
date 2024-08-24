#! /usr/bin/zsh

### env var
export EDITOR=nvim
export VISUAL=nvim
export HISTCONTROL=ignoreboth:erasedups
export PROMPT_COMMAND="history -a; history -n"
export HISTIGNORE="ls:ll:cd:pwd:bg:fg:history"
export HISTSIZE=100000
export HISTFILESIZE=10000000
export HISTTIMEFORMAT="%d/%m/%y %T "

### motd
echo $SHELL
echo $USER
date

### colors
alias l.='ls -d .* --color=auto'
alias xzegrep='xzegrep --color=auto'
alias xzfgrep='xzfgrep --color=auto'
alias xzgrep='xzgrep --color=auto'
alias zegrep='zegrep --color=auto'
alias zfgrep='zfgrep --color=auto'
alias zgrep='zgrep --color=auto'

### custom
## commands
# perm -r 755
alias gochmodallr='sudo chmod -R 755'
alias gochmodall='sudo chmod 755 ./*'
alias gochmodx='sudo chmod +x'
alias gochmodxall='sudo chmod +x ./*'
alias gochmodxr='sudo chmod -R +x'
alias gochmodsysr='sudo chmod -R 4755'
alias gochmodsys='sudo chmod 4755'

## me is you
# vim is nvim
alias vim='nvim'

## apt
# update
alias goupdate='sudo apt update && sudo apt-get update'
# upgrade
alias goupgrade='sudo apt upgrade -y && sudo apt-get upgrade -y'
# clean pkg
alias gocleanapt='sudo apt autoremove -y && sudo apt autoclean'
# update and clean pkg
alias gofupdate='sudo apt update && sudo apt -y upgrade && sudo apt -y --purge autoremove && sudo apt -y autoclean'
# distribution upgrade
alias goupdist='sudo apt-get dist-upgrade -y'

### info
## ip
alias gomyip='. $HOME/.scripts/query-ip.sh'

### scripts
alias golistscripts='. $HOME/dotfiles/scripts/listscripts.sh'

### command args
alias la='ls -la'
alias ll='ls -a1'

### TBD
##
# alias ohmyzsh='mate $HOME/.oh-my-zsh'

### JUST ADDED
alias echormLine='echo -n "Enter Path: ";read echormLine && sed -i "$ d" $echormLine'
alias gogetdate='zsh $HOME/.scripts/godate.sh'
#
## v8.21
alias gosetsocks='. $HOME/.proxy/socks5.sh'
alias gosethttp='. $HOME/.proxy/http-s.sh'
alias goqproxy='. $HOME/.proxy/query-proxy.sh'
alias goclearnet='. $HOME/.proxy/unset-proxy.sh'
alias gosetaptip='export GO_APT_PROXY="1";wait; echo $GO_APT_PROXY'
alias gounsetaptip='unset GO_APT_PROXY'
alias goaptproxy='. $HOME/.proxy/apt-proxy.sh'
alias gofixdisplay='. $HOME/.screenlayout/fix-display.sh'
alias gotimedate='. $HOME/.scripts/clock.sh'
alias goupalias='. $HOME/.bash_aliases'
#
## v8.22
alias sourcegozsh='. $HOME/.zshrc'
alias sourcegoalias='. $HOME/.bash_aliases'
ohmyzsh="$HOME/dotfiles/oh-my-zsh"

