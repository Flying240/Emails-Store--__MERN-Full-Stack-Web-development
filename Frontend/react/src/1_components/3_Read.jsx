//this will display all users
import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";

/*
    i will fetch data from backenbd and store it in
    data state which in intialized to an empty array
    
    i will display alld ta using map function 
    i will put after data? , which means when data is empty don't
    map it[(happens during asynchronous call)]

    when user click  on edit  he will be directed to that 4_udadte.jsx component page,
    i will delete that user in this page only

    i will delete that user by sending delete request with user id
    and after 2 second update data state, by showing user deleted
*/
function Read() {
    
    const [data, setData] = useState([]);
    const [error, setError] = useState("");
    
    async function getData(){
        //if servers is down
        try {
            const response = await fetch("http://localhost:3000/EmailsStore/Backend/DisplayAll");
            const result = await response.json();
            
            if(!response.ok){
                console.log(result.error);
                setError(result.error);
            }
            else{
                setData(result);
            }
        } catch (error) {
            console.error('Error:', error);
            setError('Failed to fetch data from the server or Backend Server is down');
        }
    }
     
    const handleDelete = async (id)=>{
        // const response = await fetch(`http://localhost:3000/${id}`, {
            try {
                const response = await fetch(`http://localhost:3000/EmailsStore/Backend/DeleteUser/${id}`, {
                    method: 'DELETE'       
                });

                const result = await response.json();

                if(!response.ok){
                    console.log(result.error);
                    setError(result.error);
                }
                else{
                    setError("User Deleted  Succesfully");
                    console.log(`User ${id} Deleted  Succesfully`);
                    
                    setTimeout(()=>{
                        setError("");
                        getData();
                    }, 2000);
                }
            } catch (error) {
                console.error('Error:', error);
                setError('Failed to fetch data from the server or Backend Server is down');
            }
    }

    useEffect(()=>{
        getData();
    }, []);

    // console.log(data);

  return (
    <div className="my-2">

        {error && <div className="alert alert-danger">
					This is an error:- {error}
	            </div>} 
      
        <h2>  All Data      </h2>

      <div  key={"top"} className="row">

        {data?.map((ele)=>{
            return <div key={ele._id} className="col-3">
                
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">
                                    {ele.name}
                                </h5>
                                
                                <h6 className="card-subtitle mb-2 text-muted">
                                    {ele.email}
                                </h6>
                                
                                <p className="card-text">
                                    {ele.age}
                                </p>

                                <Link to={`/EmailsStore/UpdateUser/${ele._id}`} className="card-link" >
                                    Edit
                                </Link>

                                <a href="#" className="card-link" onClick={()=>handleDelete(ele._id)}>
                                    Delete
                                </a>
                            </div>
                        </div>
        
                    </div>
        })}
        
      </div>

    </div>
  );

  
}

export default Read;
