import { Router } from "express";
import { getAllUsers, getUser } from "../controllers/user.controller.js";

const userRouter = Router();
userRouter.get("/", getAllUsers);
userRouter.get("/:id", getUser);
userRouter.post("/", (req, res) => res.send({ title: "Create  new users" }));
userRouter.put("/:id", (req, res) =>
  res.send({ title: "Update the specific user" })
);
userRouter.delete("/:id", (req, res) =>
  res.send({ title: "delete specific user" })
);

export default userRouter;
