
// import React, { useState } from "react";
// import { HiOutlineArrowNarrowRight } from "react-icons/hi";
// import axios from "axios";
// import toast from "react-hot-toast";
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//   const [name, setName] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const { data } = await axios.get(
//         "http://localhost:4000/api/v1/logincollections",
//         { name, password },
//         {
//           headers: {
//             "Content-Type": "application/json",
//           },
//           withCredentials: true,
//         }
//       );
//       toast.success(data.message);
//       // Redirect to dashboard or desired page after successful login
//       navigate("/success");
//     } catch (error) {
//       toast.error(error.response.data.message);
//     }
//   };

//   return (
//     <section className="login" id="login">
//       <div className="container">
//         <div className="banner">
//           <img src="/login.png" alt="login" />
//         </div>
//         <div className="banner">
//           <div className="login_form_box">
//             <h1>LOGIN</h1>
//             <form>
//               <div>
//                 <input
//                   type="text"
//                   placeholder="name"
//                   value={name}
//                   onChange={(e) => setName(e.target.value)}
//                 />
//               </div>
//               <div>
//                 <input
//                   type="password"
//                   placeholder="Password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                 />
//               </div>
//               <button type="submit" onClick={handleLogin}>
//                 LOGIN{" "}
//                 <span>
//                   <HiOutlineArrowNarrowRight />
//                 </span>
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Login;
