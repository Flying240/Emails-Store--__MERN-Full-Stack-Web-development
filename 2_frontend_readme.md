# first i created backend folder
    1)i ran 'npm create vite@latest' command in terminal


# i created a folder components in /src
## cretaed a  1_navbar.jsx  file
    1)created a navbar component
        using ( https://getbootstrap.com/docs/5.0/components/navbar/#nav )

        after change all `className to class` and then change all `class to className`
    
    2)npm install react-router-dom

        Routing allows you to create a single-page application (SPA) with multiple views or pages. By using react-router-dom, you can define different routes in your application, and each route will render a different component.

    Navigate: Used for automatic, programmatic navigation. It’s ideal when you need to redirect users based on certain conditions or actions without their direct interaction (e.g., after logging in or based on some logic).

    Link: Used for manual, user-initiated navigation. It’s ideal for creating links that users click on to move between different parts of your app (e.g., in a navigation menu or buttons).

    3)from Navbar we are setting link in URL and from URL BrowserRouter routes routes to the spefic component

## created a 2_create.jsx file
    created a Create component
        using ( https://getbootstrap.com/docs/5.0/forms/overview/ )

        after change all `className to class` and then change all `class to className

    here we are using fetch call instead of axios to post the request to server and get bacjkk the response
    
    I will use try catch staement if error occurs when clicked on HandleSubmit() 

        if no request is sent then server is down i will setError(error.message)
    
        if respone is not ok then some error like ,madndatory are in name/email is not filled so i will settaht error 

        after resolving the response into result variable
        i will set all react states to empty strings through their setState()

###  i think we will got cors error here
    CORS (Cross-Origin Resource Sharing) is a security feature implemented by web browsers to restrict how resources on a web page can be requested from another domain(3000, backend) outside the domain(5000, frontend) from which the resource originated.
    This is primarily a mechanism to protect users from malicious websites attempting to access sensitive information from other sites.

    to solve this we have to include cors headers in (3000, backend/1_server.js) to allow the React app to access its resources. which makes backend allows all URL/routes requests made from frontend.

    const cors = require('cors');
    app.use(cors()); // Enable CORS for all routes

## created a 3_read.jsx file
created a Card component
        using ( https://getbootstrap.com/docs/4.0/components/card/#titles-text-and-links )

        after change all `className to class` and then change all `class to className

        i will update user in another page so icreatde 4_Update.jsx, but i will be deleteing user in this page only

## created a 4_update.jsx file
    create same component of 1_create.jsx
    and fill all deatils of user by getSingleUser
    and via patch send patch request