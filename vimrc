" ::defaults 

" >:tabspace [:set ts=4 sw=4 sts=0 noet ai:]
set tabstop=4
set softtabstop=0 noexpandtab
set shiftwidth=4
set autoindent

set number
set numberwidth=1
syntax on

" ::functions
function! UseTabs()
  set tabstop=4
  set shiftwidth=4
  set softtabstop=0 noexpandtab
  set autoindent
  print "using tabs."
endfunction

function! UseSpaces()
  set tabstop=2
  set shiftwidth=2
  set softtabstop=0 expandtab
  set autoindent
  set smarttab
  print "using spaces."
endfunction

function! ToggleNu()
	set nu!
	if &number
		echo "nu!"
	else
		echo "no...nu."
	endif
endfunction

" ::keybinds

" >:normal [:nmap nnoremap:]
nnoremap <F20> :call ToggleNu()<CR>

" >:command-line [:cmap cnoremap:]
cnoremap W!! execute 'silent! write !sudo tee % >/dev/null' <bar> edit!
cnoremap S!! execute 'source $HOME/.vimrc' <bar> echo "sourced!"<CR>
cnoremap WQ! execute 'wq!<CR>'
cnoremap src! execute 'silent! source $HOME/.vimrc' <bar> echo "sourced!"


" >:insert [:imap inoremap:]
" >:visual [:vmap vnoremap:]
" >:select [:smap snoremap:]
" >:operator-pending [:omap onoremap:]

