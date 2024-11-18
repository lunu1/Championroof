import React from "react";
import "../styles/navbar.scss";
import Logo from "../assets/images/Championlogo.png";
import { Catalog, Menu, Pdf, Phone } from "../assets/svgs/Svg";

const Navbar = () => {

  const copyToClipboard = () => {
    navigator.clipboard.writeText('+971 526336867');
    alert('Phone number copied to clipboard!');
  };

  const downloadCatalog = () => {
    const link = document.createElement('a');
    link.href = '/ChampionRoof-Profile.pdf'; // Update this with your actual PDF path
    link.download = 'catalog.pdf'; // Name the file to download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="navbar">
      <div className="navbarcontent">
        {/* <a href="#">
          <Menu width="35px" height="35px" />
        </a> */}
        <img src={Logo} alt="Champion Logo" />
        <div className="rightside" style={{  alignItems:"center"}}>
        <div onClick={copyToClipboard} style={{ cursor: 'pointer' , display:"flex" , alignItems:"center"}}>
        <p>+971 526336867</p>
        <Phone width="40px" height="35px" />
      </div>
      <div onClick={downloadCatalog} style={{ cursor: 'pointer', display:"flex" , alignItems:"center"}}>
        <p>Download Catalog</p>
        <Pdf width="35px" height="35px" />
      </div>
           
          
           
        </div>
      </div>
    </div>
  );
};

export default Navbar;
