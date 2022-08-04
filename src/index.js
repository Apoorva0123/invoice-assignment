const express = require("express");
var cors = require("cors");


const invoiceController = require("./controllers/invoice.controller")
const app = express();

app.use(express.json());
app.use(cors());


app.use("/invoice",invoiceController)

module.exports = app;