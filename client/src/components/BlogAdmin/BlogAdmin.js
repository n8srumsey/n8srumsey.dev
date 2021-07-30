import React, { useState, useEffect } from "react";
import { Container, Grow, Grid } from "@material-ui/core";
import { useDispatch } from "react-redux";

import { getPosts } from "../../actions/posts";
import Posts from "./Posts/Posts";
import SiteNavbar from "../Navbar/SiteNavbar";
import useStyles from "./styles";

const App = () => {
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
              <Grid item xs={12} sm={7}>
                <Posts />
              </Grid>
            </Grid>
          </Container>
        </Grow>
      </Container>
    </Container>
  );
};

export default App;
