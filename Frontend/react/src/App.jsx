import "./App.css";
import NavBar from "./1_components/1_Navbar";
import Create from "./1_components/2_Create";
import Read from "./1_components/3_Read";
import Update from "./1_components/4_Update";

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
/*
  	1)BrowserRouter
  		This component is a high-level component that wraps around your entire application. 
		It provides the routing context for the rest of your app. It uses the HTML5 history
		API to keep your UI in sync with the URL.
	
	2. Routes
		The Routes component is a container for all the Route elements in your application.
		It ensures that only one route is rendered at a time, matching the current URL.
	
	BrowserRouter: Sets up the overall routing environment.
	It handles the browser’s history and URL synchronization, enabling the use of dynamic,
	client-side routing in a React application.

	Routes: Defines the individual routes within the application. 
	It contains
	3) Route components:- that map specific paths to the components that should be The Route component defines a mapping between a URL path and a component that 
	should be rendered when the app's URL matches that path.
	rendered.
 */
function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />

        <Routes>
			{/* This route is used to automatically redirect users from the root URL(http://localhost:5173/)
			to the "/EmailsStore/CreateUser" page when they first load the application. */}
			<Route path="/" element={<Navigate to="/EmailsStore/CreateUser" />} />

			<Route  path="/EmailsStore/CreateUser" element={<Create />} />
			{/* <Route exact path="/" element={<Create />} /> */}
			
			<Route path="/EmailsStore/DisplayAll" element={<Read />} />
			<Route path="/EmailsStore/UpdateUser/:id" element={<Update />} />
        </Routes>
        
      </BrowserRouter>
    </>
  );
}



export default App;
