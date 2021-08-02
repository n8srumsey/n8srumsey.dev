import React, { useState, useEffect } from "react";
import { Container, Grow, Grid, Typography } from "@material-ui/core";
import { useDispatch } from "react-redux";

import { getPosts } from "../../actions/posts";
import Posts from "./Posts/Posts";
import SiteNavbar from "../Navbar/SiteNavbar";
import useStyles from "./styles";
import Form from "./Widgets/Form/Form";

const App = () => {
  const [currentId, setCurrentId] = useState(null);
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setCurrentId(null);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container maxWidth="100%">
      <SiteNavbar />
      <Container className={classes.container}>
        <Grow in>
          <Container style={{ marginTop: "5em" }}>
            <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
              <Grid container item justifyContent="center">
                <Typography className={classes.heading} variant="h3">Blog Admin</Typography>
              </Grid>
              <Grid contianer item xs={8} sm={8}>
                <Posts setCurrentId={setCurrentId} handleClickOpen={handleClickOpen}/>
                <Form setCurrentId={setCurrentId} open={open} handleClickOpen={handleClickOpen} handleClose={handleClose} />
              </Grid>
            </Grid>
          </Container>
        </Grow>
      </Container>
    </Container>
  );
};

export default App;
