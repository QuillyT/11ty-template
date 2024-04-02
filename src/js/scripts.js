document.getElementById("index").addEventListener("click", function () {
  let variable = "Clicked INDEX!!";
  alert(variable);
  // in watch-and-minify, we're not using the compression option drop_console
  // because we'll probably be using the console for debugging all the time
  console.log("not compressing");
});
