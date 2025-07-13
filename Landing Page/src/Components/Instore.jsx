import Instore_item from "./Instore_item"
import { useState } from "react"
import Offer from "./Offer"
import { useParams } from "react-router-dom"
import Chatbot from "./Chatbot"
// const products=[
//     {
//         img : "/images/product1.png",
//         name: "Organic Apple",
//         price : 299
//     },{
//        img : "/images/product2.png",
//         name: "Organic Apple",
//         price : 299 
//     },{
//         img : "/images/product3.png",
//         name: "Organic Apple",
//         price : 299
//     },
//     {
//         img : "/images/product4.png",
//         name: "Organic Apple",
//         price : 299
//     },
//     {
//         img : "/images/product5.png",
//         name: "Organic Apple",
//         price : 299
//     }
// ]


const Instore=({items})=>{


const {storeId} = useParams();
const store1 = items.find((s) => s.name === storeId);
 const storeProducts = store1?.products || [];
// console.log("storeId:", storeId);
// console.log("items:", items);
// console.log("store:", store1);

const [query, setQuery] = useState("");

  const filteredItems = storeProducts.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );
  
   return <>
    
    <div className="min-h-[calc(100vh-70px)] bg-[#F8FAFC] ">
    <div className="max-w-6xl m-auto  flex flex-col  p-10 gap-5">
        <div className="flex flex-col gap-4">
        <p className="text-2xl font-bold text-gray-800">{store1.name}</p>
        <p className="font-normal text-sm text-gray-600">{store1.address}</p>
        <input className="w-full bg-[#E7EDF3] p-2 px-4 rounded-lg text-gray-500"
         type="search"
          placeholder="Search within this store"
                  value={query}
        onChange={(e) => setQuery(e.target.value)}
          />
       </div>
       <div className="flex flex-col gap-4"> 
       <p className="text-xl font-semibold">Popular products in this store</p>
        <div className=" grid grid-cols-1 gap-1 mt-4 justify-items-center md:grid-cols-5">
            <Instore_item products={filteredItems}></Instore_item>
          </div>
       </div>
        <div className="flex flex-col"> 
       <p className="text-xl font-semibold">Personalized offers</p>
        <div className=" grid grid-cols-1 gap-1 mt-4 justify-items-center md:grid-rows-1">
            <Offer products={storeProducts}></Offer>
          </div>
       </div>
    </div>

    </div>
    <Chatbot></Chatbot>
    </>
}

export default Instore