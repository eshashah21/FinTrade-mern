import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  const [username, setUsername] = useState("");
  const [selectedMenu, setSelectedMenu] = useState(0);

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  const handleLogout = async () => {
    try {
      await fetch("http://localhost:3002/logout", {
        method: "DELETE",
        credentials: "include",
      });
      setUsername("");
      window.location.href = "/";
    } catch (err) {
      console.error("Logout failed", err);
    }
  };
  
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch("http://localhost:3002/verify", {
          credentials: "include", // ⬅️ needed to send cookie
        });
        const data = await res.json();
        if (res.ok && data.success) {
          setUsername(data.username);
        } else {
          setUsername("");
        }
      } catch (err) {
        console.error("User verification failed:", err);
        setUsername("");
      }
    };

    fetchUser();
  }, []);

  return (
    <div className="menu-container">
      <img src="logo.png" alt="logo" style={{ width: "50px" }} />
      <div className="menus">
        <ul>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/"
              onClick={() => handleMenuClick(0)}
            >
              <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>
                Dashboard
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/orders"
              onClick={() => handleMenuClick(1)}
            >
              <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>
                Orders
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/holdings"
              onClick={() => handleMenuClick(2)}
            >
              <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>
                Holdings
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/positions"
              onClick={() => handleMenuClick(3)}
            >
              <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>
                Positions
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="funds"
              onClick={() => handleMenuClick(4)}
            >
              <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>
                Funds
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/apps"
              onClick={() => handleMenuClick(6)}
            >
              <p className={selectedMenu === 6 ? activeMenuClass : menuClass}>
                Apps
              </p>
            </Link>
          </li>
        </ul>
        <hr />
        <div className="profile">
          {username ? (
            <>
              <div className="avatar">{username.slice(0, 2).toUpperCase()}</div>
              <p className="username">{username}</p>
              &nbsp; &nbsp; 
              <button className="btn btn-primary" onClick={handleLogout}>Sign Out</button>
            </>
          ) : (
            <>
              <Link to="/login">SignIn</Link>
              &nbsp; &nbsp; 
              <Link to="/signup">Register</Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;
