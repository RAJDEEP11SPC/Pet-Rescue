import React from 'react';

const Navbar = () => {


    const test = () => {
        if (document.getElementById("menu").dangerouslySetInnerHTML === "") {
          document.getElementById("menu").dangerouslySetinnerHTML = `
            <div className="active">
                <ul>
                    <li><a href="/">Adoption</a></li>
                    <li><a href="/">Community</a></li>
                    <li><a href="/">Vet Guides</a></li>
                    <li><a href="/">Inspiring Stories</a></li>
                </ul>
            </div>
            `;
        } else {
          document.getElementById("menu").dangerouslySetinnerHTML = "";
        }
      };

  return (
    <div>
        <nav className="nav">
          <div className="logo">
            {/* <img src="" alt="ekhane logo thakbe "/> */}
          </div>
          <div className="list">
            <ul>
              <li>
                <a href="/AboutUs">About Us</a>
              </li>
              <li>
                <a href="/Services">Services</a>
              </li>
              <li>
                <a href="/Helpline">Helpline</a>
              </li>
              <li>
                <a href="/Form">Register</a>
              </li>
              {/* <li>
                <a href="/">How it works</a>
              </li> */}
            </ul>
          </div>
          <div className="hamburger">
            <p onClick={test}>&#8801</p>
          </div>
        </nav>
        <div id="menu"></div>
    </div>
  );
};

export default Navbar;