import "./header.css"
import logo from "../../assets/images/logo.jpg"
function Header(){
    return (
        <header>
            <img src={logo} alt="" />
            <nav>
            <ul><a href="">Acceuil</a></ul>
            <ul><a href="">A propos</a></ul>
            </nav>
            </header>
    );
}
export default Header;