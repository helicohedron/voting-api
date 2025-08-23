import { model, Schema } from 'mongoose';

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

export const Vote = model('Vote', voteSchema);