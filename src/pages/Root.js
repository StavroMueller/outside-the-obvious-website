import React from 'react';

import {
  Grid, 
  Typography
} from '@mui/material'
import Gallery from '../components/Gallery';
import wotoFinder from '../utilities/wotoFinder';

const Root = () => {
  const wotoUrls = [...wotoFinder('street', 3), ...wotoFinder('fashion', 3), ...wotoFinder('travel', 3)];
  return (
    <>
    <Grid container>
      <Grid item xs={12}>
        <Typography variant="h1">OUTSIDE THE OBVIOUS </Typography>
      </Grid>
    </Grid>
    <Grid container>
      <Grid item xs={12}>
        <Typography variant="h3"> Photography with teeth. My photograpy whatever whatever whatever haha, this is just going to get out of hand, manFashion photography with teeth. I like it messy — the undone button, the smudged lipstick, the last drag before the spotlight hits. I shoot in the cracks between polish and instinct, where things still feel electric. Whether it’s backstage at fashion week or on the street in heels and sweat, I’m chasing energy, tension, and everything too good to plan.</Typography>
      </Grid>
    </Grid>
    <Grid container>
      <Grid item xs={12}>
        <Typography variant="p"> <a href="mailto:contact@outsidetheobvious.com">contact@outsidetheobvious.com</a> <a href="https://www.instagram.com/outsidetheobvious">instagram</a></Typography>
      </Grid>
    </Grid>
    </>
  )
}

export default Root
