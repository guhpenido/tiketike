import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home } from "../components/home/Home";
import { Detalhe } from "../components/detalhes/Detalhe";
//
export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detalhe" element={<Detalhe />} />
      </Routes>
    </BrowserRouter>
  );
}