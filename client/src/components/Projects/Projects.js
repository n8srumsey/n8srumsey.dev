import React from "react";
import { Container, Grid, Grow, Typography } from "@material-ui/core";

import useStyles from "./styles";

const Projects = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="100%">
      <Container className={classes.container}>
        <Grow in>
          <Container style={{ marginTop: "5em" }}>
            <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
              <Grid container item justifyContent="center">
                <Typography className={classes.heading} variant="h3">Projects</Typography>
              </Grid>
              <Grid contianer item xs={8} sm={8} note="projects go in this grid">
                
              </Grid> 
            </Grid>
          </Container>
        </Grow>
      </Container>
    </Container>
  );
};

export default Projects;
