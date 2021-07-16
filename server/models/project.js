import mongoose from 'mongoose';

const projectSchema = mongoose.Schema({
    title: String,
    projectId: String,
    logo: String,
    summarySnippet: String,
    summary: String,
    content: String,
    categories: [String],
    tags: [String],
    dateFinished: {
        type: Date,
        default: new Date()
    },
    lastUpdated: {
        type: Date,
        default: new Date
    },
    
});

const ProjectListing = mongoose.model('Project', projectSchema);

export default Project;