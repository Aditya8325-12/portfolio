import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import emotion from "../../Assets/Projects/emotion.png";
import locom from "../../Assets/Projects/locom.webp";
import rddhoot from "../../Assets/Projects/rddhoot.png";
import nadiniimex from "../../Assets/Projects/nadiniimex.png";
import mamasdelight from "../../Assets/Projects/mamasdelight.png";
import timetrack from "../../Assets/Projects/timetrack.png";
import examPortal from "../../Assets/Projects/examPortal.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={locom}
              isBlog={false}
              isgithub={false}
              title="Locom"
              description="The Locom mobile application, developed using React Native, is designed for both iOS and Android platforms. It features backend integration with Firebase for OTP verification, chat functionality, and secure payment methods. The app includes performance optimizations and robust database connectivity, successfully launching on both the Apple App Store and Google Play Store."
              ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://play.google.com/store/apps/details?id=com.rexsolution.locom"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rddhoot}
              isBlog={false}
              isgithub={false}
              title="Rd Dhoot"
              description="Rddhoot is a responsive website built with React, Tailwind, and Bootstrap. It includes an admin panel developed using PHP Maker for easy content management and is optimized for performance across devices and browsers."
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://rddhoot.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nadiniimex}
              isBlog={false}
              title="Nandani Impex"
              isgithub={false}
              description="Nandaniimpex is a responsive website created with React, Tailwind, and Bootstrap. It features a PHP Maker-based admin panel for managing content efficiently and ensures smooth performance on various devices and browsers."
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://www.nandiniimpex.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mamasdelight}
              isBlog={false}
              title="Mamas Delight"
              description="
                         Mama’s Delight is a responsive website using the Spoonacular API to offer detailed food and recipe information. Users can search for recipes, view nutritional details, and follow preparation steps easily. The site provides a seamless, user-friendly experience across all devices"
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://mama-sdelight.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={timetrack}
              isgithub={true}
              isBlog={false}
              title="Time Track"
              description="Time Tracker application includes an admin panel where users can log in, log out, and view detailed time records for the current month or a specified time range. The admin panel allows efficient management and tracking of user activities."
              ghLink="https://github.com/Aditya8325-12/Time_Track"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isgithub={true}
              imgPath={examPortal}
              isBlog={false}
              title="Exam Portal"
              description="The Online Exam Portal offers weekly and lesson-wise tests, with lesson-wise tests having no time limit and weekly tests within a specific time range. It provides a flexible, structured approach for personalized learning and test-taking."
              ghLink="https://github.com/Aditya8325-12/Online_Exam_portal"
              // demoLink="https://play.google.com/store/apps/details?id=com.rexsolution.locom"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
