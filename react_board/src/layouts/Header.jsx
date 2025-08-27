import './Header.css';
import { useTheme } from "../providers/ThemeProvider";
import MoveButton from '../components/MoveButton';
import {useNavigate} from "react-router-dom";
import authApi from "../api/auth";
import {useState} from "react";
const Header = ({viewTab})=>{
    const nav =useNavigate();
    const { theme, toggle } = useTheme();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const handlerMove = (e)=>{
            nav(`/type/${e}`);
    }
    const [input,setInput] = useState({
       userId: "",
       password: "",
    });
    const handlerHome  = ()=>{
      nav('/');
    };
    const loginHandler = async (e)=>{
        console.log("진입");
     try {
         let res = await authApi.login({
             id: input.userId,
             password: input.password
         });
         if (res.status === 201) {
             setIsLoggedIn(true);
             return alert('회원가입 정상적으로 성공했습니다');
         }else if(res.status === 500){
             return alert('서버 오류 잠시 후에 다시 이용해주세요.');

         }
     }catch (error){
         alert('오류 원인 = ',error);
     }
    };
    return <div className="Header">
        <div className="head">
            <div className="mode_section">
                <button onClick={toggle} aria-pressed={theme === "dark"}>
                    {theme === "dark" ? "🌞 라이트 모드" : "🌙 다크 모드"}</button>
            </div>
            <div className="handler_home">
            <h3 onClick={() => {
                handlerHome()
            }}>React-Board</h3>
            </div>
            <div className="login_section">
                {isLoggedIn ? (
                    <>
                        <p> 땡땡 </p>
                        <MoveButton method={"myPage"} text={"마이페이지"}/> <MoveButton method={"logout"} text={"로그아웃"}/>
                    </>
                ) : (
                    <>
                        <section className="id_section">
                            <label className="id">아이디 : </label><input/>
                        </section>
                        <section className="pw_section">
                            <label className="pw">패스워드 : </label><input type='password'/>
                        </section>
                        <section className="button_section">
                            <MoveButton method={"login"} onClick={()=>{loginHandler()}} text={"로그인"}/> <MoveButton method={"create_user"}
                                                                                               text={"회원가입"}/>
                        </section>
                    </>
                )}
            </div>
        </div>
        <div className={`tab_section_${viewTab}`}>
            <div onClick={() => {
                handlerMove("01")
            }} className="tab_button tab_button_1">자유
            </div>
            <div onClick={() => {
                handlerMove("02")}} className="tab_button tab_button_2">질문</div>
            <div onClick={()=>{handlerMove("03")}} className="tab_button tab_button_3">Q&A</div>
            <div onClick={()=>{handlerMove("04")}} className="tab_button tab_button_4">게임</div>
            <div className="tab_button tab_button_5">아이돌</div>
        </div>

    </div>;
}


export default Header;
