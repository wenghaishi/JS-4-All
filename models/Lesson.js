import mongoose from "mongoose";

const { Schema } = mongoose;

const lessonSchema = new Schema({
  category: {
    type: String,
    required: [true, "Please provide category"],
  },
  name: {
    type: String,
    required: [true, "Please provide name"],
  },
  sections: {
    type: Array,
    required: [true, "Please provide sections"],
  },
});

const Lesson = mongoose.models.Lesson || mongoose.model('Lesson', lessonSchemaSchema);

export default Lesson;
