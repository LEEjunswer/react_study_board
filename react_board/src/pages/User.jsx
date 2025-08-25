import Header from "../layouts/Header";
import UserForm from "../components/UserForm";

const User = ()=>{
    return<div className="USER">
        <Header viewTab={"false"} />
        <UserForm />
    </div>
};


export default User;