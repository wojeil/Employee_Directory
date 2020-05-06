import React from "react";
import API from "../utils/API"

class Main extends React.Component {

    state ={
        employees:[]
    }

    componentDidMount(){
        API.getEmployees()
        .then(data =>{
            console.log(data.data.results);
            this.setState({
                employees:data.data.results
            })
        })
        .catch(err =>console.log (err));
    }



    render() {

        return (
            <>
            <h1>Main Componenet</h1>
            <ul>
                {this.state.employees.map((employee, i )=> (
                 <li 
                 key ={i}>{employee.name.first}</li>   
                ))}
            </ul>
            </>
        )



    }



};

export default Main;