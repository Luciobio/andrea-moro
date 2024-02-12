import { Schema, model } from "mongoose";
import { boolean } from "zod";

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  // lastName: {
  //   type: String,
  //   required: true,
  // },
  // email: {
  //   type: String,
  //   required: true,
  //   unique: true,
  // },
  // password: {
  //   type: String,
  //   required: true,
  // },
  // image: {
  //   type: [String],
  //   default: [""],
  //   required: false,
  // },
  // role: {
  //   type: String,
  //   enum: ["user", "admin"],
  //   default: "user",
  // },
  // status: {
  //   type: boolean,
  //   default: true,
  //   required: false,
  // },
});

export const userModel = model("users", UserSchema);
