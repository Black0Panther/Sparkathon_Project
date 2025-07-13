const Offer = ({products})=>{

    return <>
       {products.map((p,idx)=>(

 <div className="min-w-full  rounded-2xl m-4 p-4 gap-2 flex overflow-hidden justify-between items-center hover:shadow-md transition">
    <div className="flex flex-col gap-4">
      <span className="bg-green-100 text-green-700 rounded">10% OFF</span>
     <h3 className="font-bold text-gray-800 md:text-xl">{p.name}</h3>
     <span className="flex items-center gap-3 text-xl">
       <p className="text-gray-600 text-sm line-through">₹{p.price}</p>
      <p>→</p>
        <p className="text-gray-600 text-sm ">₹{p.dprice}</p>
       </span>
    </div>
              <img className="w-30 md:w-52 hover:opacity-75" src={p.img} alt="" />
   
     </div>

     ))}
    </>
}

export default Offer