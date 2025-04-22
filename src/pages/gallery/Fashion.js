import React from "react";
import Container from "react-bootstrap/Container";
import wotoFinder from "../../utilities/wotoFinder";
import PhotoAlbum from "react-photo-album";
import Gallery from "../../components/Gallery";
import Grid from "@mui/material/Grid2";

const Fashion = () => {
  const wotoUrls = wotoFinder("fashion", 13);

  // const photos = wotoUrls.map(url => ({
  //   src: url,
  //   width: 800,
  //   height: 600
  // }));

  return (
    <>
      <Grid container>
        <Gallery imageUrls={wotoUrls} />
      </Grid>
    </>
  );
};

export default Fashion;
