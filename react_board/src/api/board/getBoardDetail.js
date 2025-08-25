import apiClient from "../../utils/axois";

const getBoardDetail = (params)=>{
    return apiClient.get("/board/getBoardDetail",{params});
}

export default getBoardDetail;