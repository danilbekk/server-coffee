import mongoose from "mongoose";

const Drink = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: String, required: true },
  inStock: { type: Boolean, required: true },
  haveCaffeine: { type: Boolean, required: true },
  volume: { type: String, required: true },
  description: { type: String, required: true },
});

export default mongoose.model("drink", Drink);
