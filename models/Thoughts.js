const {Schema, model} = require('mongoose');
const Reactions = require('./Reactions');
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
        reactions: [
            {
                type: Schema.Types.ObjectId,
                ref: 'reactions'
            }
        ]
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
      return this.reactions
           });

const Thoughts = model('thoughts', thoughtsSchema);

module.exports = Thoughts;