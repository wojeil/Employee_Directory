import React from "react";
import API from "../utils/API"

class Main extends React.Component {

    state = {
        search:"",
        employees: []
        

    }

    componentDidMount() {
        API.getEmployees()
            .then(data => {
                console.log(data.data.results);
                this.setState({
                    employees: data.data.results
                })
            })
            .catch(err => console.log(err));
    }

    filtering (e){
        this.setState({search: e.target.value.substr(0,20)});
    }


    render() {
        let filteredEmployees = this.state.employees.filter(
            (employee) =>{
                // return employee.indexOf(this.state.search) !== -1;
                return employee.name.first.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
            }

        );
         
        return (
            <>
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <h1 className="display-4">Employee Directory</h1>
                        <p className="lead">Find your Employees</p>
                        <input type="text" className="text-center" placeholder="Search by Name" 
                        value= {this.state.search} onChange= {this.filtering.bind(this)}/>
                    </div>

                </div>

                <table className="table table-dark">
                    <thead>
                        <tr>
                            <th scope="col"></th>
                            <th scope="col">Image</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone Number</th>
                            <th scope="col">Age</th>
                        </tr>
                    </thead>
                    <tbody>
                        { filteredEmployees.map((employee, i) => (
                            <tr key={i}>
                                <th scope="row">{i + 1}</th>
                                <td><img alt={employee.name.first} src={employee.picture.medium} /></td>
                                <td>{employee.name.first}</td>
                                <td>{employee.name.last}</td>
                                <td>{employee.email}</td>
                                <td>{employee.cell}</td>
                                <td>{employee.dob.age}</td>
                                
                            </tr>
                        ))}

                    </tbody>

                </table>
            </>
        )



    }



};

export default Main;