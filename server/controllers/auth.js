import User from "../models/user";
import { hashPassword, comparePassword } from "../helpers/auth";

export const register = async (req, res) => {
  try {
    // validation
    const { name, email, password } = req.body;
    if (!name) {
      return res.json({
        error: "Name is required",
      });
    }
    if (!password || password.length < 6) {
      return res.json({
        error: "Password is required and should be 6 characters long",
      });
    }
    const exist = await User.findOne({ email });
    if (exist) {
      return res.json({
        error: "Email is taken",
      });
    }
    // hash password
    const hashedPassword = await hashPassword(password);

    const user = await new User({
      name,
      email,
      password: hashedPassword,
    }).save();
    // elimino el password de la respuesta
    const { password: passwordEncrypted, ...rest } = user._doc;
    console.log(rest);
    return res.json({
      user: rest,
    });
  } catch (err) {
    console.error(err);
  }
};
