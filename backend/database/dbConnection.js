// import mongoose from "mongoose";
// export const dbConnection = () => {
//   mongoose
//     .connect(process.env.MONGO_URI, {
//       dbName: "CAFE",

//     })
//     .then(() => {
//       console.log("Connected to database!");
//     })
//     .catch((err) => {
//       console.log(`Some error occured while connecing to database: ${err}`);
//     });
// };
import mongoose from "mongoose";

export const dbConnection = () => {
  // Connect to the first database
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "CAFE",
    })
    .then(() => {
      console.log("Connected to CAFE database!");
    })
    .catch((err) => {
      console.log(`Some error occurred while connecting to CAFE database: ${err}`);
    });

  // Connect to the second database
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "LoginFormPractice",
    })
    .then(() => {
      console.log("Connected to Signup database!");
    })
    .catch((err) => {
      console.log(`Some error occurred while connecting to Signup database: ${err}`);
    });
};

