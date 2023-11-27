import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
//import { useContext } from 'react'
import Cart from './components/Cart/Cart'
import Checkout from './components/Checkout/Checkout'

import SeedData from './firebase/seedData'

import { useEffect, useContext, useState, createContext } from "react";

function App() {
  
  return (
    <>
      <div>

        {/* <SeedData /> */}

        <BrowserRouter>
          <CartProvider>
            <NavBar />
            <Routes>
              <Route path='/' element={<ItemListContainer />} />
              <Route path='/category/:categoryId' element={<ItemListContainer />} />
              <Route path='/item/:itemId' element={<ItemDetailContainer />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/checkout' element={<Checkout/>} />
              <Route path='*' element={<h1>404 NOT FOUND</h1>} />
            </Routes>
          </CartProvider>
        </BrowserRouter>



        {/* <NavBar />
        <ItemListContainer greeting={'Bienvenidos'} />
        <ItemDetailContainer /> */}
      </div>

      {/* <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path='/' element={<ItemListContainer gretting = {'Bienvenidos'} />} />
      </Routes>
      
      </BrowserRouter> */}

      {/* <div className="App"> */}
        {/*<NavBar />*/}
        {/*<ItemListContainer gretting = {'Bienvenidos'} />*/}
      {/* </div> */}
    </>
  )
}

export default App
