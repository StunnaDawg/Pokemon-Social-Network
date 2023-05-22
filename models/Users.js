const {Schema, model} = require('mongoose');
const Thoughts = require('./Thoughts')

function validateEmail(email) {
    let regex = '/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/'
    regex.test(email)
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
        match: ['/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/']
       },
       thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'thoughts'
       }
    ],
       friends: [this]
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