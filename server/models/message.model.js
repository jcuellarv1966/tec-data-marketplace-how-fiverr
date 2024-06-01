import mongoose from "mongoose";
const { Schema } = mongoose;

const MessageSchema = new Schema(
  {
    conversationId: {
      type: String,
      requires: true,
    },
    userId: {
      type: String,
      requires: true,
    },
    /* username: {
      type: String,
      required: false,
      unique: false,
    }, */
    img: {
      type: String,
      required: false,
    },
    desc: {
      type: String,
      requires: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Message", MessageSchema);
