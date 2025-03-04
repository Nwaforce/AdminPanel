import React, { useState } from "react";
import {
  BsFillBellFill,
  BsFillEnvelopeFill,
  BsPersonCircle,
  BsSearch,
  BsJustify,
} from "react-icons/bs";

function Header({ OpenSidebar }) {
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <header className="header">
      <div className="menu-icon">
        <BsJustify className="icon" onClick={OpenSidebar} />
      </div>

      <div className="header-left">
        {showSearchBar ? (
          <input
            type="text"
            className="search-input"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onBlur={() => setShowSearchBar(false)} // Hide input when clicked outside
            autoFocus
          />
        ) : (
          <BsSearch className="icon" onClick={() => setShowSearchBar(true)} />
        )}
      </div>

      <div className="header-right">
        <BsFillBellFill className="icon" />
        <BsFillEnvelopeFill className="icon" />
        <BsPersonCircle className="icon" />
      </div>
    </header>
  );
}

export default Header;
