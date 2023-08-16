import mongoose from "mongoose";

const { Schema } = mongoose;

const questionSchema = new Schema({
  name: {
    type: String,
    required: [true, "Please provide name"],
  },
  description: {
    type: String,
    required: [true, "Please provide description"],
  },
  code: {
    type: String,
    required: [true, "Please provide code"],
  },
  test: {
    type: Array,
    required: [true, "Please provide tests"],
  },
  answer: {
    type: String,
  }

  // inventoryList: {
  //   name: { type: String, required: true },
  //   items: [itemSchema],
  // },
});

const Question = mongoose.models.Question || mongoose.model('Question', questionSchema);

export default Question;
