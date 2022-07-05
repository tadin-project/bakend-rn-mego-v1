import bcrypt from "bcryptjs";
import { db } from "../config/index.js";

export const Login = (req, res) => {
  return res.status(200).send("Login");
};

export const Register = async (req, res) => {
  try {
    const { user_name, user_email, password } = req.body;
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    const result = await db("ms_user").insert({
      user_name,
      user_email,
      password: hash,
    });

    const user_id = result[0];

    const userData = {
      user_id,
    };

    if (res.length <= 0)
      return res
        .status(500)
        .json({ status: false, msg: "Register is failed. Please check data" });

    return res
      .status(200)
      .json({ status: true, msg: "Register success", data: userData });
  } catch (error) {
    return res.status(400).json({ status: true, msg: JSON.stringify(err) });
  }
};
