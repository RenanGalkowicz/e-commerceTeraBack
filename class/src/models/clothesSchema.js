import mongoose from "mongoose";

const clothesSchema = new mongoose.Schema(
  {
    id: mongoose.Schema.Types.ObjectId,
    name: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    price: {
    type: Number,
    required: true,
    },
    amount: {
    type: Number,
    required: true,
    },
    image: {
    type: String,
    required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("clothes", clothesSchema);