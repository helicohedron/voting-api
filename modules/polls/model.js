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

const voteSchema = new Schema(
  {
    pollID: {
      type: Schema.Types.ObjectId,
      ref: "Poll",
      required: true,
    },
    option: {
      type: String,
      required: true,
    },
    voter: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export const Poll = model('Poll', pollSchema);
export const Vote = model('Vote', voteSchema);
