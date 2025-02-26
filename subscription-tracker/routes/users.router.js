import { Router } from "express";

const userRouter = Router();
userRouter.get("/", (req, res) => res.send({ title: "Get all users" }));
userRouter.get("/:id", (req, res) => res.send({ title: "Get specific user" }));
userRouter.post("/", (req, res) => res.send({ title: "Create  new users" }));
userRouter.put("/:id", (req, res) =>
  res.send({ title: "Update the specific user" })
);
userRouter.delete("/:id", (req, res) =>
  res.send({ title: "delete specific user" })
);

export default userRouter;
