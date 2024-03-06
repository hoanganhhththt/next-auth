import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema({
  email: {type: String, require:true},
  password: {type: String, require:true},
  // name: {type: String, require:true},
  // age: {type: String, require:true},
}, {timestamps: true})

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;