import jwt from "jsonwebtoken";

export const generateToken = (payload) => {
  return jwt.sign({
    id: payload.id,
    name: payload.name,
    email: payload.email,
    role: payload.role,
  }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN || "1h",
  });
};
