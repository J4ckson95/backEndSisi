import bcrypt from "bcrypt";
import { User } from "./type";
export const createHas = async (password: string) => {
  return await bcrypt.hash(password, bcrypt.genSaltSync(10));
};
export const validateHas = async (password: string, user: User) => {
  return bcrypt.compare(password, user.password);
};
