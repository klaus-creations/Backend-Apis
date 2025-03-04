import subscriptionModel from "../models/subscriptions.model.js";
import userModel from "../models/subscriptions.model.js";

export const createSubcription = async function (req, res, next) {
  try {
    const subscription = await subscriptionModel.create({
      ...req.body,
      user: req.user._id,
    });

    res.status(201).json({ success: true, data: subscription });
  } catch (error) {
    next(error);
  }
};
