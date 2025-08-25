import './UserForm.css';
import MoveButton from "./MoveButton";
import {useEffect, useState} from "react";
import axois from "../utils/axois";
const UserForm = ({initData}) =>{
    const [input,setInput] = useState({
       id :"",
       password :"",
       passwordValid  :"",
       email : "",
       nick : "",

    });
    const [isEdit,setIsEdit] = useState(false);
    useEffect(() => {
        if(initData){
        setInput(prev=>({...prev, ...initData }));
        setIsEdit(true);
        }
    }, [initData]);

    const handlerChangeValue = (e) => {
        const { name, value } = e.target;
        setInput(prev => ({
            ...prev,
            [name]: value,
        }));
    };


    const emailVaildtor = ` /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/`;
    const [validId,setValidId] = useState(false);
    const [validNick, setValidNick] = useState(false);
    const validIdHandler = (e)=>{

    };

    const validNickHandler = (e)=>{

    };


    const createHandler = ()=>{
        const id = input.id?.trim() ?? "";
        const nick = input.nick?.trim() ?? "";
        const pw = input.password ?? "";
        const pwv = input.passwordValid ?? "";
        const email = (input.email ?? "").trim();

        console.log("id =",id , "nick = ", nick);
        if(id.trim().length < 2 || /\s/.test(id)){
            return alert("아이디에 공백이 포함되거나 2글자 이하는 사용이 불가능합니다.");
        }
        if(nick.trim().length < 2 ||  /\s/.test(nick)){
            return alert("닉네임에 공백이 포함되거나 2글자 이하는 사용이 불가능합니다.");
        }
        if(validId === false){
            return  alert("아이디 중복체크를 해주세요");
        }
        if(validNick === false){
            return alert("닉네임 중복체크를 해주세요");
        }
        if(pw !== pwv){
            return alert("비밀번호와 비밀번호 확인이 다릅니다.");
        }
        if(!emailVaildtor.match(email)){
            return alert("이메일이 옳바르지 않습니다.");
        }
        /*여기에서 비동기 처히 하기*/
    }
    return <div className="UserForm">
        <h2>회원가입</h2>

        <table className="form_table">
            <tbody>
            <tr>
                <td className="label_cell">아이디 :</td>
                <td>
                    <input name="id" value={input.id} onChange={handlerChangeValue} placeholder="아이디를 입력하세요"/>
                </td>
                <td>
                    <MoveButton text="중복확인" method="valid_id"/>
                </td>
            </tr>
            <tr>
                <td className="label_cell">비밀번호 :</td>
                <td colSpan="2">
                    <input name="password" value={input.password} onChange={handlerChangeValue} placeholder="비밀번호를 입력하세요"/>
                </td>
            </tr>
            <tr>
                <td className="label_cell">비밀번호 확인 :</td>
                <td colSpan="2">
                    <input name="passwordValid" value={input.passwordValid} onChange={handlerChangeValue} placeholder="비밀번호확인을 입력하세요"/>
                </td>
            </tr>
            <tr>
                <td className="label_cell">이메일 :</td>
                <td colSpan='2'>
                    <input name="email" value={input.email} onChange={handlerChangeValue} type="email"/>
                </td>
            </tr>
            <tr>
                <td className="label_cell">닉네임 :</td>
            <td className="table_input">
                <input name="nick" value={input.nick} onChange={handlerChangeValue} type="text" placeholder="닉네임을 입력해주세요."/>
            </td>
            <td className="label_button">
                <MoveButton method="valid_nick" text="중복확인"/>
            </td>
            </tr>
            </tbody>
        </table>
        <section className="user_form_buttons">
            <MoveButton type={"button"} onClick={createHandler} method="created_user" text="회원가입"/> <MoveButton method="canceled_user" text="가입취소"/>
        </section>
    </div>
};
export default UserForm;