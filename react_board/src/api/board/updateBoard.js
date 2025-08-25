import apiClient from "../../utils/axois";

const updateBoard = (data)=>{
    return apiClient.post("/board/updateBoard",data);
}
export default updateBoard;