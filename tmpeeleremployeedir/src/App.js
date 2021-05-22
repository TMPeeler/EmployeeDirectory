import React, { useEffect, useState } from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Card from "./components/Card";
import SearchBar from "./components/SearchBar";
import API from "./utils/API";




function App() {
    const [search, setSearch] = useState("");
    const [employeeState, setEmployeeState] = useState([]);
    const [newEmployeeState, setNewEmployeeState] = useState([]);

    useEffect(() => {
        API.getEmployees()
            .then(res => {
                console.log(res.data.results)
                setEmployeeState(res.data.results)
                setNewEmployeeState(res.data.results)
            })
            .catch(err => console.log(err));
    }, []);

    const handleInputChange = event => {
        // this is gonna handle keystrokes
        const { value } = event.target;

        const filteredEmployee = employeeState.filter((employee) => {
            console.log(value)
            return employee.name.first
                .toLowerCase()
                .concat(" ", employee.name.last.toLowerCase())
                .includes(value);
        })
        console.log(filteredEmployee);
        setNewEmployeeState(filteredEmployee);
        setSearch(value);
    }


    const sortEmployee = () => {
        const oldSorted = [...newEmployeeState]
        const sortedEmployees = oldSorted.sort((a,b) => 
        a.name.last > b.name.last ? 1 : -1)
        setNewEmployeeState(sortedEmployees)
    }
    // const handleSubmit = event => {
    // const filteredEmployee = employeeState.filter(employee => 
    //     employee.name.first.toLowerCase() === search ||

    // )
    // console.log(filteredEmployee);
    // setEmployeeState(filteredEmployee);
    // }




    return (
        <div>
            <Hero />
            <Nav sortEmployee={sortEmployee}/>
            <SearchBar handleInputChange={handleInputChange} search={search} />


            {newEmployeeState.map(employee =>
                <Card
                    key={employee.name.first + employee.name.last}
                    name={employee.name.first + " " + employee.name.last}
                    email={employee.email}
                    phone={employee.phone}
                    location={employee.location.state}
                    image={employee.picture.medium}
                />

            )}




        </div>
    )

}

export default App;