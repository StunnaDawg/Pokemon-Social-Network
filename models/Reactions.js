// Schema only
const {Schema, model} = require('mongoose');

function queryDate(date) {
    return moment(date).format('MMMM Do, YYYY, h:mm a')
}

const reactionsSchema = new Schema (
    {
        reactionBody: {
            type: String, 
            required: true, 
            maxLength: 280,
        }, 
        username: {
            type: String, 
            required: true
        }, 
        createdAt: {
            type: Date, 
            default: Date.now, 
            get: queryDate,
        }, 
    }, 
    {
        id: false,
      }
)

module.exports = reactionsSchema;