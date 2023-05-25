const {Schema, model} = require('mongoose');
const Thoughts = require('./Thoughts')

function validateEmail(email) {
    let regex = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
    return regex.test(email)
}

const usersSchema = new Schema(
    {
       username: {
        type: String,
        unique: true,
        required: 'username is required',
        trim: true
       },
       email: {
        type: String,
        unique: true,
        required: 'email is required',
        validate: [validateEmail, 'Enter a vaild email'],
       },
       thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'thoughts'
       }
    ],
       friends: [
        {
            type: Schema.Types.ObjectId,
            ref: 'user'
       }
    ],
    },
    {
        toJSON: {
          virtuals: true,
          getters: true,
        },
        id: false,
      }
)

const Users = model('user', usersSchema)

module.exports = Users;