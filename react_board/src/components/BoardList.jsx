import './BoardList.css';
import {useEffect,useState} from 'react';
import boardApi from "../api/board";
import MoveButton from "./MoveButton";
const BoardList = ({ multi, type }) => {
    return multi ? <BoardAll /> : <BoardOne type={type} />;
};
export default BoardList;
const BoardAll = () => {
    const [freeBoard, setFreeBoard] = useState([]);
    const [qnaBoard, setQnaBoard] = useState([]);
    const [aniBoard, setAniBoard] = useState([]);
    const [gameBoard, setGameBoard] = useState([]);
    const [idolBoard, setIdolBoard] = useState([]);
    useEffect(() => {

    }, []);

    return (
        <div className="BoardList">
            <BoardListSection  titleClass="free_board_section" items={freeBoard} fallback={["자유1","자유2","자유3"]}/>
            <BoardListSection  titleClass="qna_board_section" items={qnaBoard} fallback={["질문1","질문2","질문3"]}/>
            <BoardListSection  titleClass="ani_board_section"  items={aniBoard}  fallback={["애니1","애니2","애니3"]}/>
            <BoardListSection  titleClass="game_board_section" items={gameBoard} fallback={["게임1","게임2","게임3"]}/>
            <BoardListSection  titleClass="idol_board_section" items={idolBoard} fallback={["아이돌1","아이돌2","아이돌3"]}/>
        </div>
    );
};

const BoardOne = ({ type }) => {
    const [list, setList] = useState([]);

    useEffect(() => {
    }, [type]);

    const classNameMap = {
        free: "free_board_section",
        qna: "qna_board_section",
        ani: "ani_board_section",
        game: "game_board_section",
        idol: "idol_board_section",
    };
    const sectionClass = classNameMap[type] ?? "free_board_section";

    return (
        <div className="BoardOne">
        <TypeSection type={type}/>
        <InsertSection />
            <BoardOneSection
            titleClass={sectionClass}
            items={list}
            fallback={
                type === "free" ? ["자유1","자유2","자유3"] :
                    type === "qna"  ? ["질문1","질문2","질문3"] :
                        type === "ani"  ? ["애니1","애니2","애니3"] :
                            type === "game" ? ["게임1","게임2","게임3"] :
                                ["아이돌1","아이돌2","아이돌3","아이돌4","아이돌5","아이돌6","아이돌7","아이돌8","아이돌9","아이돌10"]
            }
        />
        </div>
    );
};
const TypeSection = ({type})=>{
    return<section className={`type_section type_${type}`}><p>{type}게시판</p></section>
}
const InsertSection = ()=>{
    return <section className="insert_board_section">
        <MoveButton type={"button"} method="create_board" text="글쓰기"/>
    </section>
}

const BoardListSection = ({ titleClass, items, fallback = [] }) => {
    const data = (items && items.length > 0) ? items : fallback;

    return (
        <section className={titleClass}>
            {data.map((text, i) => (
                <div key={i} className="free_board_item">{text}</div>
            ))}
        </section>
    );
};

const BoardOneSection = ({ titleClass, items, fallback = [] }) => {
    const data = (items && items.length > 0) ? items : fallback;

    return (
        <>
        <table className="board_table">
            <thead className="board_thead">
            <tr>
                <th className='th_board_number'>번호</th>
                <th className="th_board_title">제목</th>
                <th className="th_board_writer">작성자</th>
                <th className="th_board_create">작성일</th>
            </tr>
            </thead>
            <tbody className="board_list">
            {data.map((text, i) => (
                <tr key={i}>
                    <td>{i}</td>
                    <td>{text}</td>
                    <td>작성자{i}</td>
                    <td>작성일{i}</td>
                </tr>
            ))}
            </tbody>
        </table>
        <BoardPagingButton totalCount={100} />
       <BoardSearching />
        </>
    );
};
const BoardPagingButton = ({totalCount, currentPage = 1, pageSize = 10, onChangePage,}) => {
    const totalPages = Math.max(1, Math.ceil(totalCount / pageSize));
    const windowSize = 10;
    const windowStart = Math.max(1, currentPage - Math.floor(windowSize / 2));
    const start = Math.min(windowStart, Math.max(1, totalPages - windowSize + 1));
    const end = Math.min(totalPages, start + windowSize - 1);
    if(totalCount < 11){
        return ;
    }
    const buttons = [];
    if (currentPage > 1) {
        buttons.push(
            <MoveButton
                key="prev"
                value={currentPage - 1}
                method="nav"
                text="이전"
                onClick={() => onChangePage?.(currentPage - 1)}
            />
        );
    }
    for (let i = start; i <= end; i++) {
        buttons.push(
            <MoveButton
                key={i}
                value={i}
                method={i === currentPage ? "select" : "not_select"}
                text={i}
                onClick={() => onChangePage?.(i)}
            />
        );
    }
    if (currentPage < totalPages) {
        buttons.push(
            <MoveButton
                key="next"
                value={currentPage + 1}
                method="nav"
                text="다음"
                onClick={() => onChangePage?.(currentPage + 1)}
            />
        );
    }

    return <div className="paging">{buttons}</div>;
};

const BoardSearching = ()=>{
    const [query,setQuery]  = useState();
    const changeQuery= (e)=>{
        setQuery(e.target.value);
    }
    return<section className="searching_section">
        <select className="searcging_quest">
            <option value="title">제목</option>
            <option value="writer">작성자</option>
            <option value="content">내용</option>
        </select>
        <input className="board_query" value={query} onChange={changeQuery} type="text" placeholder="검색어를 입력하세요"/>
        <MoveButton type={"button"} method={"searching_board"} text={"검색"}/>
    </section>
}