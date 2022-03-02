import React from "react";

const Footer =()=>{

    const year = new Date().getFullYear();
    
    return (
        <footer>
         <span> Copyright © {year}</span>
        </footer>
    )
}
export default Footer;