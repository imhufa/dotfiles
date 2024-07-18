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
alias chmodsffr='sudo chmod -R 755'
# perm -r 4755
alias chmodsysff='sudo chmod -R 755'
# perm 755
alias chmodsff='sudo chmod 755'

## me is you
# vim is nvim
alias vim=nvim

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
gomyip='curl http://icanhazip.com'
gomyips='curl https://icanhazip.com'

### scripts
alias golistscripts='. ~/.scripts/listscripts.sh'

