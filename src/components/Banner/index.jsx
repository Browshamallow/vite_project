import "./banner.css"
//import BANNER from "../../assets/images/source1.svg"
function Banner({img, content}){
    return (
        <div className="banner">
        <img src={img} alt="" />
        {content ?(
        <h1 className="banner_title">{content}</h1>
    ) : null}
        </div>
    );
}
export default Banner;