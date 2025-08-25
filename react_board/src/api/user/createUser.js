import apiClient from "../../utils/axois";

const createUser = (data) =>{
    return apiClient.post('/user/createUser',data);
}

export default createUser;