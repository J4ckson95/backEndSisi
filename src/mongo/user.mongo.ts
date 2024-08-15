import userModel from "./model/User.model";
import { User } from "../type";
export const createUser = async (user: User) => {
  return userModel.create(user);
};
export const findUser = async (user: User) => {
  const validate = await userModel.findOne({ email: user.email });
  if (validate) return { status: true, validate };
  else return false;
};
