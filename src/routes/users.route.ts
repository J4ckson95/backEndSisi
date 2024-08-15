import { Router } from "express";
import { validateUser, createUser } from "../controller/users.controller";
const router = Router();
router.post("/login", validateUser);
router.post("/register", createUser);
export default router;
