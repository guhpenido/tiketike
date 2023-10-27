// Carrinho.js
import React from "react";
import "./carrinhocss.css";

function Carrinho({ carrinhoItems, removerItemDoCarrinho }) {
  const calcularValorTotal = () => {
    let total = 0;
    for (const produto of carrinhoItems) {
      total += produto.valor;
    }
    return total;
  };
  return (
    <div className="carrinho-container">
      <h2>Seu Carrinho de Compras</h2>
      <ul>
        {carrinhoItems.map((item, index) => (
          <li key={item.id}>
            <div className="item-carrinho">
              <div className="fechar" onClick={() => removerItemDoCarrinho(index)}>
                <img
                  src="https://cdn.discordapp.com/attachments/944149488640094228/1167286236843614238/x-transparent-free-png.png?ex=654d9305&is=653b1e05&hm=bf6946215e3b41fd03a78abcbf1eb15e518aeb54b7e94be6df6116fafe41ccc7&"
                  alt=""
                />
              </div>
              <div className="imagem">
                <img src={item.banner} alt="" />
              </div>
              <div className="texto">
                <h1>{item.nome}</h1>
              </div>
              <div className="valor">
                <h2>R$ {item.valor}</h2>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className="carrinho-total">
        <h1>
          Total: <span>R$ {calcularValorTotal()}</span>
        </h1>
      </div>
    </div>
  );
}

export default Carrinho;
