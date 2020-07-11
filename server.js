const express = require("express");
const secure = require("express-force-https");
require('dotenv').config();
const path = require("path");
const connectDB = require("./db");
const fs = require('fs')
const app = express();

//  JSON parser middleware
app.use(express.json({extended:false}));

//  Force HTTPS Middleware
app.use(secure);

//  Connect MongoDB
// connectDB();

//  API Routes
app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));

app.use(express.static(path.join(__dirname, "client/build")));

//  Production mode
if (process.env.NODE_ENV === "production") {
  //  Static folder
  app.use(express.static(path.join(__dirname, "client/build")));

    app.get("/cv", (req, res) => {
        const data = fs.readFileSync('./cv/cv.pdf');
        console.log(data);
        console.log("/cv root")
        res.contentType("application/pdf");
        res.send(data)
        console.log(req)
        res.send("Hello");
    });

  app.get("*", (req, res) => res.sendfile(path.join((__dirname = "client/build/index.html"))));
}

//  Start server
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`server listening on port: ${port}`));
