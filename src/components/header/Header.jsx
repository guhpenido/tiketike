import React from "react";
import carrinho from "./cart-shopping-solid.svg";
import "../home/homecss.css";

function Header({toggleCarrinho}) {
  return (
    <>
      <div className="header">
        <div className="home-header">
          <div className="home-header-links"></div>
          <div className="home-header-logo">
            <img
              src="https://cdn.discordapp.com/attachments/944149488640094228/1166569113691361362/LOGO.png?ex=654af726&is=65388226&hm=9e515b70f3c1d9652b32fac00965a8ec08e3f2e41fada979a794b90ca8539344&"
              alt=""
            />
          </div>
          <div className="home-header-cart" onClick={toggleCarrinho}>
            <img className="carrinho" src={carrinho} alt=""/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
