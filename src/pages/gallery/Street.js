import React from "react";
import Container from "react-bootstrap/Container";
import wotoFinder from "../../utilities/wotoFinder";
import Gallery from "../../components/Gallery";
import Grid from "@mui/material/Grid2";

const Street = () => {
  const wotoUrls = wotoFinder("street", 16);
  return (
    <>
      <Grid container>
        <Gallery imageUrls={wotoUrls} />
      </Grid>
    </>
  );
};

export default Street;
