import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";
  
const Footer = () => {
  return (
    <Box>
      <h1 style={{ color: "white", 

                   marginTop: "-30px" }}>
        Ready for The Competition? 
        
      </h1>

      <h4 style={{ color: "white", 
                   marginTop: "-50px" }}>
        <br></br>
        <br></br>
        613-737-1111 
        
      </h4>

      <h5 style={{ color: "white", 
                   textAlign: "right", 
                   marginTop: "-50px" }}>

       Terms and Conditions &nbsp;&nbsp;&nbsp;&nbsp; Privacy Policy
        
      </h5>
      
      
    </Box>
  );
};
export default Footer;