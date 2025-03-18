import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import logements from "../../datas/logements.json";
import "./detail.css";
import prevArrow from "../../assets/images/arrow-prev.png"; 
import nextArrow from "../../assets/images/arrow-next.png";
import Collapse from "../../components/Collapse"; 
import Tags from "../../components/Tag";
import Rating from "../../components/Rating";



function Detail() {
    let { id } = useParams();
    const logement = logements.find((logement) => logement.id === id);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
      document.title = `Détails | ${logement?.title}`;
    }, [logement]);

    if (!logement) {
      return <p>Logement non trouvé</p>;
    }

    const nextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % logement.pictures.length);
    };

    const prevSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + logement.pictures.length) % logement.pictures.length);
    };

    return (
      <div className="detail-container">
        <div className="slider">
          {logement.pictures.length >1 ?
          (          
          <img src={prevArrow} alt="Précédent" className="arrow prev" onClick={prevSlide} />
          ): null
        }
        <img src={logement.pictures[currentIndex]} alt={logement.title} className="slide-img" />
        {logement.pictures.length >1 ?
          (
          <img src={nextArrow} alt="Suivant" className="arrow next" onClick={nextSlide} />
          ): null
        }
          <p className="image-counter">{currentIndex + 1} / {logement.pictures.length}</p>
        </div>

        <div className="logement-info">
          <div className="logement-header">
            <div>
              <h1 className="logement-title">{logement.title}</h1>
              <p className="logement-location">{logement.location}</p>
              <Tags tags={logement.tags} />

            </div>
            <div className="host-info">
              <p>{logement.host.name}</p>
              <img src={logement.host.picture} alt={logement.host.name} className="host-picture" />
            </div>
          </div>

          <Rating rating={logement.rating} />

        </div>

        <div className="logement-details">
          <Collapse title="Description" content={logement.description} />
          <Collapse 
            title="Équipements" 
            content={logement.equipments.map((item, index) => <li key={index}>{item}</li>)} 
          />
        </div>
      </div>
    );
}

export default Detail;
