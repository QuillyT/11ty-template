# BASE 11ty Project

This is a base 11ty template that uses the following:
| | |
| ---------------- | ---------------------------------- |
| **Templates** | md, nunjucks, and html |
| **Styles** | Tailwindcss, postcss, autoprefixer |
| **Linting** | prettier |
| **Minification** | html-minifier, cssnano, terser |

# Message to future me

Hey.

1. clone the repo
2. rename the directory
3. delete `.git`
4. `git init`
5. `npm install`
6. thank past-you

You're welcome.
I'm sure you'll find a way to ruin this for us though. :smirk:

# Developer Experience

The way I like to work is to have a tmux session up with 3 windows:

1. window 1 | pane 1 - running the server w/ hot-reload `npm start`
2. window 1 | pane 2 - watching for style changes `npm run style`
3. window 1 | pane 3 - watching for js changes `node watch-and-minify.js`
4. window 2 | pane 1 - lunarvim

## Things I want while I'm developing

Here are a few things that I want to have happen when I save changes:

1. prettier automatically formats my files on save (IDE setup)
2. tailwindcss to be automatically rebuilt and minified when styles are changed
3. output javascript to be automatically minified/mangled
4. output html to be automatically minified
5. after all that the server automatically hot-reloads

This lets me make changes, save the file, and immediately alt-tab and refresh my browser instead of having to run any intermediary build steps.

# 11ty

## `staged/`

This folder holds all my passthrough files. This is where the production ready (built/processed and minified) files go.

Using tailwind means having an extra build step around the styles. The resulting style files are going to be different from my `input.css`. My preference is to keep those files in separate places.

Similarly, I will want to use compressed/mangled javascript files.

If I want to self-host something like `alpine.min.js` or pull in PrismJS and the styles.
