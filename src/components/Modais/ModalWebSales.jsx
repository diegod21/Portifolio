function modalWebSales({ handleOpenModal }) {
    return (
      <div
        className="modal fade"
        id="modalWebSales"
        tabIndex="-31"
        aria-labelledby="modalWebSales"
        aria-hidden="true"
      >
        <div className="modal-dialog">

        <div className="modal-content" style={{ width: "790px", justifySelf: "center" }}>
            <div className="modal-header">
              <h5 className="modal-title" id="modalWebSales">
                Detalhes do Projeto - <a href="https://github.com/diegod21/SalesWebCsharp" target="_blank">Web Sales</a>
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body" style={{ height: "450px" }}>
              <div className="carousel slide" id="WebSalesCarrosel">
                <div className="carousel-inner">
                  <div
                    className="carousel-item active"
                    onClick={() => handleOpenModal("Conteúdo do projeto WebRide")}
                  >
                    <div className="f10"></div>
                  </div>
                  <div className="carousel-item">
                    <div className="f11"></div>
                  </div>
                  <div className="carousel-item">
                    <div className="f12"></div>
                  </div>
                  <div className="carousel-item">
                    <div className="f13"></div>
                  </div>
                  <div className="carousel-item">
                    <div className="f14"></div>
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  data-bs-target="#WebSalesCarrosel"
                  data-bs-slide="prev"
                >
                  <span className="carousel-control-prev-icon"></span>
                </button>
                <button
                  className="carousel-control-next"
                  data-bs-target="#WebSalesCarrosel"
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
  export default modalWebSales;
  