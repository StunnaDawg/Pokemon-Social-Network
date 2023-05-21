const {Schema, model} = require('mongoose');
const Thoughts = require('./Thoughts')

function validateEmail(email)

const usersSchema = new Schema(
    {
       username: {
        type: String,
        unique: true,
        required: true,
        trim: true
       },
       email: {
        type: String,
        unique: true,
        required: true,
        trim: true
       }
    }
)