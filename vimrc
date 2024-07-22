set tabstop=4 " vim :set ts=4 sw=4 sts=0 et :
set softtabstop=0 noexpandtab
set shiftwidth=4
set autoindent

syntax on

function UseTabs()
  set tabstop=4		" size of a hard tabstop (ts).
  set shiftwidth=4	" size of an indentation (sw).
  set softtabstop=0 noexpandtab	" always use tabs not spaces (noet).
  set autoindent	" copy indent from current line when starting new line (ai).
endfunction

function UseSpaces()
  set tabstop=2
  set shiftwidth=2
  set expandtab		" always use spaces not tabs (et).
  set softtabstop=0 	" number of spaces a <tab> counts for. <0> feature is off (sts).
  set autoindent
  set smarttab		" insert blank spaces on a <tab> key.
endfunction

