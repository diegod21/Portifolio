import Icons from "../Icons/Icons";

function CarsDealerItem() {
  const Paragraph = `  Um projeto desenvolvido com React.js, Next.js e Tailwind CSS, integrado
        a uma API externa para buscas. Permite a seleção de uma marca e ano para
        filtrar e exibir todos os veículos fabricados por essa marca no ano
        escolhido.`;
  return (
    <div
      style={{
        backgroundColor: "#fff",
        textAlign: "center",
        margin: "auto",
        border: "0.5px solid #000",
        borderRadius: "5px",
        width: "60%",
        padding:"5px"
      }}
    >
      <p>{Paragraph}</p>
      <Icons useHtml useCss useJs useReact useNext useTailwind size={"32px"} />
    </div>
  );
}
export default CarsDealerItem;
