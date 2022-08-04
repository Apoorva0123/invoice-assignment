const mongoose = require('mongoose');
const invoiceShema = new mongoose.Schema(
    {
        number: {type: Number, required: true},
        amount: {type: Number, required: true},
        date: {type: Date, required: true}
    },
    {
        versionKey: false,
        timestamps: true
    }
)

module.exports = mongoose.model('invoice', invoiceShema);