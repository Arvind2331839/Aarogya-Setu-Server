const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    Contact: {
        type: String,
        enum: ['Yes','No']
    },
    Fever: {
        type: String,
        enum: ['Yes','No']
    },
    Headache: {
        type: String,
        enum: ['Yes','No']
    },
    Traveled: {
        type: String,
        enum: ['UK','USA','Brazil','Germany','France','Russia']
    },
    Symptoms: {
        type: String,
        enum: ['Difficulty in breathing or shortness of breath','Chest pain or pressure','Loss of speech or movement','Pale, gray or blue-colored skin, lips or nail beds']
    },
    FullName: String,
    CompleteAddress: String,
    Email: String,
    MobileNumber: Number,
    Age: String,
    Gender: {
        type: String,
        enum: ['male','female']
    }
});

// create a user model based on schema
const UserModel = mongoose.model('user', UserSchema);

// export the user model and userSchema
module.exports = { UserModel };