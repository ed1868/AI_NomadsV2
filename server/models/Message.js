const mongoose = require('mongoose')
const Schema = mongoose.Schema

const messageSchema = new Schema(
  {
    username: String,
    email: String,
    phone: String,
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
  }
)

const Message = mongoose.model('Message', messageSchema)
module.exports = Message
