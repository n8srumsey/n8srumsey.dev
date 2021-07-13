import mongoose from 'mongoose';

const blogPostSchema = mongoose.Schema({
    title: String,
    id: String,
    // postImage: image,
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