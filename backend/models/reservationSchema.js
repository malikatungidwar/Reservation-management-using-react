import mongoose from "mongoose";
import validator from "validator";

const reservationSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    minLength: [3, "First name must be of at least 3 Characters."],
    maxLength: [30, "First name cannot exceed 30 Characters."],
  },
  size: {
    type: Number, // Change the type to Number
    required: true,
    min: [1, "Table size must be of at least 1 member."], // Use 'min' instead of 'minLength'
    max: [15, "Table size cannot exceed more than 15 members."], // Use 'max' instead of 'maxLength'
  },

  date: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    validate: [validator.isEmail, "Provide a valid email"],
  },
  phone: {
    type: String,
    required: true,
    minLength: [10, "Phone number must contain 10 Digits."],
    maxLength: [10, "Phone number must contain 10 Digits."],
  },
});

export const Reservation = mongoose.model("Reservation", reservationSchema);
