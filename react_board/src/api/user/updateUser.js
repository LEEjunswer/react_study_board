import apiClient from "../../utils/axois";

const updateUser =  (data)=>{
   return apiClient.post('/user/updateUser',data);
}
export default updateUser;