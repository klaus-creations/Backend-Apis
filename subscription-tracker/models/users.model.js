import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "name is required field"],
      trim: true,
      minLength: 2,
      maxLength: 50,
    },
    name: {
      type: String,
      required: [true, "email is required field"],
      unique: true,
      trim: true,
      lowercase: true,
      minLength: 2,
      maxLength: 50,
      match: [/\S+@\S+\.\S+/, "please enter a valid email address"],
    },

    password: {
      type: String,
      required: [true, "password is required field"],
      minLength: 6,
    },
  },
  { timestamps: true }
);

const userModel = mongoose.model("User", userSchema);
export default userModel;
