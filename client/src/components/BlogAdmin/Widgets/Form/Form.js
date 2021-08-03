import React, { useState, useEffect } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import FileBase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";

import useStyles from "./styles";
import CreateNewButton from "../CreateNewButton/CreateNewButton";
import { createPost, updatePost } from "../../../../actions/posts";
import CssTextField from "./CssTextField";

const Form = ({ currentId, setCurrentId, open, handleOpen, handleClose }) => {
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    image: "",
  });
  const post = useSelector((state) => (currentId ? state.posts.find((p) => p._id === currentId) : null));
  const classes = useStyles();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
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
    handleClose();
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
  const handleCreateNewClick = () => {
    setCurrentId(null);
    handleOpen();
  }
  

  return (
    <div>
      <CreateNewButton clickEvent={handleCreateNewClick} />
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md" fullScreen={fullScreen} aria-labelledby="form-dialog-title" className={`${classes.dialog} ${classes.root}`}>
        <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
          <DialogTitle id="form-dialog-title" className={`${classes.formDialog} ${classes.formTitle}`}>
            {currentId ? "Edit" : "Create"} a Blog Post
          </DialogTitle>
          <DialogContent className={classes.formDialog}>
            <CssTextField
              name="title"
              label="Title"
              id="standard-textarea"
              multiline
              fullWidth
              variant="standard"
              value={postData.title}
              onChange={(e) => setPostData({ ...postData, title: e.target.value })}
            />
            <CssTextField
              name="postURL"
              label="Post URL"
              id="standard-textarea"
              fullWidth
              variant="standard"
              value={postData.postURL}
              onChange={(e) => setPostData({ ...postData, postURL: e.target.value })}
            />
            <CssTextField
              name="tags"
              label="Tags"
              id="standard-textarea"
              fullWidth
              variant="standard"
              value={postData.tags}
              onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })}
            />
            <CssTextField
              name="summary"
              label="Summary"
              id="standard-textarea"
              multiline
              fullWidth
              variant="standard"
              value={postData.summary}
              onChange={(e) => setPostData({ ...postData, summary: e.target.value })}
            />
            <CssTextField
              name="content"
              label="Content"
              id="standard-textarea"
              multiline
              fullWidth
              variant="standard"
              value={postData.content}
              onChange={(e) => setPostData({ ...postData, content: e.target.value })}
            />
            <div className={classes.fileInput}>
              <FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, image: base64 })} />
            </div>
          </DialogContent>
          <DialogActions className={classes.formDialog}>
            <Button onClick={clear} color="primary">
              Cancel
            </Button>
            <Button onClick={handleSubmit} color="primary">
              Submit
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
};

export default Form;
