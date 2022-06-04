import React from "react";
import Navbar from "./Navbar";

const Nav = () => {

  return (
    <div>
      <div className="head">
        <Navbar />
        <div className="init-txt">
          <div>
            <h1>Pet Rescue</h1>
            <p>
              Pet Rescue is a platform for pet lovers to find loving, caring,
              and responsible people to adopt their pets.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;