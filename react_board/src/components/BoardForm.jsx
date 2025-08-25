import './BoardForm.css';
import  { boardTypeList }  from "../utils/boardType";
import MoveButton from "./MoveButton";
const BoardForm =  ()=>{
    let typeList = [...boardTypeList];


    return<div className="BoardForm">
        <section className="title_section">
                <label>제목 :</label><input type="text" placeholder="제목을 입력하세요"/>
         </section>
        <section className="type_section">
           <label>타입 :</label>
            <select id="board_type">
                {typeList.map((type )=>(
                    <option value={type.type}>{type.typeName}</option>
                ))}
            </select>
        </section>
        <section className="content_section">
            <textarea className="content_text" placeholder="내용을 입력하세요.">

            </textarea>
        </section>
        <section className="button_section">
            <MoveButton method={"write_board"} text={"작성 완료"}/>
            <MoveButton method={"write_cancel"} text={"작성 취소"}/>
        </section>
    </div>
}

export default BoardForm;