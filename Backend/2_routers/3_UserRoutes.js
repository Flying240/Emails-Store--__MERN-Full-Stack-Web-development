const express = require('express');
const mongoose = require('mongoose');
const User = require('./2_UserModel');

/*
    POST, GET, PATCH, and DELETE are HTTP methods which are used on both the client and server sides.
    on server side Route handlers interact with data from/to the database and data to/from the client.
                                                to (fetch, update, delete/create a resuorce)
*/

const Router = express.Router();
/*
    express.Router() allows you to create modular route handlers. 
    Instead of defining all routes in the main application file (app.js or index.js),
    you can define routes in separate files or modules.
*/

//add new user via post request and Craete
Router.post('/CreateUser',  async (req, res) => {
    
    //req.body contains data sent to the server
    const name = req.body.name;
    const email = req.body.email;
    const age = req.body.age;
    
    //catching if an error is encountered like(name, email are mandatory field, if not given error)
    try {
        //creating user data/document 
        const UserAdded = await User.create({
            name:   name,
            email:  email,
            age:    age,
        });
        
        //sending a response if user is created
        res.status(200).send({message:'User Created', name:name, email:email, age:age});
        console.log("User Created\n", UserAdded);
    } catch (error) {
        console.log('Post Create error\n', error);
        res.status(500).send({ message: 'Post Create error', error: error.message });  
    } 
});

//get all user
Router.get('/DisplayAll', async (req, res) => {
        try {
            //geting all users via find() 
            const DisplayAll = await User.find();

            //sending a response of users_list
            res.status(200).json(DisplayAll);
            // console.log(DisplayAll);
            
        } catch (error) {  
            console.log('Get Find() error\n', error);
            res.status(500).send({ message: 'Get Find() error', error: error.message });  
        } 
});

//get single user by user id sent via params in url
Router.get('/User/:id', async (req, res) => {

    const {id} = req.params;
    try {
        //geting a user via findById() 
        const singleUser = await User.findById({_id: id});
        res.status(200).json(singleUser);
            console.log(`user id ${id} fetched\n`,singleUser);
        } catch (error) {  
            console.log('Get findById() error\n', error);
            res.status(500).send({ message: 'Get findById() error', error: error.message });  
        } 
    });
    
    //delete a user sent via params in url
    Router.delete(`/DeleteUser/:id`, async (req, res) => {
        const {id} = req.params;
        // console.log({id});
    try {
            const singleUser = await User.findByIdAndDelete({_id: id});
            res.status(200).json(singleUser);
            console.log(`user id ${id} Deleted\n`,singleUser);

        } catch (error) {  
            console.log('Delete error\n', error);
            res.status(500).send({ message: 'Delete error', error: error.message });  
        } 
});

//update a user sent via params in url
Router.patch(`/UpdateUser/:id`, async (req, res) => {
    
    const {id} = req.params;

    // const name = req.body.name;
    // const email = req.body.email;
    // const age = req.body.age;

    try {
            const updateUser = await User.findByIdAndUpdate(id, req.body, {
                new: true
            });
            res.status(200).json(updateUser);
            console.log(`user id ${id} updated\n`, updateUser);

        } catch (error) {  
            console.log('Patch error\n', error);
            res.status(500).send({ message: 'Patch error', error: error.message });  
        } 
});

module.exports = Router; 