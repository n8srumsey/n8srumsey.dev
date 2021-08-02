import mongoose from 'mongoose';

const blogPostSchema = mongoose.Schema({
    title: String,
    postURL: String,
    image: String,
    content: String,
    summary: String,
    tags: [String],
    datePosted: {
        type: Date,
        default: new Date()
    },
});

const BlogPost = mongoose.model('BlogPost', blogPostSchema);

export default BlogPost;