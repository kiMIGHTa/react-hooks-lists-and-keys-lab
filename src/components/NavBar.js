import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const navbarElements = links.map((link)=>{
    return <a key={link} href={`#${link}`} >{link}</a>
  })

  return <nav>
    {navbarElements}
  </nav>;
}

export default NavBar;
