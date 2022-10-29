const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Must be a name"],
        trim: true,
        maxlength: [20, "Can not be more then 20 character"]
    },
    completed: {
        type: Boolean,
        required: false,
        default: false
    }
});

module.exports = mongoose.model('Task', taskSchema);