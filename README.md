# BASE 11ty Project for a good Developer Experience

This is a base 11ty template that uses the following:

|                  |                                    |
| ---------------- | ---------------------------------- |
| **Templates**    | md, nunjucks, and html             |
| **Styles**       | Tailwindcss, postcss, autoprefixer |
| **Linting**      | prettier                           |
| **Minification** | cssnano, terser                    |

# Developer Experience

The way I like to work is to have a tmux session up with 3 windows:

1. window 1 | pane 1 - running the server w/ hot-reload `npm start`
2. window 1 | pane 2 - watching for style changes `npm run style`
3. window 2 | pane 1 - lunarvim

Things I want while I'm developing, here are a few things that I want to have happen when I save changes:

1. prettier automatically formats my files on save (IDE setup)
2. tailwindcss to be automatically rebuilt and minified when styles are changed
3. output javascript to be automatically minified/mangled
4. output html to be automatically minified
5. after all that the server automatically hot-reloads

this lets me make changes, save the file, and immediately alt-tab and refresh my browser instead of having to run any intermediary build steps.

# `staged/`

This folder holds all my passthrough files. This is where the production ready (built/processed and minified) files go.

Using tailwind means having an extra build step around the styles. The resulting style files are going to be different from my `input.css`. My preference is to keep those files in separate places.

Similarly, I will want to use minifed/mangled my javascript files.
