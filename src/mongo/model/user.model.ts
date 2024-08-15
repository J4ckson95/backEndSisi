import { Schema, model } from "mongoose";
const UserSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: {
    type: String,
    required: true,
    enum: ["Coordinator", "Inspector", "Admin"],
  },
  invitationCode: { type: String, unique: true },
});
const User = model("User", UserSchema);
export default User;
