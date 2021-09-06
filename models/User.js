const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
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
            type: Schema.Types.ObjectId,
            ref: 'Thought'
            } 
        ]
    },
    friends: {
        _id: [
            {
            type: Schema.Types.ObjectId,
            ref: 'User'
            } 
        ]
    }

    
    
});

UserSchema.virtual('thoughtCount').get(function() {
    return this.thoughts.reduce(
      (total, thoughts) => total + thought.reactioins.length + 1,
      0
    );
  });
  

const User = model('User', UserSchema);

module.exports = User;