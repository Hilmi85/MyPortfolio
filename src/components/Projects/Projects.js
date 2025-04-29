import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/absensi.png";
import emotion from "../../Assets/Projects/sistem-pakar.png";
import editor from "../../Assets/Projects/native-persewaan.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>Here are a few projects I've worked on recently.</p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Traditional Clothing Rental"
              description="Online costume rental website built using HTML, CSS, JavaScript, and native PHP. This platform allows rental service providers to showcase their traditional clothing products to customers, with features such as easy browsing, detailed product views, and online booking. Customers can conveniently reserve their chosen outfits through the website before picking them up at the location."
              ghLink="https://github.com/Hilmi85/native-persewaan"
              // demoLink="https://editor.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Employee Attendance System"
              description="This web-based application was built using HTML, CSS, and JavaScript for backend processing. It functions as an employee attendance system where users can log in using their unique ID to perform check-in and check-out actions. The system securely records daily attendance data and is designed to be simple, fast, and user-friendly. A modern solution for tracking employee presence with ease and accuracy."
              ghLink="https://github.com/Hilmi85/absensi"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Psychology Expert System"
              description="This expert system website was developed using HTML, CSS, JavaScript, and native PHP. It provides several psychological test types that users can take, and based on their answers, the system generates personalized results or recommendations. An interactive mental health solution designed to help users understand their psychological well-being with just a few clicks."
              ghLink="https://github.com/Hilmi85/sistem-pakar"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
