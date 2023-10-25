import React from "react";
import "./homecss.css";
import carrinho from "./cart-shopping-solid.svg";
import productsData from '../../assets/eventos.json';
import ProdutoDisplay from "../produto/Produto";

function Home() {
  return (
    <>
      <div className="home-container">
        <div className="header">
          <div className="home-header">
            <div className="home-header-links"></div>
            <div className="home-header-logo">
              <img
                src="https://cdn.discordapp.com/attachments/944149488640094228/1166569113691361362/LOGO.png?ex=654af726&is=65388226&hm=9e515b70f3c1d9652b32fac00965a8ec08e3f2e41fada979a794b90ca8539344&"
                alt=""
              />
            </div>
            <div className="home-header-cart">
              <img className="carrinho" src={carrinho} alt="" />
            </div>
          </div>
        </div>
        <div className="home-main">
          <div className="home-main-filtro"></div>
          <div className="filtro"></div>
          <div className="main">
            <div className="home-main-produtos">
              {productsData.eventos.map((product) => (
                <ProdutoDisplay
                  id={product.id}
                  nome={product.nome}
                  local={product.local}
                  logo={product.logo}
                  banner={product.banner}
                  descricao={product.descricao}
                  data={product.data}
                  horario={product.horario}
                  tipo={product.tipo}
                  valor={product.valor}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="home-footer">
          <div className="footer">
            <p>Criado por: Arthur Ribeiro, Enzo Bambirra e Gustavo Penido.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
