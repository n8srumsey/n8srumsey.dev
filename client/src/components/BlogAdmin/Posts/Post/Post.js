import React from "react";
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from "@material-ui/core";
import Edit from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import moment from 'moment';

import useStyles from "./styles";
import { useDispatch } from "react-redux";
import { deletePost } from "../../../../actions/posts";

import img from '../../../../images/download.jpg';

const Post = ({ post, setCurrentId, handleClickOpen }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <Card className={classes.card} >
      <CardMedia className={classes.media} image={img} title={post.title} />
      <div className={classes.overlay}>
        <Typography variant="body2"> {moment(post.createdAt).fromNow()} </Typography>
      </div>
      <div className={classes.overlay2}>
        <Button style={{ color: "white" }} size="small" onClick={() => {}}>
          <MoreHorizIcon fontSize="medium" />
        </Button>
      </div>
      <div className={classes.details}>
        <Typography variant="body2">
          &nbsp;{post.tags.map((tag) => `#${tag} `)}&nbsp;
        </Typography>
      </div>
      <Typography className={classes.title} variant="h5" gutterBottom>
        &nbsp;{post.title}&nbsp;
      </Typography>
      <CardContent>
        <Typography className={classes.description} variant="body2" color="textSecondary" compoonent="p">
          {post.summary}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button size="small" color="primary" onClick={() => {
            setCurrentId(post._id);
            handleClickOpen();
          }}>
          <Edit fontSize="small" />
          &nbsp;Edit&nbsp;
        </Button>
        <Button size="small" color="primary" onClick={() => {dispatch(deletePost(post._id))}}>
          <DeleteIcon fontSize="small" /> Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default Post;
