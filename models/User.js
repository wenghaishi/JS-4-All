import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, "Please provide name"],
  },
  email: {
    type: String,
    required: [true, "Please provide email"],
  },
  password: {
    type: String,
    required: [true, "Please provide password"],
  },
  image: {
    type: String,
  },

});

const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;
