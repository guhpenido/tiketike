import React from "react";
import "./detalhecss.css";

function Detalhe({ produto, fecharDetalhe }) {
  return (
    <>
    {produto && (
      <div className="detalhe-container">
        <div className="detalhe-main">
          <div className="close" onClick={fecharDetalhe}>
            <img
              src="https://cdn.discordapp.com/attachments/944149488640094228/1167286236843614238/x-transparent-free-png.png?ex=654d9305&is=653b1e05&hm=bf6946215e3b41fd03a78abcbf1eb15e518aeb54b7e94be6df6116fafe41ccc7&"
              alt=""
            />
          </div>
          <div className="imagem-detalhe">
            <img src={produto.banner} alt="" />
          </div>
          <div className="titulo">
            <h1>{produto.nome}</h1>
          </div>
          <div className="data">
            <h4>{produto.data} | {produto.horario}</h4>
          </div>
          <div className="descricao">
            <p>{produto.descricao}</p>
          </div>
          <div className="local">
            <h2>{produto.local}</h2>
          </div>
          <div className="valor">
            <h3>R$ {produto.valor}</h3>
          </div>
        </div>
      </div>
      )}
    </>
  );
}

export default Detalhe;
