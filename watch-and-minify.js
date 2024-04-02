const chokidar = require("chokidar");
const { minify } = require("terser");
const fs = require("fs");
const path = require("path");

// Directories
const srcDir = path.join(__dirname, "src/js");
const destDir = path.join(__dirname, "staged");

// Ensure the destination directory exists
if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

// Minify options
options = {
  compress: {
    drop_console: true,
  },
  mangle: true,
  output: {
    comments: false,
  },
};

// Watcher
const watcher = chokidar.watch(srcDir, { persistent: true });

watcher
  .on("add", (filePath) => minifyFile(filePath))
  .on("change", (filePath) => minifyFile(filePath));

function minifyFile(filePath) {
  const fileName = path.basename(filePath);
  const destPath = path.join(destDir, fileName);

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      return console.error(`Error reading ${filePath}:`, err);
    }

    minify(data, options)
      .then((minified) => {
        fs.writeFile(destPath, minified.code, (err) => {
          if (err) {
            return console.error(`Error writing ${destPath}:`, err);
          }
          console.log(`Minified and copied: ${fileName}`);
        });
      })
      .catch((err) => {
        console.error(`Error minifying ${filePath}:`, err);
      });
  });
}

console.log(`Watching for file changes on ${srcDir}`);
