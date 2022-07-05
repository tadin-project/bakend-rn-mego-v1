import jwt from "jsonwebtoken";

export const logMethod = (req, res, next) => {
  const authorization = req.headers.authorization;

  if (!authorization) return res.status(403).send("Token is required");

  const token = authorization.split(" ")[1];

  try {
    jwt.verify(token, process.env.SECRET_KEY, (err) => {
      if (err) {
        return res.status(403).send("Token is not match");
      } else {
        next();
      }
    });
  } catch (err) {
    return res.status(500).json(err);
  }

  next();
};
