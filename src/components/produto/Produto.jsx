import React, { useState } from "react";
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
  adicionarAoCarrinho,
  abrirDetalhe
}) {
  const divStyle = {
    backgroundImage: `url(${banner})`,
  };
  const abrirDetalheProduto = () => {
    // Chame a função para abrir o Detalhe e passe as informações do produto
    abrirDetalhe({
      id,
      nome,
      // ... outras informações do produto
    });
  };

  return (
    <>
      <div className="card" onClick={abrirDetalheProduto}>
        <div className="img" style={divStyle}>
          <div className="save">
            <img
              className="carrinho"
              src={carrinho}
              alt=""
              onClick={adicionarAoCarrinho}
            />
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
