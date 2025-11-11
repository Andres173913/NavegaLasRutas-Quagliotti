import "./App.css";
import Container from "./components/Container";
import { BrowserRouter, Routes, Route } from 'react-router'
import ProductDetail from "./pages/ProductDetail";
import CartDetail from "./pages/CartDetail";


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Container />} />
          <Route path="/product-detail/:productId" element={<ProductDetail />} />
          <Route path="/cart-detail" element={<CartDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
