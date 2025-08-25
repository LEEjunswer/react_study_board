import apiClient from "../../utils/axois";

const refresh = ()=>{
    return apiClient.get('/auth/refresh');
}

export default refresh;