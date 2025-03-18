import { useEffect, useState } from 'react';
import Banner from "../../components/banner/index"
import IMG_BANNER from "../../assets/images/banner2.jpg"
import Collapse from '../../components/Collapse/index';
import "./apropos.css"
import Data from "../../datas/about.json"

function Apropos () {

    const [data, setData] = useState(null)
    useEffect(() => {
        document.title = "A propos"
        setData(Data)
    }, []);

    return (
        <>
            <Banner img={IMG_BANNER} content="" />
            <div className='corps'>
                {
                    data && data.map((item, index) => (
                        <Collapse key={index} title={item.title} content={item.content} />
                    ))
                }

            </div>

        </>
    );
}

export default Apropos;