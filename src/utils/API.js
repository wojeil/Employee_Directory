import axios from "axios";



exports default {

    getEmployees(){
        return axios.get("https://randomuser.me/api/?results=40")
    }
}