import { useState } from 'react'

// Components
import Modal from "../modal/modal";

// Images
import cabin from '../../assets/img/portfolio/cabin.png'
import cake from '../../assets/img/portfolio/cake.png'
import circus from '../../assets/img/portfolio/circus.png'
import game from '../../assets/img/portfolio/game.png'
import safe from '../../assets/img/portfolio/safe.png'
import submarine from '../../assets/img/portfolio/submarine.png'

const images = [
  { src: cabin, name: "cabin" },
  { src: cake, name: "cake" },
  { src: circus, name: "circus" },
  { src: game, name: "game" },
  { src: safe, name: "safe" },
  { src: submarine, name: "submarine" }
]

const Portfolio = () => {

  const [targetModal, setTargetModal] = useState({
    show: false,
    currentIndex: null,
    close: false
  });

  const onShowModal = (e, index) => {
    setTargetModal({show: true, currentIndex: index} )
  }

  const onDismiss = () => {
    setTargetModal({close: true})
  }

  const portfolioItems = images.map((img, index) => {

    const openModal = targetModal.currentIndex === index ? <Modal images={img} modalShow={targetModal.show} onDismiss={onDismiss}/> : '';

    return (
      <div className="col-md-6 col-lg-4 mb-5" key={index}>
        <div onClick={(e) => onShowModal(e, index)} className="portfolio-item mx-auto">
          <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
            <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
          </div>
          <img className="img-fluid" src={img.src} alt={img.name} />
        </div>
        { openModal }
      </div>
    );
  })

  return (
    <section className="page-section portfolio" id="portfolio">
      <div className="container">
        <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Portfolio</h2>
        <div className="divider-custom">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
          <div className="divider-custom-line"></div>
        </div>
        <div className="row justify-content-center">
          { portfolioItems }
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
