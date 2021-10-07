import React from "react";
import styled from "styled-components"
import { Link } from "react-router-dom";
  
const Footer = () => {
  return (
    <Box>
      <h1 style={{ color: "#9d0208", 
                   textAlign: "center", 
                   marginTop: "-50px" }}>
        <span dangerouslySetInnerHTML={{ "__html": "&copy;" }} />Aspire Animations
      </h1>
      <Container>
        <Row>
          <Column>
            <Heading>Navbar</Heading>
            <FooterLink href="#">About Us!</FooterLink>
            <FooterLink href="#">Portfolio!</FooterLink>
            <FooterLink href="#">Hire Us!</FooterLink>
          </Column>
          <Column>
            <Heading>Services</Heading>
            <FooterLink href="#">Motion Graphics</FooterLink>
            <FooterLink href="#">2D Animation</FooterLink>
            <FooterLink href="#">3D Animation</FooterLink>
            <FooterLink href="#">Digital Arts</FooterLink>
          </Column>
          <Column>
            <Heading>Contact Us</Heading>
            <FooterLink href="#">Email Us!</FooterLink>
            <FooterLink href="tel:91-6005089303">+91 6005089303</FooterLink>
            <FooterLink href="tel:991 6006119724">+91 6006119724</FooterLink>
            <Link to="/hire">Query Form!</Link>
          </Column>
          <Column>
            <Heading>Social Media</Heading>
            <FooterLink href="#">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>
                  Facebook
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>
                  Instagram
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-twitter">
                <span style={{ marginLeft: "10px" }}>
                  Twitter
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-youtube">
                <span style={{ marginLeft: "10px" }}>
                  Youtube
                </span>
              </i>
            </FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};





// CSS
 const Box = styled.div`
  padding: 80px 60px;
  background: black;
  bottom: 0;
  width: 100%;
  
   
  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;
   
 const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1000px;
    margin: 0 auto;
    /* background: red; */
`
   
 const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 60px;
`;
   
 const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 
                         minmax(185px, 1fr));
  grid-gap: 20px;
   
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, 
                           minmax(200px, 1fr));
  }
`;
   
 const FooterLink = styled.a`
  color: #fff;
  margin-bottom: 20px;
  font-size: 18px;
  text-decoration: none;
   
  &:hover {
      color: green;
      transition: 200ms ease-in;
  }
`;
   
 const Heading = styled.p`
  font-size: 24px;
  color: #fff;
  margin-bottom: 40px;
  font-weight: bold;
`;


export default Footer;