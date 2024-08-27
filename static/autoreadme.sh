#!/usr/bin/zsh

tree -a --noreport -L 1 $HOME/dotfiles > ./tree.md; wait
tail -n +2 "tree.md" > "tree.tmp"; mv "tree.tmp" "tree.md"; wait
cat ./header.md > ./readme.md; wait
echo -e '\n<b>dotfiles</b>' >> ./readme.md; wait
cat ./tree.md >> ./readme.md; wait
echo -e '<br>\n<br>\n<br>\n<br>' >> ./readme.md
echo '<i><b>[updated]: </b>'$(date +%D)'</i>' >> ./readme.md
cp ./readme.md ../README.md

