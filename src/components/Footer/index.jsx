import './footer.css';
import logo from "../../assets/images/logo.jpg"

function Footer(){
    return (
        <footer>
            <img src={logo} alt="" />
            &copy; 2024 My Reacr App. All rights reserved
        </footer>
    );
}
export default Footer;