import Header from "../layouts/Header";
import BoardList from "../components/BoardList";

const Home = ()=>{
    return<div>
        <Header viewTab={"true"}/>
        <BoardList multi={true}/>
    </div>;
}

export default  Home;