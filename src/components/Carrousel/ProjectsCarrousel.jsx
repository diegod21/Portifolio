import { Modal } from "bootstrap";
import WebRideItem from "../CarrousselItens/WebRideItem";
import CarsDealerItem from "../CarrousselItens/CarsDealerItem"; 
import GicwebItem from "../CarrousselItens/GicwebItem"; 
import WebSalesItem from "../CarrousselItens/WebSalesItem";

function ProjectsCarrousel() {
  const handleOpenModal = (id) => {
    const modal = new Modal(document.getElementById(id));
    modal.show();
  };
  return (
    <div className="carousel slide" id="meuCarousel">
      <div className="carousel-inner">
        <div
          className="carousel-item"
          onClick={() => handleOpenModal("modalWebRide")}
        >
          <div style={{ paddingTop: "10%" }}>
            <WebRideItem handleOpenModal={handleOpenModal} />
          </div>
        </div>
        <div
          className="carousel-item"
          onClick={() => handleOpenModal("modalCarsDealerApp")}
          style={{ paddingTop: "10%" }}
        >
         <CarsDealerItem handleOpenModal={handleOpenModal} />
        </div>
        <div
          className="carousel-item active"
          style={{ paddingTop: "10%" }}
          onClick={() => handleOpenModal("modalGicWeb")}
        >
         <GicwebItem handleOpenModal={handleOpenModal} />
        </div>
        <div
          className="carousel-item"
          style={{ paddingTop: "10%" }}
          onClick={() => handleOpenModal("modalWebSales")}
        >
         <WebSalesItem handleOpenModal={handleOpenModal} />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        data-bs-target="#meuCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon"></span>
      </button>
      <button
        className="carousel-control-next"
        data-bs-target="#meuCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon"></span>
      </button>
    </div>
  );
}

export default ProjectsCarrousel;
