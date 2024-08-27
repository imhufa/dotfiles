#! /usr/bin/zsh
#############
# .make.sh
#############

####### variables

dir=~/dotfiles
olddir=~/.dotfiles_old
files="bashrc vimrc zshrc profile tmux.conf xinputrc bash_aliases"

#######

# create dotfiles_old
echo "creating $olddir for backup"
mkdir -p $olddir
echo "...done."

# change to dotfiles directory
echo "changing to the $dir directory..."
cd $dir
echo "...done."

# move any existing dotfiles in homedir
# to dotfiles_old directory
# then create symlinks
for file in files; do
	echo "moving any existing dotfiles from ~ to $olddir..."
	mv ~/.$file ~/.dotfiles_old/
	echo "creating symlinks to $file in home directory..."
	ln -s $dir/$file ~/.$file
done

