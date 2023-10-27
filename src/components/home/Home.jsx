import React, { useState } from "react";
import "./homecss.css";
import carrinho from "./cart-shopping-solid.svg";
import productsData from "../../assets/eventos.json";
import ProdutoDisplay from "../produto/Produto";
import Header from "../header/Header";
import Carrinho from "../carrinho/Carrinho";
import Detalhe from "../detalhes/Detalhe";
import Select from "react-select";

function Home() {
  const [carrinhoItems, setCarrinhoItems] = useState([]);
  const [detalheVisivel, setDetalheVisivel] = useState(false);
  const [produtoSelecionado, setProdutoSelecionado] = useState(null);
  const [categoriaSelecionada, setCategoriaSelecionada] = useState("Todas");
  const [faixaPrecoSelecionada, setFaixaPrecoSelecionada] = useState("Todas");
  const adicionarAoCarrinho = (produto) => {
    setCarrinhoItems([...carrinhoItems, produto]);
    alert("Produto adicionado com sucesso!");
  };
  const removerItemDoCarrinho = (index) => {
    const novosItens = [...carrinhoItems];
    novosItens.splice(index, 1); // Remove o item do array
    setCarrinhoItems(novosItens); // Atualiza o estado do carrinho
  };
  const [carrinhoVisivel, setCarrinhoVisivel] = useState(false);
  const toggleCarrinho = () => {
    setCarrinhoVisivel(!carrinhoVisivel);
  };
  const abrirDetalhe = (produto) => {
    setProdutoSelecionado(produto);
    setDetalheVisivel(true);
  };
  const fecharDetalhe = () => {
    setDetalheVisivel(false);
  };
  const atualizarCategoriaSelecionada = (event) => {
    setCategoriaSelecionada(event.target.value);
  };
  const categorizarPorFaixaPreco = (valor) => {
    if (valor >= 0 && valor < 50) {
      return "0-50";
    } else if (valor >= 50 && valor < 100) {
      return "50-100";
    } else if (valor >= 100 && valor < 150) {
      return "100-150";
    } else {
      return "150+";
    }
  };
  const atualizarFaixaPrecoSelecionada = (event) => {
    setFaixaPrecoSelecionada(event.target.value);
  };
  const produtosFiltrados = productsData.eventos.filter((produto) => {
    const preco = parseFloat(produto.valor);

    const categoriaFiltrada =
      categoriaSelecionada === "Todas" || produto.tipo === categoriaSelecionada;

    const faixaPrecoFiltrada =
      faixaPrecoSelecionada === "Todas" ||
      (faixaPrecoSelecionada === "0-50" && preco >= 0 && preco <= 50) ||
      (faixaPrecoSelecionada === "50-100" && preco > 50 && preco <= 100) ||
      (faixaPrecoSelecionada === "100-150" && preco > 100 && preco <= 150) ||
      (faixaPrecoSelecionada === "150+" && preco > 150);

    return categoriaFiltrada && faixaPrecoFiltrada;
  });

  return (
    <>
      <div className="home-container">
        <Header toggleCarrinho={toggleCarrinho} />
        <div className="home-main">
          <div className="home-main-filtro"></div>
          <div className="filtro">
            <label htmlFor="categoriaSelect">Filtrar por Categoria:</label>
            <select
              id="categoriaSelect"
              value={categoriaSelecionada}
              onChange={atualizarCategoriaSelecionada}
            >
              <option value="Todas">Todas</option>
              {getUniqueCategories(productsData.eventos).map((categoria) => (
                <option key={categoria} value={categoria}>
                  {categoria}
                </option>
              ))}
            </select>
            <label htmlFor="faixaPrecoSelect">
              Filtrar por Faixa de Preço:
            </label>
            <select
              id="faixaPrecoSelect"
              value={faixaPrecoSelecionada}
              onChange={(e) => setFaixaPrecoSelecionada(e.target.value)}
            >
              <option value="Todas">Todas</option>
              <option value="0-50">0 a 50</option>
              <option value="50-100">50 a 100</option>
              <option value="100-150">100 a 150</option>
              <option value="150+">150+</option>
            </select>
          </div>
          <div className="main">
            <div className="home-main-produtos">
              {produtosFiltrados.map((product) => (
                <ProdutoDisplay
                  key={product.id} // Adicione uma chave única usando o ID do produto
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
                  adicionarAoCarrinho={() => adicionarAoCarrinho(product)}
                  abrirDetalhe={() => abrirDetalhe(product)}
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
      {carrinhoVisivel && (
        <Carrinho
          carrinhoItems={carrinhoItems}
          removerItemDoCarrinho={removerItemDoCarrinho}
        />
      )}
      {detalheVisivel && (
        <Detalhe produto={produtoSelecionado} fecharDetalhe={fecharDetalhe} />
      )}
    </>
  );
}
function getUniqueCategories(products) {
  const uniqueCategories = new Set();
  products.forEach((produto) => {
    uniqueCategories.add(produto.tipo);
  });
  return ["Todas", ...uniqueCategories];
}

export default Home;
