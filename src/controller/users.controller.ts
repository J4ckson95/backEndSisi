import { Request, Response } from "express";
import { findUser } from "../mongo/user.mongo";
import { createHas } from "../utils";
export const createUser = async (req: Request, res: Response) => {
  try {
    const { email, password, ...rest } = req.body;
    //! const userCreated = await findUser(email);
    const newUser = { email, password: createHas(password), ...rest };
  } catch (error) {}
};
export const validateUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
  } catch (error) {
    console.log(error);
  }
};
