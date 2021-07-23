// Express
const express = require('express');
const path = require("path");
const app = express();
// Cors
const cors = require('cors');
// BodyParser
const bodyParser = require('body-parser');
// .env
require('dotenv').config();
// Middlewares
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());
// MongoDB
const mongoose = require('mongoose');

// MongoDB Open Connection
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', () => {
	console.log("MongoDB database connection established successfully");
})

// Access Foto
app.use('/public', express.static(path.join(__dirname, "../public/")));

// CRUD Konsultasi, Order, Users
const konsultasiRouter = require('./routes/konsultasi');
const orderRouter = require('./routes/order');
const usersRouter = require('./routes/users');

app.use('/konsultasi', konsultasiRouter);
app.use('/order', orderRouter);
app.use('/users', usersRouter);

// Port:5000
const port = process.env.PORT || 5000;
app.listen(port, () => {
	console.log(`Server is running on port: ${port}`);
});