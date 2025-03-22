import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom"; // Import Link
import "./nav_foot.css";

const Navbar = () => {
  const [selected, setSelected] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  useEffect(() => {
    setSelected(location.pathname);
  }, []);
  const handlePage = (page) => {
    setSelected(page);
    navigate(`${page}`);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm py-4 sticky-top">
      <div className="container ">
        <Link className="navbar-brand fw-bold tuchat-logo fs-4" to="/">
          TuChat
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav d-flex  w-100  gap-md-4">
            <div className=" d-flex gap-4  gap-md-5  ms-md-auto align-items-center mt-4 m-md-0  ">
              <li
                className={`nav-item  rounded-circle nav-link text-center position-relative ${selected == "/" && "selected" && "bg-primary"
                  }`}
                onClick={() => handlePage("/")}
              >
                <i
                  className={`fs-5 fa-solid fa-house ${selected == "/" && "text-white"
                    }`}
                ></i>
                <div className="nav-label position-absolute mt-1 start-0 bg-secondary px-1 rounded text-white">
                  Home
                </div>
              </li>
              <li
                className={`nav-item nav-link  rounded-circle text-center position-relative ${selected == "message" && "selected" && "bg-primary"
                  }`}
                onClick={() => handlePage("/message")}
              >
                <i
                  className={`fs-5 fa-brands fa-rocketchat ${selected == "/message" && "text-white"
                    }`}
                ></i>
                <div className="nav-label position-absolute mt-1 start-0 bg-secondary px-1 rounded text-white">
                  Chat
                </div>
              </li>
              <li
                className={`nav-item nav-link rounded-circle text-center position-relative ${selected == "users" && "selected" && "bg-primary"
                  }`}
                onClick={() => handlePage("users")}
              >
                <i
                  className={`fs-5 fa-solid fa-users ${selected == "/users" && "text-white"
                    }`}
                ></i>
                <div className="nav-label position-absolute mt-1 start-0 bg-secondary px-1 rounded text-white">
                  Users
                </div>
              </li>
              <li
                className={`nav-item  rounded-circle nav-link text-center position-relative ${selected == "/features" && "selected" && "bg-primary"
                  }`}
                onClick={() => handlePage("features")}
              >
                <i
                  className={`fs-5 fa-solid fa-circle-info ${selected == "/features" && "text-white"
                    }`}
                ></i>
                <div className="nav-label position-absolute mt-1 start-0 bg-secondary px-1 rounded text-white">
                  About
                </div>
              </li>
              <li className="get-started d-inline d-md-none">
                <Link className="btn btn-primary" to="/register">
                  Get Started
                </Link>
              </li>
            </div>
            <div className="ms-md-auto d-none d-md-inline get-started">
              <li><Link className="btn btn-primary" to="/register">
                Get Started
              </Link> </li>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
