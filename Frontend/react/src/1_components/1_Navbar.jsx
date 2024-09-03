import { useState } from "react";
import { Link} from "react-router-dom";

/*
	i have used Link instead of navigate to,

	when ever user clicks on link i change it's URL to that page 
	where using that URL, user will be navigated to that component 
	in App.jsx file and it will load it's page
*/

const NavBar = () => {
  return (
    <>
    {/* brand name */}
	<h1 >
        Emails Store
    </h1>

	{/* navigation bar */}
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          
		{/* clickable links */}
          <div className="navbar-collapse" id="navbarSupportedContent">
            
			<ul className="navbar-nav me-auto mb-2 mb-lg-0">  
				<li className="nav-item">
					<Link to="/" className="nav-link active" aria-current="page">
						Create Post
					</Link>	
				</li>

				<li className="nav-item">
					<Link to="/EmailsStore/DisplayAll" className="nav-link">
						All post
					</Link>
				</li>
            </ul>

            {/* <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              ></input>

              <button className="btn btn-outline-success" type="submit">
                Search
              </button>

            </form> */}
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
