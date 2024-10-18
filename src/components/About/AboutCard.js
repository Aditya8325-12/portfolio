import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Aditya Dhutraj</span>{" "}
            from <span className="purple">Aurangabad Maharashtra</span>.
            <br />
            I have completed a Bachelor of Technology (B.Tech) in Computer
            Science and Engineering
            <br />
            from CSMSS, Chh. Shahu College Of Engineering.
            <br />I gained hands-on experience during my internship at{" "}
            <span className="purple">V4U Tracking Solutions Limited</span>,
            <br />
            where I worked on mobile and web app development.
            <br />
            <br />
            Outside of coding, I enjoy:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Exploring New Technologies
            </li>
            <li className="about-activity">
              <ImPointRight /> Problem-Solving Challenges
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Build to make an impact!"{" "}
          </p>
          <footer className="blockquote-footer">Aditya Dhutraj</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
