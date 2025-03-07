import React from "react";
import Icons from "../Icons/Icons";

const WebSalesParagraph = `
Projeto desenvolvido em C# .NET com Entity Framework e MySQL, utilizando migrations para configuração do banco de dados. A interface foi construída com Bootstrap, garantindo um design responsivo e intuitivo.
Funcionalidades principais:
Cadastro de vendedores com todas as informações necessárias e validações aplicadas.
Gestão de departamentos, associando cada vendedor ao seu respectivo setor.
Registro e consulta de vendas, permitindo a visualização das transações de cada vendedor dentro de um período específico.
(Ainda está em desenvolvimento)
`;

const WebSalesItem: React.FC = () => {
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
      <p>{WebSalesParagraph}</p>
      <Icons useHtml useCsharp useBootstrap useEntityFramework useMySQL size={"32px"} />
    </div>
  );
}
export default WebSalesItem;
