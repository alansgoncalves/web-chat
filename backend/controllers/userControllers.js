const asyncHandler = require("express-async-handler");

const registerUser = asyncHandler(async () => {
  const { name, email, password, pic } = req.body;

  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Preencha todos os campos!");
  }
});
