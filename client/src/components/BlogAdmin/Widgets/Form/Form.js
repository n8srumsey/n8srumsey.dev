import React, { useState, useEffect } from "react";
import { Button, Typography, Paper } from "@material-ui/core";
import FileBase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";

import useStyles from "./styles";
import { createPost, updatePost } from "../../../../actions/posts";
import CssTextField from "./CssTextField";
import * as COLORS from "../../../../constants/colors";

const Form = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });
  const post = useSelector((state) =>
    currentId ? state.posts.find((p) => p._id === currentId) : null
  );
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const clear = () => {
    setCurrentId(null);
    setPostData({
      creator: "",
      title: "",
      message: "",
      tags: "",
      selectedFile: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId) {
      dispatch(updatePost(currentId, postData));
    } else {
      dispatch(createPost(postData));
    }

    clear();
  };

  return (
    <Paper className={classes.paper} elevation={3}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6" className={classes.formTitle}>{currentId ? "Edit" : "Create"} a Blog Post</Typography>
        <CssTextField
          name="creator"
          label="Creator"
          fullWidth
          variant='outlined'
          value={postData.creator}
          onChange={(e) => setPostData({ ...postData, creator: e.target.value })}
        />
        <CssTextField
          name="title"
          label="Title"
          fullWidth
          variant='outlined'          
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        />
        <CssTextField
          name="message"
          label="Message"
          fullWidth
          variant='outlined'       
          value={postData.message}
          onChange={(e) => setPostData({ ...postData, message: e.target.value })}
        />
        <CssTextField
          name="tags"
          label="Tags"
          fullWidth
          variant='outlined'      
          value={postData.tags}
          onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })}
        />
        <div className={classes.fileInput}>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })}
          />
        </div>
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          size="large"
          type="submit"
          fullWidth
          color='primary'
        >
          Submit
        </Button>
        <Button
          className={classes.buttonCancel}
          variant="contained"
          size="small"
          onClick={clear}
          fullWidth
          color='secondary'
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
