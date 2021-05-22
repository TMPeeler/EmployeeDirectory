import React from "react";


function SearchBar(props) {
    return (
        <div>
            <input onChange={props.handleInputChange} name="search" placeholder="please search for an employee by First name" value={props.search}/>
            <button type="submit">Submit</button>
        </div>
    );
}
  
  export default SearchBar;