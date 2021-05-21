import React ,{useState} from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Card from "./components/Card";
import SearchBar from "./components/SearchBar";




function App() {
const [state, setState] = useState([]);
const [employeeState, setEmployeeState] = useState([]);

const handleInputChange = event => {
// this is gonna handle keystrokes


}

const handleSubmit = event => {

}






return(
    <SearchBar handleInputChange={handleInputChange} handleSubmit={handleSubmit}/> 
)

}