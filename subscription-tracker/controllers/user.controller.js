import userModel from "../models/users.model.js";

export const getAllUsers = async function (req, res, next) {
  try {
    const users = await userModel.find();

    res.status(200).json({
      success: true,
      data: users,
    });
  } catch (error) {
    next(error);
  }
};

export const getUser = async function (req, res, next) {
  try {
    const user = await userModel.findById(req.params.id).select("-password");
    if (!user) {
      const error = new Error("User not found");
      error.statusCode = 404;
      throw error;
    }
  } catch (error) {
    next(error);
  }
};
