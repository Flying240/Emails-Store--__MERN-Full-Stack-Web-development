import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

/*
	Created 4 states naem, email, age and error(show to user).

	I will use try catch staement if error occurs when clicked on HandleSubmit() 

        if no request is sent then server is down i will setError(error.message)
    
        if respone is not ok then some error like ,madndatory are in name/email is not filled so i will settaht error 

        after resolving the response into result variable
        i will set all react states to empty strings through their setState()

 */
function Create() {

	const [name, setName] = useState("")
	const [email, setEmail] = useState("")
	const [age, setAge] = useState(0)
	
	// to output changed name, rnail, age when input is given
	// console.log(name, email, age);

	//to output error in web page
	const [error, setError] = useState("")

	const navigate = useNavigate();

	//*!using fecth call
	async function handleSubmit(event){
		// if server is down
		try {
			event.preventDefault();
	
			const addUser = {
					name: name, 
					email:email,
					age: age};
	
			const response = await fetch("http://localhost:3000/EmailsStore/Backend/CreateUser", {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(addUser)
			});

			const result = await response.json();

			if(!response.ok){
				console.error('Server responded with:' ,response.status, result.error);
				setError("staus code:- "+response.status+". "+result.error);
			}
	
			else{
				console.log(result);
				setError("");
	
				setName("");
				setEmail("");
				setAge(0);
	
				navigate("/EmailsStore/DisplayAll");
			}
		} catch (error) {
			console.error('No response received:', error.message);
      		setError('No response from the server. The server may be down. or '+ error.message);
		}
	}

	//*?using axios

	// async function handleSubmit(event) {
	// 	try {
	// 		event.preventDefault();

	// 		const addUser = {
	// 		name: name, 
	// 		email: email,
	// 		age: age
	// 		};

	// 		// Axios POST request
	// 		const response = await axios.post(
	// 		"http://localhost:3000/EmailsStore/CreateUser",
	// 		addUser,
	// 		{
	// 			headers: {
	// 			"Content-Type": "application/json",
	// 			},
	// 		}
	// 		);

	// 		// If the request is successful (status 200–299), process the response
	// 		console.log(response.data);
	// 		setError("");

	// 		setName("");
	// 		setEmail("");
	// 		setAge(0);

	// 		navigate("/EmailsStore/all");

	// 	} catch (error) {
	// 		console.error('Error:', error);

	// 		// Handle error more explicitly
	// 		if (error.response===500) {
	// 		// The request was made and the server responded with a status code
	// 		// that falls out of the range of 2xx
	// 		console.error('Server responded with:', error.response.status, error.response.data);
	// 		setError(`Server Error: ${error.response.data.message || error.response.data.error || 'An unexpected error occurred.'}`);
	// 		} else if (error.request) {
	// 		// The request was made but no response was received
	// 		console.error('No response received:', error.request);
	// 		setError('No response from the server. The server may be down.');
	// 		} else {
	// 		// Something happened in setting up the request that triggered an Error
	// 		console.error('Error setting up the request:', error.message);
	// 		setError('Failed to send request: ' + error.message);
	// 		}
	// 	}
	// }
	// const result = response.data;

  return (
    <div>
		{error && <div className="alert alert-danger">
					This is an error:- {error}
				</div>}

      <div className="container my-2">
        <h2 className="text-center">Enter the data</h2>

        <form onSubmit={handleSubmit}>
			<div className="form-group">
				<label  htmlFor="exampleInputName1">Name</label>
				
				<input
					type="text"
					className="form-control"
					placeholder="Name"

					// value={name}

					onChange={(event)=>{
						setName(event.target.value)
					}}
				></input>
			</div>
 
          <div className="form-group">
            <label  htmlFor="exampleInputEmail1">Email address</label>		
            <input
              type="email"
              className="form-control"
              aria-describedby="emailHelp"
              placeholder="Enter email"

			//   value={email}

			  onChange={(event)=>{
				  setEmail(event.target.value)
			  }}
            ></input>

            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>

          <div className="form-group">
            <label  htmlFor="exampleInputage1">age</label>
            
			<input
              type="number"
              className="form-control"
              placeholder="age"
    
			//   value={age}

			  onChange={(event)=>{
				  setAge(event.target.value)
			  }}
            ></input>
          </div>          

          <button type="submit" className="btn btn-primary">
            Submit
          </button>

        </form>
      </div>
    </div>
  );
}

export default Create;
