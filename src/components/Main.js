import React from "react";
import API from "../utils/API";
import "./Main.css";

class Main extends React.Component {

    state = {
        search: "",
        employees: [],
        sorted: [],
        order: false

    }
    //api call//
    componentDidMount() {
        API.getEmployees()
            .then(data => {
                // console.log(data.data.results);
                this.setState({
                    employees: data.data.results
                })
            })
            .catch(err => console.log(err));
    }
    //filter handler//
    handleFilter(e) {
        this.setState({ search: e.target.value });
    }
    //sorting first name function//
    sortingFirstName(a, b) {
        if (a.name.first < b.name.first) {
            return -1;
        }
        if (a.name.first > b.name.first) {
            return 1;
        }
        return 0;
    }
    //sorting last name function//
    sortingLastName(a, b) {
        if (a.name.last < b.name.last) {
            return -1;
        }
        if (a.name.last > b.name.last) {
            return 1;
        }
        return 0;
    }


    //sorting age function//
    sortingAge(a, b) {
        if (a.dob.age < b.dob.age) {
            return -1;
        }
        if (a.dob.age > b.dob.age) {
            return 1;
        }
        return 0;
    }

    //sorting email function//
    sortingEmail(a,b) {
        if (a.email < b.email) {
            return -1;
        }
        if (a.email > b.email){
            return 1;
        }
        return 0;
    }

    //sorting phone number function//
    sortingphone(a,b) {
        if (a.phone < b.phone) {
            return -1;
        }
        if (a.phone > b.phone){
            return 1;
        }
        return 0;
    } 


    //click to sort through first name//    
    onClickFirst = () => {
        console.log("it works");
        if (this.state.order === false) {
            this.setState({
                sorted: this.state.employees.sort(this.sortingFirstName),
                order: true
            })
        }
        else {
            this.setState({
                sorted: this.state.employees.reverse(),
                order: false
            })

        }
    }
    //click to sort through last name//    
    onClickLast = () => {
        console.log("it works");
        if (this.state.order === false) {
            this.setState({
                sorted: this.state.employees.sort(this.sortingLastName),
                order: true
            })
        }
        else {
            this.setState({
                sorted: this.state.employees.reverse(),
                order: false
            })

        }
    }

    //click to sort through age//    
    onClickAge = () => {
        console.log("it works");
        if (this.state.order === false) {
            this.setState({
                sorted: this.state.employees.sort(this.sortingAge),
                order: true
            })
        }
        else {
            this.setState({
                sorted: this.state.employees.reverse(),
                order: false
            })

        }
    }

    //click to sort through email//
    onClickEmail =() =>{
        console.log("it works email");
        if (this.state.order === false) {
            this.setState({
                sorted: this.state.employees.sort(this.sortingEmail),
                order:true
            })
        }
        else {
            this.setState({
                sorted: this.state.employees.reverse(),
                order: false
            })
        }

    }

    //click to sort through phone number//
    onClickPhone =() => {
        console.log ("it works phone");
        if (this.state.order === false) {
            this.setState({
                sorted:this.state.employees.sort(this.sortingphone),
                order:true
            })
        }
        else {
            this.setState({
                sorted: this.state.employees.reverse(),
                order:false
            })
        }
    }

    render() {
        //placing filter for the items being mapped//
        let filteredEmployees = this.state.employees.filter(
            (employee) => {
                // return employee.indexOf(this.state.search) !== -1;
                return employee.name.first.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
            }

        );
        console.log(filteredEmployees);



        return (
            <>
                <div className="jumbotron jumbotron-fluid" id="jumbo">
                    <div className="container">
                        <h1 className="display-4">Employee Directory</h1>
                        <p className="lead">Find your Employees</p>
                        <input type="text" className="text-center" placeholder="Search by Name"
                            value={this.state.search} onChange={this.handleFilter.bind(this)} />
                    </div>

                </div>

                <table className="table table-dark">
                    <thead>
                        <tr>
                            <th scope="col"></th>
                            <th scope="col">Image</th>
                            <th scope="col" onClick={this.onClickFirst}>First <i className="fas fa-arrow-up"></i><i className="fas fa-arrow-down"></i></th>
                            <th scope="col" onClick={this.onClickLast}>Last <i className="fas fa-arrow-up"></i><i className="fas fa-arrow-down"></i></th>
                            <th scope="col" onClick={this.onClickEmail}>Email <i className="fas fa-arrow-up"></i><i className="fas fa-arrow-down"></i></th>
                            <th scope="col">Phone Number</th>
                            <th scope="col" onClick={this.onClickAge}>Age  <i className="fas fa-arrow-up"></i><i className="fas fa-arrow-down"></i></th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredEmployees.map((employee, i) => (
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