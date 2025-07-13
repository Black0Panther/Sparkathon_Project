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
function App() {

const items = [
    {
        name:"Dmart",
        address:"A-101, Green Valley Apartments, Sector 62, Noida, Uttar Pradesh - 201301",
        image : "/images/store1.png",
         products: [
      { img: "/images/deodrant.webp", name: "Deodrant", price: 40 },
      { img: "/images/bread.jpg", name: "Bread", price: 60 },
      { img: "/images/facewash.webp", name: "Facewash", price: 150 },
            { img: "/images/noodles.webp", name: "Noodles", price: 120 },
                  { img: "/images/scrubber.webp", name: "Scrubber", price: 40 },
    ],
    },
    {
      
        name:"15 AD",
        address:"Flat No. 12B, Sai Residency, MG Road, Pune, Maharashtra - 411001",
        image : "/images/store2.png",
         products: [
      { img: "/images/soap.webp", name: "Soap", price: 70 },
            { img: "/images/salt.webp", name: "Salt", price: 110 },
                  { img: "/images/juice.webp", name: "Juice", price: 80 },
                        { img: "/images/sprite.webp", name: "Sprite", price: 60 },
      { img: "/images/peanut butter.webp", name: "Peanut Butter", price: 140 },
      { img: "/images/milk.jpg", name: "Milk", price: 40 },
    ],
    },
    { 
        name:"Reliance",
        address:"House No. 56, 5th Cross, JP Nagar, Bengaluru, Karnataka - 560078",
        image : "/images/store4.png",},
        { 
        name:"Fresh food",
        address:"1st Floor, Royal Chambers, Banjara Hills, Hyderabad, Telangana - 500034",
        image : "/images/store3.png",},
        { 
        name:"Home essential",
        address:"1.8 miles away",
        image : "/images/store5.png",}
]
  return (
    <>
   <Navbar></Navbar>
   <Routes>
    <Route path='/' element={<Stores items={items}/>}></Route>
    <Route path='/store/:storeId' element={<Instore items={items}/>}></Route>
    <Route path='/feedbck' element={<Feedback/>}></Route>
   </Routes>
   {/* <Stores></Stores> */}
  
    </>
  )
}

export default App
