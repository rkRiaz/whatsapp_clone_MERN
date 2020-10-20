const {model, Schema} = require('mongoose')

const MessageSchema = new Schema(
    {
        message: String,
        name: String,
        received: Boolean
    },
    {
        timestamps: true
    }
)

const Message = model("Message", MessageSchema)
module.exports = Message

