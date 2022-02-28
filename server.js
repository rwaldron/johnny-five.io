const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

app.use(express.static("public"));

app.listen(port, () => {
  console.log(`johnny-five.io running on ${port}`);
});
