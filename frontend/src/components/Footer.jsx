
 
import React from "react";
import { useNavigate } from "react-router-dom";






const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer>
      <div className="container">
        <div className="banner">
          <div className="left">NM</div>
          <div className="right">
            <p>Bangalore, India</p>
            <p>Open: 05:00 PM - 12:00 AM</p>
          </div>
        </div>
        <div className="banner">
          <div className="left">
            <p>Developed By NM</p>
          </div>
          <div className="centre">
          <div>
            <button onClick={() => navigate("/new-page")}>Inventory Management</button>
            </div>
          {/* <Link to="C://Users//Narayan//Desktop//main project//frontend//src//components//NewPage.jsx">
        <button>Go to New Page</button>
      </Link>         */}
          </div>
          <div className="right">
            <p>All Rights Reserved By NM.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;