import axios from "axios";

const url = "https://component-templates.onrender.com"
// const url = "http://localhost:5000"

// location
export const postLocation = async(data) =>{
    var config = {
        method: "post",
        url: `${url}/api/location`,
        headers:{
            "Content-Type" : "Application/json"
        },
        data
    }

    try {
        const res = await axios(config);
        return res
    } catch (error) {
        console.log(error);
        return error
    }
}