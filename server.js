const express = require("express");
const secure = require("express-force-https");
const path = require("path");
const connectDB = require("./db");

const app = express();

//  JSON parser middleware
app.use(express.json({extended:false}));
//  Force HTTPS Middleware
app.use(secure);
//  Connect MongoDB
connectDB();
//  Routes
app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));

//  Production mode
if (process.env.NODE_ENV === "production") {
  //  Static folder
  app.use(express.static(path.join(__dirname, "client/build")));

  app.get("/", (req, res) =>
    res.sendfile(path.join((__dirname = "client/build/index.html")))
  );
}

//  Start server
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`server listening on port: ${port}`));
