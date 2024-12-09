import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router";
import Pages from './Pages';
import ProductView from './Pages/ProductView';
import Cart from './Pages/Cart';
import CheckOut from './Pages/CheckOut';
import ProductCategoryView from './Pages/ProductCategoriesView';
import OrderConfirmed from './Pages/OrderConfirmed';

function App() {

  return (
    <>
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<Pages/>} />
          <Route path="/view/:id" element={<ProductView/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/checkout" element={<CheckOut/>} />
          <Route path="/categories/view/:type" element={<ProductCategoryView/>} />
          <Route path="/confirm/order" element={<OrderConfirmed/>} />
        </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
