#!/usr/bin/zsh

### PROFILES #
# Allusers Allhosts
#
export PATH=$PSHOME/profile.ps1:$PATH

## Allusers Currenthost
#
export PATH=$PSHOME/Microsoft.PowerShell_Profile.ps1:$PATH

## Currentuser Allhosts
#
export PATH=$HOME/.config/powershell/profile.ps1:$PATH

## Currentuser Currenthost
#
export PATH=$HOME/.config/powershell/Microsoft.Powershell_profile.ps1:$PATH

### MODULES #

## User
export PATH=$HOME/.local/share/powershell/Modules:$PATH

## Shared
export PATH=/usr/local/share/powershell/Modules:$PATH

## Default
export PATH=$PSHOME/Modules:$PATH

### PSREADLINE #

export PATH=$HOME/.local/share/powershell/PSReadLine/ConsoleHost_history.txt:$PATH

if [ -z $PSREADLINE ]; then
	export PSREADLINE=$HOME/.local/share/powershell/PSReadLine/ConsoleHost_history.txt
else
	if [ -z $PSReadLine ]; then
		export PSReadLine=$(echo $PSREADLINE)
	else
		PSReadLine=$(echo $PSREADLINE)
	fi
fi


