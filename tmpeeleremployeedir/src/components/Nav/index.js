import React from "react";

function Nav(props) {
    return (
        <div>
            <nav className="navbar justify-content-center">
                <button onClick={props.sortEmployee}>Name</button>
                <button>Email</button>
                <button>Phone Number</button>
                <button>Years of Experience</button>
            </nav>
        </div>
    );
}
  
  export default Nav;