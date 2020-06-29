import express from "express";
const path = require('path');

const app = express();
const PORT = 8000;

app.use(express.static(path.join(__dirname, '/assets')));




/*
- home
- about
- contact us
*/

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/views/home.html"));
});

/* app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname + "/home.html"));
});

app.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname + "/home.html"));
}); */

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});






/*
app.get("/item/:id", (request, response) => {
  let userID = Number(request.params.id);
  response.send(data[userID]);
});







app.route("/item")
  .get((request, response) => {
    response.send("This is a get request along route /item ");
  })
  .put((request, response) => {
    response.send("This is a put request along the route /item")
  })
  .delete((request, response) => {
    response.send("This is a delete reques along the route /item")
  })
*/
