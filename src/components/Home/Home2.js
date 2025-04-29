import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiFillInstagram, AiOutlineWhatsApp } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with programming and I have at least learnt something, I think… 🤷‍♂️
              <br />
              <br />I am fluent in technologies like
              <i>
                <b className="purple"> HTML, CSS, Javascript, PHP Native, and MySQL. </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">Web Technologies and Products </b> and building responsive and dynamic websites{" "}
                {/* <b className="purple">
                  Blockchain.
                </b> */}
              </i>
              <br />
              <br />
              Whenever possible, I love applying best practices in both
              <b className="purple"> Frontend</b> and
              <i>
                <b className="purple"> Backend Development</b>
              </i>
              &nbsp; and continuously exploring new trends in the world of
              <i>
                <b className="purple"> Web Technologies.</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a href="https://github.com/Hilmi85" target="_blank" rel="noreferrer" className="icon-colour  home-social-icons">
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a href="https://wa.me/62895366247588?text=Halo%20saya%20tertarik%20dengan%20layanan%20Anda" target="_blank" rel="noreferrer" className="icon-colour  home-social-icons">
                  <AiOutlineWhatsApp />
                </a>
              </li>
              <li className="social-icons">
                <a href="https://www.linkedin.com/in/ilham-hilmi-hilmawan-9b4266304/" target="_blank" rel="noreferrer" className="icon-colour  home-social-icons">
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a href="https://www.instagram.com/ilhamhilmih" target="_blank" rel="noreferrer" className="icon-colour home-social-icons">
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
