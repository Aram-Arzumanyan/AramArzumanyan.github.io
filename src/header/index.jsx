import { useEffect, useRef } from "react";
import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./style.scss";

function Header({s,setS}) {
  var location = useLocation();
  const [change, setChange] = useState("");

  function fu() {
    setS(!s)
  }

  useEffect(() => {
    if (location.pathname === "/designers") {
      setChange("y");
    } else if (location.pathname === "/services") {
      setChange("p");
    } else if (location.pathname === "/packages") {
      setChange("d");
    } else if (location.pathname === "/contact") {
      setChange("c");
    } else {
      setChange("r");
    }
  }, [location.pathname]);
  let MyRef = useRef();

  return (
    <section className={`G-container  ${s ? "nav" : "navBar"}  ${change}`}
    onClick={(e)=>{
e.stopPropagation()
    }}>
      <div
        style={{
          width: "90%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div
          className="burger"
          onClick={(e) => {
            
           fu()
           e.stopPropagation()
           s? (MyRef.current.style.display = "block"): (MyRef.current.style.display = "none");
          }}
        >
          <span>____</span>
          <span>____</span>
          <span>____</span>
        </div>
        <h1 ref={MyRef} style={{ color: "White", fontSize: "42px" }}>
          Company<br></br> Name
        </h1>
      </div>
      <ul className="ul" style={{ fontSize: `${s ? "18px" : ""}` }}>
        <li>
          <NavLink className="li" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="li" to="/designers">
            Designers
          </NavLink>
        </li>
        <li>
          <NavLink className="li" to="/services">
            Services
          </NavLink>
        </li>
        <li>
          <NavLink className="li" to="/packages">
            Packages
          </NavLink>
        </li>
        <li>
          <NavLink className="li" to="/contact">
            Contact
          </NavLink>
        </li>
      </ul>
    </section>
  );
}
export default Header;
