import { Schema, model, models } from 'mongoose'

const UserSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    username: {
      type: String,
      required: true,
    },
    photo: {
      type: String, // URL to avatar or profile picture
    },
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    creditBalance: {
      type: Number,
      default: 0,
    },
    clerkId: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true, // adds createdAt and updatedAt fields automatically
  }
)

const User = models.User || model('User', UserSchema)
export default User
