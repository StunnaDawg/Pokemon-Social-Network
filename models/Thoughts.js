const {Schema, model} = require('mongoose');
const reactionsSchema = require('./Reactions');
const { text } = require('express');
const moment = require('moment')

function queryDate(date) {
    return moment(date).format('MMMM Do, YYYY, h:mm a')
}

const thoughtsSchema = new Schema(
    {
        thoughtText: {
            type: String, 
            required: true, 
            minLength: 1, 
            maxLength: 280,
        }, 
        createdAt: {
            type: Date, 
            default: Date.now, 
            get: queryDate,
        }, 
        username: {
            type: String, 
            required: true,
        }, 
        reactions: [reactionsSchema]
    }, 
    {
        toJSON: {
            virtuals: true,
            getters: true,
        },
        id: false,
      }
);

     thoughtsSchema.virtual('reactionsCount').get(function() {
      return this.reactions.length
           });

const Thoughts = model('thoughts', thoughtsSchema);

module.exports = Thoughts;