const { Schema, model } = require('mongoose');

const User = new Schema({
    username: {
        type:String,
        unique: true,
        required: true,
        trim: true
    },
    email:{
        type: String,
        unique: true,
        required: true,
        match: /.+\@.+\..+/
    },
    thoughts: {
        _id: [
            {
            type: Schema.type.ObjectId,
            ref: 'Thought'
            } 
        ]
    },
    friends: {
        _id: [
            {
            type: Schema.type.ObjectId,
            ref: 'User'
            } 
        ]
    }

    
});

module.exports = User;