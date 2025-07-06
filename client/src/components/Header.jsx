import Button from "./Button";

function Header() {
    return(
    <header className="header">
        <nav className="nav">
         <Button name="Home" url="/"/>
         <Button name="Articles"/>
         <Button name="About"/>
        </nav>
    </header> 
    )
}

export default Header;