const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;

app.use(cors());

//reason: i am using get becaus e GET is used to retrieve data from server , post is something to submit or posting
// so GET is relevant as we r just retrieving
app.get("/hello/amjad", (req, res) => {
  res.send("Hello, Amjadd");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${5000}`);
});
