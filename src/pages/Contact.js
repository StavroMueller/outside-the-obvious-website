import React from "react";
import { SocialIcon } from "react-social-icons";
import Grid from "@mui/material/Grid2";

const Contact = () => {
  return (
    <>
      <Grid container>
        <Grid size={3}>
          <p>email</p>
        </Grid>
        <Grid size={3}>
          <a href="mailto:contact@outsidetheobvious.com">
            contact@outsidetheobvious.com
          </a>
        </Grid>

        <SocialIcon url="mailto:contact@outsidetheobvious.com" />
        <SocialIcon url="https://instagram.com/outsidetheobvious" />
      </Grid>
    </>
  );
};

export default Contact;
