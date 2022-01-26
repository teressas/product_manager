// Import Dependencies
const express = require("express");
const cors = require('cors');

const app = express();
const port = 8000;

// This will fire our mongoose.connect statement to initialize our database connection
require("./config/mongoose.config");

// use cors
app.use(cors());
// Configure Express
app.use(express.json(), express.urlencoded({ extended: true }));

// Routes
// This is where we import the users routes function from our user.routes.js file
// SERVER RUNS ALL ROUTES BEFORE CALLING ROUTES
console.log("server.js: before routes")
// ADD THIS BEFORE ADDING ROUTES!!!
require("./routes/product.routes")(app);

// const AllMyJokeRoutes = require("./server/routes/joke.routes");
// AllMyJokeRoutes(app);

app.listen(port, () => console.log(`Listening on port: ${port}`) );