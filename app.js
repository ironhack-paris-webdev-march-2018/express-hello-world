const express = require("express");

const app = express();

// Tell Express to look in the "public/" folder for URLs
app.use(express.static("public"));

// Route
// --------------------
// A URL that is visitable in our application
// TWO arguments:
//   1. String of the URL
//   2. Callback function
app.get("/", (request, response, next) => {
  response.sendfile(__dirname + "/views/home-page.html");
});

app.get("/cat", (request, response, next) => {
  response.sendfile(__dirname + "/views/cat-page.html");
});

console.log("DIRNAME " + __dirname);

app.listen(3000, () => {
  console.log("Server ready!");
});
