import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { db } from "../config/index.js";

export const Login = async (req, res) => {
  const { user_name, password } = req.body;

  if (!user_name || !password)
    return res
      .status(400)
      .json({ status: false, msg: "Username dan password harus diisi" });

  const userData = await db
    .from("ms_user")
    .where("user_name", "=", user_name)
    .first();

  if (!userData)
    return res.status(400).json({
      status: false,
      msg: "User belum terdaftar. Silahkan Daftar terlebih dahulu",
    });

  const isMatch = await bcrypt.compare(password, userData.password);

  if (!isMatch)
    return res.status(400).json({
      status: false,
      msg: "Password salah",
    });

  const token = jwt.sign(
    {
      user_id: userData.user_id,
    },
    process.env.SECRET_KEY,
    {
      expiresIn: "2d",
    }
  );

  return res.status(200).json({
    status: true,
    msg: "Login Succesfully",
    token,
  });
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
