import './MoveButton.css';

const MoveButton= ({method,value,type,text}) =>{

    return <button   value={value} className={`move_button button_${method}`}>{text}</button>
}

export default MoveButton;