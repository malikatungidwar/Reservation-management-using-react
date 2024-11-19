import ErrorHandler from "../error/error.js";
import { Signup1 } from "../models/signup1Schema.js";


export const sendSignup1 = async (req, res, next) => {
  const { firstName, lastName, email, phone } = req.body;
  if (!firstName || !lastName || !email  || !phone) {
    return next(new ErrorHandler("Please Fill Full Sign-up Form!", 400));
  }

  try {
    await Signup1.create({ firstName, lastName, email,  phone });
    res.status(200).json({
      success: true,
      message: "Signed-up Sent Successfully!",
    });
  } catch (error) {
    if (error.name === 'ValidationError') {
      const validationErrors = Object.values(error.errors).map(err => err.message);
      return next(new ErrorHandler(validationErrors.join(', '), 400));
    }

    return next(error);
  }
};


// export default sendSignup1;

