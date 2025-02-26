import { Router } from "express";

const subscriptionRouter = Router();

subscriptionRouter.get("/", (req, res) =>
  res.send({ title: "get all subscriptions" })
);
subscriptionRouter.get("/:id", (req, res) =>
  res.send({ title: "get specified subscription " })
);
subscriptionRouter.post("/", (req, res) =>
  res.send({ title: "create a new subscription" })
);
subscriptionRouter.put("/:id", (req, res) =>
  res.send({ title: "update subscription" })
);

subscriptionRouter.delete("/:id", (req, res) =>
  res.send({ title: "delete existing subscription" })
);

subscriptionRouter.get("/user/id", (req, res) =>
  res.send({ title: "get all subscription for the user" })
);

subscriptionRouter.put("/:id/cancel", (req, res) =>
  res.send({ title: "cancel subscription" })
);
subscriptionRouter.get("/upcoming-renewals", (req, res) =>
  res.send({ title: " get upcoming renewals" })
);

export default subscriptionRouter;
