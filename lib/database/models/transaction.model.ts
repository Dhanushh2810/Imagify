import { Schema, model, models, SchemaTypes } from 'mongoose'

const transactionSchema = new Schema(
  {
    createdAt: {
      type: Date,
      default: Date.now,
    },
    stripeId: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    plan: {
      type: String,
      required: true,
    },
    credits: {
      type: Number,
      required: true,
    },
    buyer: {
      type: SchemaTypes.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  {
    timestamps: true, // Automatically adds `createdAt` and `updatedAt`
  }
)

const Transaction = models.Transaction || model('Transaction', transactionSchema)
export default Transaction
