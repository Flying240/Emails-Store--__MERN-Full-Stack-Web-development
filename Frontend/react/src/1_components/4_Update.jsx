import React,  {useState, useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";

function Update() {
	const [name, setName] = useState("")
	const [email, setEmail] = useState("")
	const [age, setAge] = useState(0)

	const [error, setError] = useState("")

	const navigate = useNavigate();

	// console.log(name, email, age);
	
	const  {id} = useParams();

	//get single user info and set into these states
	const getSingleUser = async () =>{

		try{
			const response = await fetch(`http://localhost:3000/EmailsStore/Backend/User/${id}`);

			const result = await response.json();
			
			if(!response.ok){
				console.log(result.error);
				setError(result.error);
			}

			if(response.ok){
				console.log(`User ${id} Updated  Succesfully`);
				console.log(result);
				setError("");

				setName(result.name);
				setEmail(result.email);
				setAge(result.age);
			}
		}catch (error) {
            console.error('Error:', error);
            setError('Failed to fetch data from the server or Backend Server is down');
        }
	}

	//after update as you want and send patch request
	// and navigate back to all page
	async function handleEdit(event){
		try{
			event.preventDefault();

			const UpdatedUser = {
					name: name, 
					email:email,
					age: age};

			const response = await fetch(`http://localhost:3000/EmailsStore/Backend/UpdateUser/${id}`, {
				method: 'PATCH',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(UpdatedUser)
			});
			const result = await response.json();
			
			if(!response.ok){
				console.log(result.error);
				setError(result.error);
			}

			if(response.ok){
				console.log(result);
				setError("");

				setName("");
				setEmail("");
				setAge(0);

				navigate("/EmailsStore/DisplayAll");
			}
		}catch (error) {
            console.error('Error:', error);
            setError('Failed to fetch data from the server or Backend Server is down');
        }
	}

	useEffect(() => {
		getSingleUser()
	}, [])
  return (
    <div>
		<h1>Update Page</h1>


		<div>
			{error && <div className="alert alert-danger">
						This is an error:- {error}
					</div>}
		<div className="container my-2">
			<h2 className="text-center">Edit the data</h2>

			<form onSubmit={handleEdit}>
				<div className="form-group">
					<label  htmlFor="exampleInputName1">Name</label>
					
					<input
						type="text"
						className="form-control"
						placeholder="Name"

						value={name}

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

				value={email}

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

				value={age}

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
    </div>
  );
}

export default Update;
