import React, { useState, useEffect } from "react";
import axios from "axios";

const Summary = () => {
  const [username, setUsername] = useState("User");

  // useEffect(() => {
  //   const storedUser = localStorage.getItem("user");
  //   if(storedUser){
  //     try{
  //       const user = JSON.parse(storedUser);
  //       if(user && user.username){
  //         setUsername(user.username);
  //       }
  //     }catch(e){
  //       localStorage.removeItem("user");
  //     }
  //   }
  // }, [])

  useEffect(() => {
    const verifyUser = async () => {
      try {
        const res = await axios.get("http://localhost:3002/verify", {
          withCredentials: true,
        });

        if (res.data.success) {
          setUsername(res.data.username);
          localStorage.setItem("user", JSON.stringify({ username: res.data.username }));
        } else {
          localStorage.removeItem("user");
        }
      } catch (err) {
        console.log("User not logged in");
        localStorage.removeItem("user");
      }
    };

    verifyUser();
  }, []);

  return (
    <>
      <div className="username">
        <h6>Hi, {username}!</h6>
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p>Equity</p>
        </span>

        <div className="data">
          <div className="first">
            <h3>3.74k</h3>
            <p>Margin available</p>
          </div>
          <hr />

          <div className="second">
            <p>
              Margins used <span>0</span>{" "}
            </p>
            <p>
              Opening balance <span>3.74k</span>{" "}
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p>Holdings (13)</p>
        </span>

        <div className="data">
          <div className="first">
            <h3 className="profit">
              1.55k <small>+5.20%</small>{" "}
            </h3>
            <p>P&L</p>
          </div>
          <hr />

          <div className="second">
            <p>
              Current Value <span>31.43k</span>{" "}
            </p>
            <p>
              Investment <span>29.88k</span>{" "}
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>
    </>
  );
};

export default Summary;
