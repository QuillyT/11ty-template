# BASE 11ty Project

This is a base 11ty template that uses the following:

**Templating:** md, nunjucks, and html
**Styles:** Tailwindcss
**Linting:** prettier
**Minification:** terser

# Developer Experience

Things I want while I'm developing:

1. a server that automatically hot-reloads when I save changes
2. prettier setup to automatically format my files on save
3. tailwindcss to be automatically rebuilt when styles are changed

The way I like to work is to have a tmux session up with 3 windows:

1. window 1 | pane 1 - running the server w/ hot-reload
2. window 1 | pane 2 - watching for asset changes
3. window 2 | pane 1 - lunarvim
