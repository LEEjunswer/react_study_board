import './Header.css';
import ThemeProvider, { useTheme } from "../providers/ThemeProvider";
import MoveButton from '../components/MoveButton';
const Header = ()=>{
    const { theme, toggle } = useTheme();
    let isLoggedIn = false;
    return <div className="Header">
        <h3>React-Board</h3>
        <div className="login_section">
            {isLoggedIn ? (
                <>
                <p> 땡땡 </p>
               <MoveButton method={"myPage"} text={"마이페이지"} /> <MoveButton method={"logout"} text={"로그아웃"} />
                </>
                ) : (
                <>
                <section className="id_section">
                    <label className="id">아이디 : </label><input/>
                </section>

                <section className="password_section">
                <label className="id">패스워드 : </label><input type="password"/>
                </section>
                <section className="button_section">
                <MoveButton method={"login"} value={""} text={"로그인"}/> <MoveButton method={"create_user"} text={"회원가입"} />
                </section>
                </>
            )}
        </div>
        <div className="mode_section">
        <button onClick={toggle} aria-pressed={theme === "dark"}>
                {theme === "dark" ? "🌞 라이트 모드" : "🌙 다크 모드"}</button>
        </div>
        <div className="tab_section">
            <div className="tab_button tab_button_1">자유</div>
            <div className="tab_button tab_button_2">질문</div>
            <div className="tab_button tab_button_3">Q&A</div>
            <div className="tab_button tab_button_4">게임</div>
            <div className="tab_button tab_button_5">아이돌</div>
        </div>

    </div>;
}


export default Header;
