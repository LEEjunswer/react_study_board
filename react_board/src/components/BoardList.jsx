import './BoardList.css';

const BoardList = ()=>{
    return <div className="BoardList">
        <section className="free_board_section">
            <div className="free_board_item">자유1</div>
            <div className="free_board_item">자유2</div>
            <div className="free_board_item">자유3</div>
        </section>
        <section className="qna_board_section">
            <div className="free_board_item">질문1</div>
            <div className="free_board_item">질문2</div>
            <div className="free_board_item">질문3</div>
        </section>
        <section className="ani_board_section">
            <div className="free_board_item">애니1</div>
            <div className="free_board_item">애니2</div>
            <div className="free_board_item">애니3</div>
        </section>
        <section className="game_board_section">
            <div className="free_board_item">게임1</div>
            <div className="free_board_item">게임2</div>
            <div className="free_board_item">게임3</div>
        </section>
        <section className="idol_board_section">
            <div className="free_board_item">아이돌1</div>
            <div className="free_board_item">아이돌2</div>
            <div className="free_board_item">아이돌3</div>
        </section>
    </div>
}

export default BoardList;

