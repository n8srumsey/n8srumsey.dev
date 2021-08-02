import express from "express";
import mongoose from "mongoose";

import BlogPost from "../models/blogPost.js";

const router = express.Router();

export const getPosts = async (req, res) => {
  try {
    const BlogPosts = await BlogPost.find();

    res.status(200).json(BlogPosts);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getPost = async (req, res) => {
  const { id } = req.params;

  try {
    const post = await BlogPost.findById(id);

    res.status(200).json(post);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createPost = async (req, res) => {
  const { title, message, selectedFile, creator, tags } = req.body;

  const newBlogPost = new BlogPost({
    title,
    message,
    selectedFile,
    creator,
    tags,
  });

  try {
    await newBlogPost.save();

    res.status(201).json(newBlogPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updatePost = async (req, res) => {
  const { id } = req.params;
  const { title, message, creator, selectedFile, tags } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  const updatedPost = { creator, title, message, tags, selectedFile, _id: id };

  await BlogPost.findByIdAndUpdate(id, updatedPost, { new: true });

  res.json(updatedPost);
};

export const deletePost = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  await BlogPost.findByIdAndRemove(id);

  res.json({ message: "Post deleted successfully." });
};

export default router;
