import { useEffect, useState } from 'react';
import Banner from "../../components/banner/index"
import Card from "../../components/Card/index"
import "./home.css"
import BANNER from "../../assets/images/source1.svg"
import DataJson from "../../datas/logements.json"
function Home () {

    const [data, setData] = useState(null)

    useEffect(() => {
        document.title = "Bienvenue à notre site immobilier"
        setData(DataJson)
    }, []);

    return (
        <>
            <Banner img={BANNER} content="Chez moi, pas chez vous"/>

            <div className='main-content'>
                {
                    data && data.map((item, index) => (
                        <Card key={index} title={item.title} image={item.cover} id={item.id}/>
                    ))
                }
            </div>

        </>
    );
}

export default Home;