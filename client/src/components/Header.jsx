import Button from "./Button";

function Header() {
    return(
    <header className="header">
        <div className="nav">
         <Button name="Home"/>
         <Button name="Articles"/>
         <Button name="About"/>
        </div>
    </header> 
    )
}

export default Header;