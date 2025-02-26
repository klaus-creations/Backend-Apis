import { Router } from "express";
const authRouter = Router();

import { signUp, signIn, signOut } from "../controllers/auth.controller.js";

authRouter.post("sign-up", signUp);
authRouter.post("/sign-in", signIn);
authRouter.post("/sign-out", signOut);

export default authRouter;
