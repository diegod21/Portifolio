import Icons from "../Icons/Icons";
import React from "react";

const WebRideParagraph = ` O WebRide é uma plataforma de rastreamento GPS
          que oferece recursos avançados para a prática de atividades ao ar
          livre. Com ele, você pode registrar e analisar detalhadamente seus
          trajetos ou treinos, obtendo dados precisos sobre velocidade,
          distância e outros parâmetros relevantes. A plataforma permite
          salvar seus dados.`;

const WebRideItem: React.FC = () =>{ 
  return (
    <div
      style={{
        backgroundColor: "#fff",
        textAlign: "center",
        margin: "auto",
        border: "0.5px solid #000",
        borderRadius: "5px",
        width: "60%",
        marginBottom: "8%",
        padding:"5px"
      }}
    >
      <p>{WebRideParagraph}</p>
      <Icons useHtml useCss useJs size={"32px"} />
    </div>
  );
}
export default WebRideItem;
