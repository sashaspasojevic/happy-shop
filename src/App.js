import "./App.css";

import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import TopBar from "./components/TopBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Single from "./pages/Single";
import Admin from "./pages/Admin";
import Card from "./pages/Card";
import NotFound from "./pages/NotFound";
import { useState } from "react";

function App() {
  const [items, setItems] = useState([
    {
      id: 1,
      title: "Orange t-shirt",
      price: 39,
      desc: "Delete the negative; accentuate the positive! Design is a constant challenge to balance comfort with luxe, the practical with the desirable.",
      qty: 4,
      img: "img/product1.jpg",
    },
    {
      id: 1,
      title: "Traveler bag",
      price: 80,
      desc: "Delete the negative; accentuate the positive! Design is a constant challenge to balance comfort with luxe, the practical with the desirable.",
      qty: 8,
      img: "img/product2.jpg",
    },
    {
      id: 1,
      title: "Sunglasses",
      price: 30,
      desc: "Delete the negative; accentuate the positive! Design is a constant challenge to balance comfort with luxe, the practical with the desirable.",
      qty: 5,
      img: "img/product3.jpg",
    },
  ]);

  const [cart, setCart] = useState([]);

  return (
    <BrowserRouter>
      <TopBar></TopBar>
      <NavBar cart={cart}></NavBar>
      <Routes>
        <Route
          path='/'
          element={<Home items={items} cart={cart} setCart={setCart}></Home>}
        ></Route>

        <Route
          path='/single'
          element={<Single items={items} cart={cart} setCart={setCart} />}
        >
          <Route path=':singleId' element={<Single />} />
        </Route>
        <Route
          path='/admin'
          element={<Admin items={items} setItems={setItems}></Admin>}
        ></Route>
        <Route
          path='/card'
          element={<Card cart={cart} setCart={setCart}></Card>}
        ></Route>

        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
