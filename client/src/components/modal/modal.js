import React from 'react'
import ReactDOM from 'react-dom'


const Modal = ({modalShow, onDismiss, images}) => {
  const styles = {display: modalShow ? 'block' : 'none'}

  return ReactDOM.createPortal(
    <React.Fragment>
      <div className={`portfolio-modal modal fade ${modalShow ? 'show' : ''}`} style={styles} onClick={(e) => e.stopPropagation()} >
        <div className="modal-dialog modal-xl modal-dialog-centered">
          <div className="modal-content">
            <button className="close" type="button" onClick={onDismiss}>
              <span><i className="fas fa-times"></i></span>
            </button>
            <div className="modal-body text-center">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-8">
                    <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">Log Cabin</h2>
                    <div className="divider-custom">
                      <div className="divider-custom-line"></div>
                      <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                      <div className="divider-custom-line"></div>
                    </div>
                    <img className="img-fluid rounded mb-5" src={images.src} alt={images.name} />
                    <p className="mb-5 text-uppercase">{images.name}</p>
                    <button className="btn btn-primary" onClick={onDismiss}>
                      <i className="fas fa-times fa-fw"></i>
                      Close Window
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {modalShow ? <div className="modal-backdrop fade show"></div> : ''}
    </React.Fragment>,
    document.querySelector('#modals')
  );
};

export default Modal;
