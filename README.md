# BASE 11ty Project for a good Developer Experience

This is a base 11ty template that uses the following:

|                  |                                             |
| ---------------- | ------------------------------------------- |
| **Templates**    | md, nunjucks, and html                      |
| **Styles**       | Tailwindcss, postcss, autoprefixer, cssnano |
| **Linting**      | prettier                                    |
| **Minification** | terser                                      |

# Developer Experience

The way I like to work is to have a tmux session up with 3 windows:

1. window 1 | pane 1 - running the server w/ hot-reload `npm start`
2. window 1 | pane 2 - watching for style changes `npm run style`
3. window 2 | pane 1 - lunarvim

Things I want while I'm developing, here are a few things that I want to have happen when I save changes:

1. the server that automatically hot-reloads
2. prettier automatically formats my files on save (IDE setup)
3. tailwindcss to be automatically rebuilt when styles are changed
4. output styles to automatically be minified
5. output javascript to be automatically minified
6. output html to be automatically minified

# Styles

Out of the box, tailwind's build command comes with a `--watch` flag that looks for and related file changes.
There are also instructions for [minification](https://tailwindcss.com/docs/optimizing-for-production) so we followed that and installed `cssnano`
