import React from "react";


function SearchBar({handleInputChange, handleSubmit }) {
    return (
        <div>
            <input onChange={handleInputChange} name="search" placeholder="please search for an employee by First name"/>
            <button type="submit" onClick={handleSubmit}>Submit</button>
        </div>
    );
}
  
  export default SearchBar;