import mongoose from 'mongoose';

const contactMessageSchema = mongoose.Schema({
    name: String,
    email: String,
    message: String,
    timestamp: {
        type: Date,
        default: new Date()
    }    
});

const ContactMessage = mongoose.model('ContactMessage', contactMessageSchema);

export default ContactMessage;