import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'react-phone-input-2/lib/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import './App.css'
import Carousel from './components/Carousel'
import Header from './components/Header'
import Home from './components/Home'
import Footers from './components/Footers'
import Thobe from './components/Category/Thobe'
import Cart from './components/Cart'
import Abayas from './components/Category/Abayas'
import KidsTeen from './components/Category/KidsTeen'
import Display from './components/Display'
import KurtaPajamas from './components/Category/KurtaPajama'
import MashrooEhrams from './components/Category/MashrooEhram'
import Cosates  from './components/Category/Cosates'
import PthaniSuits from './components/Category/PthaniSuits'
import Izaar from './components/Category/Izaar'
import OurStory from './components/OurStory'
import DanishDawar from './components/DanishDawar'
import Sale from './components/Sale'
import Blog from './components/Blog'
import BlogTO from './components/BlogeTO'
import BlogeThree from './components/BlogeThree'
import RamadanCollection from './components/RamadanCollection'
import MarrakeshCollection from './components/MarrakeshCollection'
import BidayahCollection from './components/BidayahCollections'
import DoneMess from './components/DemoMess'
import CheckoutForm from './components/CheckoutForm'
import OrderSuccess from './components/OrderSuccessfull';
import LoginPopup from './components/LoginPopup';
// import js Category.....................
import {Sales} from './Porducts/Sales'
import { DanishDawars } from './Porducts/DanishDawars'
import { Thobes } from './Porducts/Thobes'
import { Produst } from './Porducts/Product'
import {Abaya} from './Porducts/Abayas'
import {KidsTeens} from './Porducts/Kids&Teens'
import { KurtaPajama } from './Porducts/KurtaPajama'
import { MashrooEhram } from './Porducts/MashrooEhram'
import {Cosate} from './Porducts/CoSate'
import { Categorys } from './Porducts/Category'
import { Izars } from './Porducts/Izars'
import { RamadanCollections } from './Porducts/RamadanCollection'
import {MarrakeshCollections} from './Porducts/MarrakeshCollection'
import {BidayahCollections} from './Porducts/BidayahCollection'
const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  const [cart, setCart] = useState([]);
  const CartNumber = cart.reduce((acc, item) => acc + item.quantity, 0);
  

  //  cart ThobrsAddCart---------------------------------------------------------------------------
  const handleAddCart = (Produst) => {
    setCart((prevCart) => {
      const itemInCart = prevCart.find(item => item.id === Produst.id);
      if (itemInCart) {
        return prevCart.map(item =>
          item.id === Produst.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...Produst, quantity: 1 }];
    });
  };
  //  cart delete---------------------------------------------------------------------------
  const deleteCart = (id) => {
    setCart((prevCart) => prevCart.filter(item => item.id != id))
  }
  //  cart upDate---------------------------------------------------------------------------

  const upDateQuantity = (id, quantity) => {
    setCart(prevCart => prevCart.map(item => item.id == id ? { ...item, quantity: Math.max(1, quantity) } : item))
  }

  return (
    <>
      <BrowserRouter>
    
      
        <Header CartNumber={CartNumber} />
        <Routes>
          <Route path='/'                      element={<Home                Categorys={Categorys}                                                    />}></Route>
          <Route path='/Display/'              element={<Display             Produsts={Produst}                           addCart={handleAddCart}     />}></Route>
          <Route path='/Thobe/'                element={<Thobe               Thobes={Thobes}                              addCart={handleAddCart}     />}></Route>
          <Route path='/Abayas/'               element={<Abayas              Abayas={Abaya}                               addCart={handleAddCart}     />}></Route>
          <Route path='/KidsTee/'              element={<KidsTeen            KidsTeen={KidsTeens}                         addCart={handleAddCart}     />}></Route>
          <Route path='/KurtaPajama/'          element={<KurtaPajamas        KurtaPajamas={KurtaPajama}                   addCart={handleAddCart}     />}></Route>
          <Route path='/MashrooEhrams/'        element={<MashrooEhrams       MashrooEhrams={MashrooEhram}                 addCart={handleAddCart}     />}></Route>
          <Route path='/Cosate/'               element={<Cosates             Cosates={Cosate}                             addCart={handleAddCart}     />}></Route>
          <Route path='/DanishDawar/'          element={<DanishDawar         DanishDawars={DanishDawars}                  addCart={handleAddCart}     />}></Route>
          <Route path='/Sale/'                 element={<Sale                Sales={Sales}                                addCart={handleAddCart}     />}></Route>
          <Route path='/Izaar/'                element={<Izaar               Izars={Izars}                                addCart={handleAddCart}     />}></Route>
          <Route path='/RamadanCollection/'    element={<RamadanCollection   RamadanCollections={RamadanCollections}      addCart={handleAddCart}     />}></Route>
          <Route path='/MarrakeshCollections/' element={<MarrakeshCollection MarrakeshCollections={MarrakeshCollections}  addCart={handleAddCart}     />}></Route>
          <Route path='/BidayahCollection/'    element={<BidayahCollection   BidayahCollections={BidayahCollections}  addCart={handleAddCart}         />}></Route>
          <Route path='/PthaniSuits/'          element={<PthaniSuits                                                                />}></Route>

          <Route path='/Cart/'               element={<Cart         cart={cart}   deleteCart={deleteCart} upDateQuantity={upDateQuantity}      />}></Route>
          <Route path='/DoneMess/'           element={<DoneMess     />}></Route>
          <Route path='/CheckoutForm/'       element={<CheckoutForm />}></Route>
          <Route path='/OrderSuccessfull/'   element={<OrderSuccess/>}></Route>
          <Route path='/OurStory/'           element={<OurStory    />}></Route>
          <Route path='/Blog/'               element={<Blog        />}></Route>
          <Route path='/BlogTO/'             element={<BlogTO      />}></Route>
          <Route path='/BlogeThree/'         element={<BlogeThree  />}></Route>
          {/* <Route path="/login/" element={<LoginPopup onLogin={handleLoginSuccess} />} /> */}







        </Routes>
        
        <Footers />
        <LoginPopup onLogin={handleLoginSuccess} />

      </BrowserRouter>
    </>
  )
}

export default App