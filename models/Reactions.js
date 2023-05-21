// Schema only
const {Schema, model} = require('mongoose');

const reactionsSchema = new Schema (
    {
        reactionId: {
            type: Schema.Types.ObjectId, 
            default: new ObjectId,
        }, 
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
    }
)

const Reactions = ('reactions', reactionsSchema)

module.exports = Reactions;