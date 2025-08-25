import apiClient from "../../utils/axois";

const getBoardList = (params)=> {
    return apiClient('/board/getBoardList',{params});
}
export default getBoardList;