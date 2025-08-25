import apiClient from "../../utils/axois";

const deleteBoard =  (data)=>{
    return apiClient.post("/board/deleteBoard",{data});
}

export default deleteBoard;