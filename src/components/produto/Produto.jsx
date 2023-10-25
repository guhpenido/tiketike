import React from "react";
import carrinho from "./cart-shopping-solid.svg";
import "../home/homecss.css";

function ProdutoDisplay({
  id,
  nome,
  local,
  banner,
  descricao,
  data,
  horario,
  tipo,
  valor,
}) {
    const divStyle = {
        backgroundImage: `url(${banner})`,  
      };
  return (
    <>
      <div className="card">
        <div className="img" style={divStyle}>
          <div className="save">
            <img className="carrinho" src={carrinho} alt="" />
          </div>
        </div>

        <div className="text">
          <p className="h3"> {nome} </p>
          <p className="h1"> {local} </p>
          <p className="p">
            {" "}
            {data} | {horario}{" "}
          </p>
        </div>
      </div>
    </>
  );
}

export default ProdutoDisplay;
