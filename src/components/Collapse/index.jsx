import { useState } from "react";
import ARROW from "../../assets/images/arrow.png"
import "./collapse.css"

function Collapse ({ title, content }) {
    const [active, setActive] = useState(false);
    const toggle = () => setActive(!active);
    return (
        <div className={`collapse ${active && 'active'}`}>
            <div className='collapse_title'>
                {title}
                <img className="collapse_icon" src={ARROW} alt="" onClick={toggle} />
            </div>
            {active && <div className="collapse_content">{content}</div>}
        </div>
    );
}

export default Collapse;