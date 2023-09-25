import axios from "axios";

// location
export const postLocation = async(data) =>{
    var config = {
        method: "post",
        url: `http://localhost:5000/api/location`,
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