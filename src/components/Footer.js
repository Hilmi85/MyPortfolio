import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiFillInstagram, AiOutlineWhatsApp } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Ilham Hilmi Hilmawan</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year}</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a href="https://github.com/Hilmi85" style={{ color: "white" }} target="_blank" rel="noopener noreferrer">
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a href="https://wa.me/62895366247588?text=Halo%20saya%20tertarik%20dengan%20layanan%20Anda" style={{ color: "white" }} target="_blank" rel="noopener noreferrer">
                <AiOutlineWhatsApp />
              </a>
            </li>
            <li className="social-icons">
              <a href="https://www.linkedin.com/in/ilham-hilmi-hilmawan-9b4266304/" style={{ color: "white" }} target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a href="https://www.instagram.com/ilhamhilmih" style={{ color: "white" }} target="_blank" rel="noopener noreferrer">
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
