const mongoose = require('mongoose');

//*!UserSchema
const UserSchema = new mongoose.Schema({
        name : {type : String,  required : true},
        email : {type : String, required : true, unique : true},
        age : {type : Number},
    },
    {   
        timestamps: true
    })

//*!create model
const User = mongoose.model('User', UserSchema);
/*
    This line creates a Mongoose model named User based on the schema UserSchema, and
    reference to the model in your code.
    
    The first argument 'User' is the name of the model.
    This name will be used to interact with the collection, and Mongoose will 
    automatically create a collection in MongoDB named 'users' (the pluralized, lowercase
    version of 'User').
    
    The second argument UserSchema is the schema that defines the structure of the documents in the users collection. 
*/

module.exports = User;