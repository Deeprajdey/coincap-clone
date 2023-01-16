import React from "react";
const Navbar = () => {
  return (
    <nav className="flex flex-between align-center px-15 h-6 list-none font-one-half font-bold-5 bg-white">
      <div className="flex flex-around align-center gap-3r">
        <li className="cursor-pointer">Coins</li>
        <li className="cursor-pointer">Exchanges</li>
        <li className="cursor-pointer">Swap</li>
      </div>
      <img
        className="h-3 cursor-pointer"
        src="https://coincap.io/static/logos/black.svg"
        alt="coincap"
      />
      <div className="flex flex-around align-center gap-3r">
        <li className="cursor-pointer">USD</li>
        <li className="cursor-pointer">English</li>
        <li className="cursor-pointer">
          <ion-icon name="search-outline"></ion-icon>
        </li>
        <li className="cursor-pointer">
          <ion-icon name="settings-outline"></ion-icon>
        </li>
      </div>
    </nav>
  );
};

export default Navbar;
