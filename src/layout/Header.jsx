import React from "react";

function Header() {
  return (
    <div>
      <nav>
        <div className="nav-wrapper header__nav">
          <a href="#" className="brand-logo">
            React
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <a href="sass.html">Movie</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
