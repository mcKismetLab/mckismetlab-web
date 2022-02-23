const express = require("express");
const path = require("path");
const app = express();

let staticPath = path.join(__dirname, "../");
app.use(express.static(staticPath));

app.listen(4000, () => {
    console.log("server started on port 4000");
});