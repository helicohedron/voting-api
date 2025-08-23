import { model, Schema } from 'mongoose';

const pollSchema = new Schema(
  {
    question: {
      type: String,
      required: true,
    },
    options: {
        type: [String], 
        required: true,
    },
    status: {
      type: String,
      enum: ["active", "closed", "archived"],
      default: 'active',
    },
  },
  {
    timestamps: true,
  }
);



export const Poll = model('Poll', pollSchema);
