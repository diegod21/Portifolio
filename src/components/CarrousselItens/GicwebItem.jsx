import Icons from "../Icons/Icons";

function ModalGicWeb() {
  const Paragraph = 
  `GICWEB - Participei de um projeto no qual fui responsável pela resolução de bugs, criação do layout frontend, incluindo a implementação de CRUD completo, desde as rotas até a integração com o banco de dados. Além disso, desenvolvi APIs no backend para uso externo e realizei integrações entre o site e os aplicativos móveis do projeto, um voltado para os moradores do condomínio e outro para os motoristas. As tecnologias utilizadas incluíram React, Node.js, Express, MySQL, React Native e JWT, garantindo uma solução robusta e eficiente para as diversas necessidades do projeto.`;
  return (
    <div
      style={{
        backgroundColor: "#fff",
        margin: "auto",
        border: "0.5px solid #000",
        borderRadius: "5px",
        width: "60%",
        marginBottom: "8%",
      }}
    >
      <p>{Paragraph}</p>
      <Icons useHtml useCss useJs useReact useNext useNode useRedux  textAlign={"center"} size={"32px"} />
    </div>
  );
}
export default ModalGicWeb;
