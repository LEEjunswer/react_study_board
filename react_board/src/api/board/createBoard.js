import apiClient from "../../utils/axois";

const  createBoard = (data) =>{
    return apiClient.post('/board/createBoard',data);
}

export  default createBoard;