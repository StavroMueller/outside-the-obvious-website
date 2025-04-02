import React from "react";
import { SocialIcon } from "react-social-icons";
import Container from "react-bootstrap/Container";

const Contact = () => {
  return (
    <>
      <Container>
        <SocialIcon url="mailto:contact@outsidetheobvious.com" />
        <SocialIcon url="https://instagram.com/outsidetheobvious" />
      </Container>
    </>
  );
};

export default Contact;
