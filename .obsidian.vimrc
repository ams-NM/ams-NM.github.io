" Remap <Esc> to 'jk' in insert mode
imap jk <Esc>

" Emulate Folding https://vimhelp.org/fold.txt.html#fold-commands
exmap togglefold obcommand editor:toggle-fold
nmap zo :togglefold
nmap zc :togglefold
nmap za :togglefold

exmap unfoldall obcommand editor:unfold-all
nmap zR :unfoldall

exmap foldall obcommand editor:fold-all
nmap zM :foldall

" Emulate Tab Switching https://vimhelp.org/tabpage.txt.html#gt
" requires 'Tab Switcher' (was 'Cycle Through Panes') Plugins https://obsidian.md/plugins?id=cycle-through-panes
" exmap tabnext obcommand cycle-through-panes:cycle-through-panes
exmap tabnext obcommand workspace:next-tab
nmap gt :tabnext
" exmap tabprev obcommand cycle-through-panes:cycle-through-panes-reverse
exmap tabprev obcommand workspace:previous-tab
nmap gT :tabprev

nmap <A-j> ddp
nmap <A-k> ddkkp

