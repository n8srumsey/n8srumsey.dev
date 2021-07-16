import mongoose from 'mongoose';

const blogPostSchema = mongoose.Schema({
    title: String,
    postId: String,
    image: String,
    content: String,
    summary: String,
    tags: [String],
    datePosted: {
        type: Date,
        default: new Date()
    },
    lastUpdated: {
        type: Date,
        default: new Date()
    },
});

const BlogPost = mongoose.model('BlogPost', blogPostSchema);

export default BlogPost;