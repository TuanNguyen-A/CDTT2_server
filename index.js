const express = require('express');
const morgan = require('morgan');
const mongoClient = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 3000;

var cors = require('cors');
app.use(cors({
  origin: '*',
  exposedHeaders: 'Authorization',
}))


app.use(morgan('combined'));

require("dotenv").config();

// Middlewares
app.use(morgan("dev"));
app.use(bodyParser.json());

// setup connect mongodb by mongoose
mongoClient
  .connect("mongodb://localhost/CDTT2", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ Connected database from mongodb."))
  .catch((error) =>
    console.error(`❌ Connect database is failed with error which is ${error}`)
  );

//Handlebar
const exphbs = require('express-handlebars')
const hbs = exphbs.create({ extname: '.hbs' })
const path = require('path');

//Template engine
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set("views", path.join(__dirname, 'resources/views'));
app.use(express.static(path.join(__dirname, 'public')));

// Routes
const route = require('./routes');
route(app);



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
