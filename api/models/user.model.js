import mongoose from "mongoose";

const userScheme = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    profilePicture: {
      type: String,
      default:
        "https://img.freepik.com/premium-vector/man-profile-cartoon_18591-58482.jpg?w=2000",
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userScheme);

export default User;
