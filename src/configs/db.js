const mongoose = require("mongoose");

module.exports = () => {
  return mongoose.connect(
    "mongodb+srv://Apoorvati:Apoorvati@cluster0.gwcgf.mongodb.net/?retryWrites=true&w=majority"
  );
};
