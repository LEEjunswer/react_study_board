import {useParams} from "react-router-dom";
import {useState} from "react";
import Header from "../layouts/Header";
import BoardList from "../components/BoardList";
import boardType from "../utils/boardType";
const Board = ()=>{
     const {id} = useParams();
     console.log("params =", id);
     let changedParam =    String(id);
     const [boardList ,setBoardList] = useState([]);
     let title=  boardType(changedParam);
     return<div className="Board">
          <Header viewTab={"true"}/>
          <BoardList multi={false} type={title}/>
     </div>
}

export default  Board;