import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Grid,
  Container,
  Box,
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
    <Card className={classes.root} align="center" justify="center">
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
          title=""
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            *TITLE*
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            *SUMMARY* *SUMMARY* *SUMMARY* *SUMMARY* *SUMMARY* *SUMMARY*
            *SUMMARY* *SUMMARY* *SUMMARY* *SUMMARY* *SUMMARY* *SUMMARY*
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions style={{ justifyContent: "center" }}>
        <Button size="small" color="primary">
          Edit
        </Button>
        <Button size="small" color="primary">
          Full Post
        </Button>
      </CardActions>
    </Card>
  );
}

export default function BlogAdmin() {
  return (
    <Grid
      container
      direction="column"
      justifyContent="flex-start"
      alignItems="center"
      flexWrap="wrap"
    >
      <Typography component="h4" variant="h4">
        Blog Admin!!
      </Typography>
      <Grid container item xs={10} alignItems="center" justifyContent='center' spacing={2}>
        <BlogPost />
        <BlogPost />
        <BlogPost />
        <BlogPost />
        <BlogPost />
        <BlogPost />
        <BlogPost />
        <BlogPost />
        <BlogPost />
        <BlogPost />
        <BlogPost />
        <BlogPost />
        
      </Grid>
    </Grid>
  );
}
