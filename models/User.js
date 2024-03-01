import mongoose from "mongoose";
import { Schema } from "mongoose";

const userSchema = new Schema({
  email: {type: String, require:true},
  password: {type: String, require:true},
  // name: {type: String, require:true},
  // age: {type: String, require:true},
}, {timestamps: true})

const User = mongoose.model.User || mongoose.model("User", userSchema);

export default User;