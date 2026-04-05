import User from "../models/user.model.js";
import { userRoles } from "../utils/userRoles.js";
import { generateToken } from "../utils/generateToken.js";

const getUsers = async (req, res, next) => {
  try {
    const users = await User.find({}, "-__v");
    res.status(200).json({ status: "success", data: { users } });
  } catch (error) {
    next(error);
  }
};

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ status: "fail", message: "Email and password are required" });
    }

    const user = await User.findOne({ email }, "+password");
    if (!user) {
      return res
        .status(401)
        .json({ status: "fail", message: "Invalid email or password" });
    }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res
        .status(401)
        .json({ status: "fail", message: "Invalid email or password" });
    }

    const token = generateToken(user);

    res.status(200).json({
      status: "success",
      data: {
        token,
      },
    });
  } catch (error) {
    next(error);
  }
};

const register = async (req, res, next) => {
  try {
    const { name, email, password, role } = req.body;

    if (!name || !email || !password) {
      return res
        .status(400)
        .json({
          status: "fail",
          message: "Name, email, and password are required",
        });
    }

    const user = await User.findOne({ email });
    if (user) {
      return res
        .status(409)
        .json({ status: "fail", message: "user already exists" });
    }

    const createdUser = await User.create({
      name,
      email,
      password,
      role: role || userRoles.USER,
    });

    const token = generateToken(createdUser);

    const { password: _, ...shownUser } = createdUser.toObject();

    res.status(201).json({
      status: "success",
      data: {
        user: shownUser,
        token,
      },
    });
  } catch (error) {
    next(error);
  }
};

export { getUsers, login, register };
