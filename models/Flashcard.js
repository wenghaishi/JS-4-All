import mongoose from "mongoose";

const { Schema } = mongoose;

const flashcardSchema = new Schema({
  name: {
    type: String,
    required: [true, "Please provide name"],
  },
  description: {
    type: String,
    required: [true, "Please provide description"],
  },
  options: {
    type: Array,
    required: [true, "Please provide tests"],
  },
  answer: {
    type: String,
    required: [true, "Please provide answer"],
  },
  category: {
    type: String,
    required: [true, "Please provide category"],
  },

  // inventoryList: {
  //   name: { type: String, required: true },
  //   items: [itemSchema],
  // },
});

const Flashcard =
  mongoose.models.Flashcard || mongoose.model("Flashcard", flashcardSchema);

export default Flashcard;
