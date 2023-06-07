import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";
import './Home.css';
import logo1 from './abc.png';
import logo2 from './picture.png';
import logo3 from './blg.jpg';
import logo4 from './pic.png';
import logo5 from './blog.jpg';
import logo6 from './vb.jpg';
import logo7 from './vb2.jpg';
import logo8 from './vb3.jpg'

const Home = () => {
    return (
        <>
       <div className="abc">
       
        {/*<Navbar bg="dark" variant="dark" padding="top">
        <Container>
          <Navbar.Brand href="/" >HealthChain</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/profile">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            
          </Nav>
          {/* <div className="xyz" align="center">
            <input className="form-control mr-sm-2" type="search" placeholder="Enter a test" aria-label="Search"/>
          </div>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> 
      
        </Container>
    </Navbar>*/}
            <ul>
            <li><a href="/" >Healthchain</a></li>
            <li><a href="/">Home</a></li>
            <li><a href="/about" >About</a></li>
            <li><a href="/register">Signup/Login </a></li>
            </ul>

          
            <br/>
            <br/>
            <h1 className="index">Welcome to HealthChain</h1>
            <br/>
              <img src={logo1}  className = "index-logo" alt="logo1" />
              <img src={logo2}  className = "index-logo" alt="logo2" />
              <img src={logo3}  className = "index-logo" alt="logo3" />
              <img src={logo4}  className = "index-logo" alt="logo4" />
              <img src={logo5}  className = "index-logo" alt="logo5" />
              <img src={logo6}  className = "index-logo" alt="logo6" />
              <img src={logo7}  className = "index-logo" alt="logo7" />
              <img src={logo8}  className = "index-logo" alt="logo8" />

      </div>  
          <Box>
          <Container>
            <Row>
              <Column>
                <Heading>Despription</Heading>
                <FooterLink href="https://en.wikipedia.org/wiki/Health_system">HealthCare</FooterLink>
                <FooterLink href="https://www.mckinsey.com/featured-insights/mckinsey-explainers/what-is-blockchain">Blockchain</FooterLink>
                <FooterLink href="https://openledger.info/insights/blockchain-healthcare-use-cases/">Use cases</FooterLink>
              </Column>
              <Column>
                <Heading>Contact Us</Heading>
                <FooterLink href="#">Kolkata</FooterLink>
                <FooterLink href="#">981282811</FooterLink>
                <FooterLink href="#">917281621</FooterLink>
              </Column>
              <Column>
                <Heading>Social Media</Heading>
                <FooterLink href="#">
                  <i className="fab fa-facebook-f">
                      Facebook 
                  </i>
                </FooterLink>
                <FooterLink href="#">
                  <i className="fab fa-instagram">
                      Instagram
                  </i>
                </FooterLink>
                <FooterLink href="#">
                  <i className="fab fa-instagram">
                      Github
                  </i>
                </FooterLink>
                </Column>
              <Column>
                <Heading>LinkedIn</Heading>
                <FooterLink href="https://www.linkedin.com/in/iamabhishek2000/">
                    <span style={{ marginLeft: "5px" }}>
                      Abhishek Dey
                    </span>
                </FooterLink>
                <FooterLink href="https://www.linkedin.com/in/sk-mainul-islam-4236911b9/">
                    <span style={{ marginLeft: "5px" }}>
                      Sk Mainul Islam
                    </span>
                </FooterLink>
                <FooterLink href="https://www.linkedin.com/in/soumya-sen-ba00b7a2/">
                    <span style={{ marginLeft: "5px" }}>
                      Dr.Soumya Sen
                    </span>
                </FooterLink> 
              </Column>
            </Row>
          </Container>
        </Box>    
      </>
    );
};
export default Home;