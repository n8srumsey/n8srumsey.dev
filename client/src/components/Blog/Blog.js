import React, { useState, useEffect } from "react";
import { Container, Grow, Grid, Typography } from "@material-ui/core";
import { useDispatch } from "react-redux";

import { getPosts } from "../../actions/posts";
import Posts from "./Posts/Posts";
import SiteNavbar from "../Navbar/SiteNavbar";
import useStyles from "./styles";

const Blog = () => {
  const [currentId, setCurrentId] = useState(null);
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <Container maxWidth="100%">
      <SiteNavbar />
      <Container className={classes.container}>
        <Grow in>
          <Container style={{ marginTop: "5em" }}>
            <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
              <Grid container item justifyContent="center">
                <Typography className={classes.heading} variant="h3">Blog</Typography>
              </Grid>
              <Grid contianer item xs={8} sm={8}>
                <Posts />
              </Grid>
            </Grid>
          </Container>
        </Grow>
      </Container>
    </Container>
  );
};

export default Blog;
