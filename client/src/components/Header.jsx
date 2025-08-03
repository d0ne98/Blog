import Button from "./Button";
import { useAuth } from "../AuthContext";

function Header() {
    const { user, logout, isAuthenticated } = useAuth();

    return(
    <header className="header">
        <nav className="nav">
         <div>
                <Button name="Home" url="/"/>
                <Button name="Articles" url="/articles"/>
            </div>
         <div>
                {isAuthenticated ? (
    <>
        <div className="user-welcome">Welcome, {user?.username}</div>
        <Button name="Logout" clickAction={logout}/>
    </>
     ) : (
    <>
        <Button name="Register" url="/register"/>
        <Button name="Login" url="/login"/>
    </>
)}
            </div>
        </nav>
    </header> 
    )
}

export default Header;