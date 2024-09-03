# first i created backend folder
###    1)i ran ' npm init ' command in terminal

        why?
        npm init sets up a structured environment for your Node.js project, making it easier to manage and collaborate on
        Running npm init is a command used to initialize a new Node.js project. It creates a package.json file in your project directory, which serves as 

        1)Metadata Creation: version, description, entry point (e.g., index.js), and other key details.

        2)Dependency Management: The package.json file keeps track of the dependencies (libraries or packages) that your project needs. This makes it easier to share your project with others or to deploy it, as they can simply run npm install to install all required dependencies.

        3)Scripts: You can define custom scripts in package.json to automate tasks like building your project, running tests, or starting your server.

        4)Version Control: It helps in versioning your project by keeping track of the project’s version and dependencies' versions, which is crucial for maintaining and updating your project.

###    2)from 1.2 i will install 
                                npm install express dotenv cors
                                npm install --save-dev nodemon

        The first command installs essential packages (express, dotenv, cors) for building and configuring your Node.js application.
        
        The second command installs nodemon as a development tool to streamline the development process by automatically restarting the server during changes.
    
        1)` npm install express dotenv cors `

            express: A web framework for Node.js that simplifies handling HTTP requests and creating web applications or APIs.

            dotenv: A package that loads environment variables from a .env file into process.env, allowing you to keep sensitive data (like API keys) separate from your codebase.

            cors: A middleware package that enables Cross-Origin Resource Sharing (CORS), allowing your API to handle requests from different domains, which is essential for web security and functionality in a multi-origin environment.

        2)` npm install --save-dev nodemon `

            nodemon: A development tool that automatically restarts your Node.js server when file changes are detected, improving development efficiency. The --save-dev flag installs it as a development dependency, meaning it's only needed during development and not in production.


###    3)we create 1_server.js

         in /backend package-json file in "scripts" 
         
         paste:- 
         "start": "node 1_server.js",
         "dev": "nodemon 1_server.js",
         "test" "echo \Error: no test specified\ && exit 1"

            why?
            "start": "node 1_server.js": When you run ` npm start `, it will execute this script and start your server by running the 1_server.js file.

            "dev": "nodemon 1_server.js": This command starts your server in development mode using nodemon. nodemon will automatically restart the server whenever you make changes to the code, making it convenient for development. You can run this with ` npm run dev `.

            "test": "echo \"Error: no test specified\" && exit 1": This is a placeholder script that outputs an error message when you run npm test, indicating that no tests have been defined yet. You can replace this with actual test scripts once you have tests in place:    

###    4)we have to install mongo db and link it to backend

        1)npm install mongoose

        2)this you have done in .env URI path

        mongoose.connect("mongodb+srv://YourUserName:YourPassword.mongodb.net/1_EmailsStore")
    
###    5)as port no and monog url is open for public for security reasons it is not good

        1)so create ` .env ` file
            there i will use PORT for port no,  URI for mongo url
        
# i will create another folder 2_routers
    1)which contains 2_UserModule.js and 3_UserRoutes.js file
        
    2)in 2_UserModule.js i will craete schemas and export it to 3_UserRouter.js

    3)Instead of defining all routes in the main application file (app.js or index.js),
    you can define routes in separate files(3_UserRoutes.js file) or modules, we use express Router to do so.
