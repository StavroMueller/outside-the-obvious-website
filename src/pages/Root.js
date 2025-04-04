import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Typography from "@mui/material/Typography";
import { SocialIcon } from "react-social-icons";
import Gallery from "../components/Gallery";
import wotoFinder from "../utilities/wotoFinder";

const Root = () => {
  const wotoUrls = [
    ...wotoFinder("street", 3),
    ...wotoFinder("fashion", 3),
    ...wotoFinder("travel", 3),
  ];
  return (
    <>
      <div>
        <Container>
          <Row></Row>
          <Row></Row>
          <Gallery imageUrls={wotoUrls} />
        </Container>
      </div>
    </>
  );
};

export default Root;
