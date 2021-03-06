const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
// const passport = require('passport');

const apiRoutes = require('./server/routes/apiRoutes');

const app = express();

//const db = require('./server/db/db')
 
  

app.use(morgan('combined'));
app.use(cors());


const PORT = process.env.PORT || 3000;
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// app.use(require('cookie-parser')());
// app.use(require('connect-flash')());
// app.use(require('express-session')({
//   secret: 'keyboard cats',
//   resave: false,
//   saveUninitialized: false
// }));

// require('./server/config/passport')(passport);
// app.use(passport.initialize());
// app.use(passport.session());

app.use(express.static("client/build"));
app.use('/api', apiRoutes);

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(pathh.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
    console.log(`Started on port ${PORT}`);
  });