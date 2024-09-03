const express = require('express');
/*  
    This line imports the Express framework into your Node.js application.
    *which you can then use to create and manage your web server. 
*/

const app = express();
/*
    This line creates an instance of an Express application.
    *The express() function initializes a new Express application, stored in the app variable. 
    *This app object is used to define routes, handle requests, and configure middleware in your 
    web application.
*/

/*
    app.listen(3000);
        This function call tells your Express application to start a server that listens for connections on port 3000. 
        *The server will wait for incoming requests at this port and respond based on the routes and middleware you've
        defined in your application.
 
    !to test this i will simply write get response to this server in postman
    
    app.get('/', (req, res) =>{
            res.send("api is running")
        });
    
    !then remove it, if it is running
*/

const dotenv = require('dotenv');
dotenv.config();
/*
    are used to load environment variables from a .env file into the process.env object in 
    your Node.js application.

    dotenv.config();: This line tells dotenv to read the .env file and load its contents 
    into process.env. 

    as process.env is the global object in Node.js that holds all the environment variables
    and is accessible throughout your code.
*/

app.use(express.json());
/*
    Parsing JSON Data:
        When a client sends a *request with a JSON body, the request payload is typically sent as a string of text*.
        To work with this data in a JavaScript-friendly format, it needs to be converted (or parsed) into a JavaScript object.
        The express.json() middleware function automatically *parses incoming requests with JSON payloads* and makes the
        data available in req.body as a JavaScript object.

    Middleware:
        app.use() is a middleware function in Express. 
        Middleware functions are functions that have access to the request object (req), the response object (res), and 
        the next middleware function in the application’s request-response cycle.
        In this case, express.json() is used to process all incoming requests with a Content-Type header of application/json.
        YOU WILL see this in /frontend/create when you create users
*/
const mongoose = require('mongoose');

const userRouter = require('./2_routers/3_UserRoutes');

const cors = require('cors');
app.use(cors());
  
mongoose.connect(process.env.URI)
    .then(()=>{
        console.log('Connected to MongoDB');

        //if 3000 not works, backup port no is 8000
        const portNo = process.env.PORT || 8000
        app.listen(portNo, () => console.log(`Server is running on port ${portNo}`));
        // , "link:- http://localhost:3000/EmailsStore/Backend/DisplayAll"));
        
    })
    .catch((error)=>{ 
        console.error('Error connecting to MongoDB:', error);
    })
 
// app.use("/api/user", userRouter);
app.use("/EmailsStore/Backend", userRouter);
  