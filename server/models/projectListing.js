import mongoose from 'mongoose';

const projectListingSchema = mongoose.Schema({
    title: String,
    id: String,
    // logo: image,
    summary: String,
    category: [String],
    tags: [String],
    dateFinished: {
        type: Date,
        default: new Date()
    },
    lastUpdated: {
        type: Date,
        default: Date.now()
    },
    
});

const ProjectListing = mongoose.model('ProjectListing', projectListingSchema);

export default ProjectListing;