import ErrorHandler from "../error/error.js";
import { Reservation } from "../models/reservationSchema.js";


export const sendReservation = async (req, res, next) => {
  const { firstName, size, email, date, time, phone } = req.body;
  if (!firstName || !size || !email || !date || !time || !phone) {
    return next(new ErrorHandler("Please Fill Full Reservation Form!", 400));
  }

  try {
    await Reservation.create({ firstName, size, email, date, time, phone });
    res.status(200).json({
      success: true,
      message: "Reservation Sent Successfully!",
    });
  } catch (error) {
    if (error.name === 'ValidationError') {
      const validationErrors = Object.values(error.errors).map(err => err.message);
      return next(new ErrorHandler(validationErrors.join(', '), 400));
    }

    return next(error);
  }
};


// export default sendReservation;

