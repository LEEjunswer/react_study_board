import apiClient from "../../utils/axois";

const getUser = ()=>{
    return apiClient.get('/user/getUser');
}
export default getUser;