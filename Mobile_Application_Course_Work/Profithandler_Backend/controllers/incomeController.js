const mongoose = require('mongoose')

const incomeSchema = new mongoose.Schema({
    user: {
        type: String,
        ref: "User"
    },
    date: {
        type: Date,
        required: true,
        default: Date.now
    },
    amount: {
        type: Number,
        required: true
    },
    note: {
        type: String,
        required: false
    }
})

module.exports = mongoose.model('incomeSchema', incomeSchema)