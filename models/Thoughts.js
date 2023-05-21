const {Schema, model} = require('mongoose');
const Reactions = require('./Reactions')

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
                ref: 'reactions',
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

      thoughtsSchema.virtaul('reactionsCount').get(function() {
        return this.reactions.length;
      });

const Thoughts = model('thoughts', thoughtsSchema);

module.exports = Thoughts;