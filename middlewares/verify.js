export const logMethod = (req, res, next) => {
  console.log("Request Type:", req.method);
  if (req.method == "GET") return res.status(200).send("tes");
  next();
};
