import { Link } from "react-router-dom";
import "./card.css"
function Card(props){
    return (
        <div className="card">
        <Link to={`/detail/${props.id}`}>
            <img className="card_img"src={props.image} alt="" />
        <h1 className="card_title">{props.title}</h1>
        </Link>
        </div>
    );
}
export default Card;