import NavbarItem from "components/NavbarItem";
import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="dhiwise-navigation">
      <h1>Homepage</h1>
      <p className="headline">
        Quickly use below links
        to navigate through all pages.
      </p>
      <ul>
        <li>
          <Link to="/loginpage">Loginpage</Link>
        </li>
        <li>
          <Link to="/landingdesktop">Landingdesktop</Link>
        </li>
        <li>
          <Link to="/promotiondesktop">Promotiondesktop</Link>
        </li>
        <li>
          <Link to="/dropdowndesktop">Dropdowndesktop</Link>
        </li>
        <li>
          <Link to="/productlistingdesktop">ProductListingdesktop</Link>
        </li>
        <li>
          <Link to="/quickviewdesktop">Quickviewdesktop</Link>
        </li>
        <li>
          <Link to="/storesdesktop">Storesdesktop</Link>
        </li>
        <li>
          <Link to="/postdesktop">Postdesktop</Link>
        </li>
      </ul>
    </div>
  );
};
export default Home;
