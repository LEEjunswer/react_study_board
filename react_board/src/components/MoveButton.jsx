import './MoveButton.css';
import {useNavigate} from "react-router-dom";

const MoveButton= ({method,value,type,text,onClick}) =>{
    const navi = useNavigate();
    const onClickHandler = (e)=> {
        console.log('버튼클릭');
        if(typeof onClick==='function'){
            return onClick(e);
        }
        if (method === "searching_board") {
            console.log("검색햇음");
        } else if (method === "create_board") {
            console.log("글쓰기");
            /*회원가입 유무 확인하고 글쓰게 하기*/
            navi('/createBoard');
        }else if (method === "create_user"){
            navi('/createUser');
        }

    }
    return <button onClick={onClickHandler} type={type} value={value} className={`move_button button_${method}`}>{text}</button>
}

export default MoveButton;