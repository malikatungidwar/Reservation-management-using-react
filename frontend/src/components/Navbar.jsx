import React, { useState } from "react";
import { data } from "../restApi.json";
import { Link as ScrollLink } from "react-scroll"; // Alias this import as ScrollLink
import { Link as RouterLink } from "react-router-dom"; // Alias this import as RouterLink
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <nav>
        <div className="logo">NM</div>
        <div className={show ? "navLinks showmenu" : "navLinks"}>
          <div className="links">
            {data[0].navbarLinks.map((element) => (
              <ScrollLink
                to={element.link}
                spy={true}
                smooth={true}
                duration={500}
                key={element.id}
              >
                {element.title}
              </ScrollLink>
            ))}
          </div>
          <button className="menuBtn">
            <RouterLink className="signup" to="/Signup1">
              Signup
            </RouterLink>
          </button>
        </div>
        <div className="hamburger" onClick={() => setShow(!show)}>
          <GiHamburgerMenu />
        </div>
      </nav>
    </>
  );
};

export default Navbar;

// import React, { useState } from "react";
// import { data } from "../restApi.json";
// import { Link } from "react-scroll";
// import { Link } from "react-router-dom";
// import { GiHamburgerMenu } from "react-icons/gi";
// const Navbar = () => {
//   const [show, setShow] = useState(false);
//   return (
//     <>
//       <nav>
//         <div className="logo">NM</div>
//         <div className={show ? "navLinks showmenu" : "navLinks"}>
//           <div className="links">
//             {data[0].navbarLinks.map((element) => (
//               <Link
//                 to={element.link}
//                 spy={true}
//                 smooth={true}
//                 duration={500}
//                 key={element.id}
//               >
//                 {element.title}
//               </Link>
//             ))}
//           </div>
//          <button className="menuBtn"><Link1 className="signup" to="/Signup1">Signup</Link1></button>
//         </div>
//         <div className="hamburger" onClick={()=> setShow(!show)}>
//                 <GiHamburgerMenu/>
//         </div>
//       </nav>
//     </>
//   );
// };

// export default Navbar;
