import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Grid,
  Typography,
  TextField,
  FormControl,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
} from "@material-ui/core";

function BlogPost() {
  const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });
  const classes = useStyles();

  return (
    <Card className={classes.root} alignItems="center" justify="center">
      <CardActionArea>
        <CardMedia className={classes.media} image="" title="" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {" "}
            *TITLE*{" "}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            *SUMMARY* *SUMMARY* *SUMMARY* *SUMMARY* *SUMMARY* *SUMMARY*
            *SUMMARY* *SUMMARY* *SUMMARY* *SUMMARY* *SUMMARY* *SUMMARY*
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions style={{ justifyContent: "center" }}>
        <Button size="small" color="primary">
          {" "}
          Full Post{" "}
        </Button>
      </CardActions>
    </Card>
  );
}

export default class Blog extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        flexWrap="wrap"
      >
        <Grid item xs={12} sm={6}>
          <Typography component="h4" variant="h4">
            Blog
          </Typography>
        </Grid>
        <Grid container item>
          <Grid container item xs={12} sm={6}>
            <BlogPost />
            <BlogPost />
            <BlogPost />
            <BlogPost />
            <BlogPost />
            <BlogPost />
          </Grid>
        </Grid>
      </Grid>
    );
  }
}
