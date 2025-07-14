import { useNavigate } from "react-router-dom"

const Instore_item=({products})=>{

const nav = useNavigate();
    return <>
      
       {products.map((p,idx)=>(

 <div className="w-full md:min-w-[160px] min-h-64 rounded-2xl m-4 gap-2 flex flex-col overflow-hidden hover:rounded items-center ">
       <img className="w-full h-40 object-contain  hover:opacity-75" src={p.img} alt="" />
       <h3 className="font-bold">{p.name}</h3>
       <p>₹{p.price}</p>
       <p className="font-s">Aisle 5 Shelf 2</p>
       <button onClick={()=> nav('/navigate2')} className="bg-[#0A80ED] text-white px-2 py-1 rounded text-sm cursor-pointer">Navigate</button>
     </div>

     ))}
    

    </>
}

export default Instore_item