import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ilham Hilmi Hilmawan </span>
            from <span className="purple"> Darul Ulum University, Jombang</span>
            {/* <br />
            I am deeply passionate about technology and constantly strive to expand my knowledge in the fields of web development. */}
            <br />
            With a strong foundation in programming and a drive for continuous improvement, I am committed to building innovative and impactful digital solutions.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games & Watching Movies
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Books & Novels
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>"It does not matter how slowly you go as long as you do not stop!" </p>
          <footer className="blockquote-footer">Confucius</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
