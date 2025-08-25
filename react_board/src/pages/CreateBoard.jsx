import Header from "../layouts/Header";
import BoardForm from "../components/BoardForm";

const CreateBoard = () =>{
    return<div className="CreateBoard">
        <Header viewTab={"true"}/>
        <BoardForm />
    </div>
}

export default CreateBoard;