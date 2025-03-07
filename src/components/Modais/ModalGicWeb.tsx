import React from "react";

interface ModalGicWebProps {
  handleOpenModal: (value: string) => void;
}

const ModalGicWeb: React.FC<ModalGicWebProps> = ({ handleOpenModal })=> {
    return (
      <div
        className="modal fade"
        id="modalGicWeb"
        tabIndex={-1}
        aria-labelledby="modalGicWeb"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="modalGicWeb">
                Detalhes do Projeto - <a href="https://app.gicweb.com.br" target="_blank">GICWEB</a>
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body" style={{ height: "450px" }}>
              <div className="carousel slide" id="gicwebCarrosel">
                <div className="carousel-inner">
                  <div
                    className="carousel-item active"
                    onClick={() => handleOpenModal("Conteúdo do projeto WebRide")}
                  >
                    <div className="f6"></div>
                  </div>
                  <div className="carousel-item">
                    <div className="f7"></div>
                  </div>
                  <div className="carousel-item">
                    <div className="f8"></div>
                  </div>
                  <div className="carousel-item">
                    <div className="f9"></div>
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  data-bs-target="#gicwebCarrosel"
                  data-bs-slide="prev"
                >
                  <span className="carousel-control-prev-icon"></span>
                </button>
                <button
                  className="carousel-control-next"
                  data-bs-target="#gicwebCarrosel"
                  data-bs-slide="next"
                >
                  <span className="carousel-control-next-icon"></span>
                </button>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  export default ModalGicWeb;
  