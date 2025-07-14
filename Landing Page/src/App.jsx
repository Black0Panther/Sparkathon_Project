import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Stores from './Components/Stores'
import Instore from './Components/Instore'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Store from './Components/Store'
import Feedback from './Components/Feedback'
import Navigation from './Components/Navigation'
import Navigation2 from './Components/Navigation2'
function App() {

const items = [
    {
        name:"Walmart",
        address:"0.6 miles away",
        image : "/images/store1.png",
         products: [
      { img: "/images/deodrant.webp", name: "Deodrant", price: 40 , dprice:36 },
                       { img: "/images/juice.webp", name: "Juice", price: 60 , dprice : 51 },
      { img: "/images/facewash.webp", name: "Facewash", price: 150 ,dprice:112.5 },
            { img: "/images/noodles.webp", name: "Noodles", price: 120 , dprice:105.6 },
                  { img: "/images/scrubber.webp", name: "Scrubber", price: 40 ,dprice:36},
                    { img: "/images/bread.jpg", name: "Bread", price: 60 , dprice:51 },
    ],
    },
    {
      
        name:"Dmart",
        address:"1 miles away",
        image : "/images/store2.png",
         products: [
      { img: "/images/soap.webp", name: "Soap", price: 70 },
            { img: "/images/salt.webp", name: "Salt", price: 110 },
             { img: "/images/bread.jpg", name: "Bread", price: 60 , dprice:51 },
                        { img: "/images/sprite.webp", name: "Sprite", price: 60 },
      { img: "/images/peanut butter.webp", name: "Peanut Butter", price: 140 },
      { img: "/images/milk.jpg", name: "Milk", price: 40 },
    ],
    },
    { 
        name:"Reliance",
        address:"1.2 miles away",
        image : "/images/store4.png",},
        { 
        name:"Fresh food",
        address:"1.4 miles away",
        image : "/images/store3.png",},
        { 
        name:"Home essential",
        address:"1.7 miles away",
        image : "/images/store5.png",}
]
  return (
    <>
   <Navbar></Navbar>
   <Routes>
    <Route path='/' element={<Stores items={items}/>}></Route>
    <Route path='/store/:storeId' element={<Instore items={items}/>}></Route>
    <Route path='/feedbck' element={<Feedback/>}></Route>
    <Route path='/navigate' element={<Navigation/>}></Route>
       <Route path='/navigate2' element={<Navigation2/>}></Route>
   </Routes>
   {/* <Stores></Stores> */}
  
    </>
  )
}

export default App
