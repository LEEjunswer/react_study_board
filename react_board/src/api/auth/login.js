import apiClient from "../../utils/axois";


const login = (data)=>{
    return apiClient.post(data);
}

export default login;