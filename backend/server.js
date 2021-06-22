const express = require('express');
const path = require("path");
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', () => {
	console.log("MongoDB database connection established successfully");
})

// Show Foto
app.use('/public', express.static(path.join(__dirname, "../public/")));
//

const konsultasiRouter = require('./routes/konsultasi');
const orderRouter = require('./routes/order');
const usersRouter = require('./routes/users');

app.use('/konsultasi', konsultasiRouter);
app.use('/order', orderRouter);
app.use('/users', usersRouter);

app.listen(port, () => {
	console.log(`Server is running on port: ${port}`);
});