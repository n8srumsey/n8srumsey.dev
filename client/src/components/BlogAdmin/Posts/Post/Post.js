import React from "react";
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from "@material-ui/core";
import Edit from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

import useStyles from "./styles";
import { useDispatch } from "react-redux";
import { deletePost, likePost } from "../../../../actions/posts";

const Post = ({ post, setCurrentId }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} image={post.selectedFile} title={post.title} />
      <div className={classes.overlay}>
        <Typography variant="h6">{post.creator}</Typography>
        <Typography variant="body2"> moment(post.createdAt).fromNow() </Typography>
      </div>
      <div className={classes.overlay2}>
        <Button style={{ color: "white" }} size="small" onClick={() => {}}>
          <MoreHorizIcon fontSize="medium" />
        </Button>
      </div>
      <div className={classes.details}>
        <Typography variant="body2" color="textSecondary">
          &nbsp;#Tag&nbsp;
        </Typography>
      </div>
      <Typography className={classes.title} variant="h5" gutterBottom>
        &nbsp;TITLE&nbsp;
      </Typography>
      <CardContent>
        <Typography className={classes.message} variant="body2" color="textSecondary" compoonent="p">
          *SUMMARY* *SUMMARY* *SUMMARY* *SUMMARY* *SUMMARY* *SUMMARY* *SUMMARY* *SUMMARY* *SUMMARY* *SUMMARY* *SUMMARY* *SUMMARY*
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button size="small" color="primary" onClick={() => {}}>
          <Edit fontSize="small" />
          &nbsp;Edit&nbsp;
        </Button>
        <Button size="small" color="primary" onClick={() => {}}>
          <DeleteIcon fontSize="small" /> Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default Post;
