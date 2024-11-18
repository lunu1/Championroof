import React, { useEffect, useState } from 'react';
import "../styles/navsec.scss";
import { Link } from 'react-router-dom';

const NavSec = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY >= 150) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`navsec ${isSticky ? "fixed" : ""}`}>
      <Link to="/">HOME</Link>
      <Link to="/about">ABOUT US</Link>
      <div 
        className="services-dropdown" 
        onMouseEnter={() => setDropdownVisible(true)}
        onMouseLeave={() => setDropdownVisible(false)}
        onClick={toggleDropdown}
      >
        <Link to="/services">SERVICES</Link>
        <div className={`dropdown ${dropdownVisible ? "visible" : ""}`}>
          <Link to="/combosystem">Combo System</Link>
          <Link to="/conventional">Conventional Waterproofing System</Link>
          <Link to="/polyurethene">Spray Polyurethene Foam</Link>
          <Link to="/gonesheet">GI Sheet Waterproofing</Link>
          <Link to="/grp">GRP Lining System</Link>
          <Link to="/membrane">Membrane Waterproofing</Link>
          <Link to="/substructure">Sub Structure Waterproofing</Link>
          <Link to="/wetarea">Wet Areas Waterproofing</Link>
          <Link to="/concrete">Industrial Concrete Flooring</Link>
        </div>
      </div>
      <Link to="/workflow">WORKFLOW</Link>
      <Link to="/contact">CONTACT US</Link>
      {/* <a href="#">CERTIFICATIONS</a> */}
    </div>
  );
};

export default NavSec;
