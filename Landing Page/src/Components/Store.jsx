import { Link } from "react-router-dom"

const Store=({items})=>{
    return <>
     
     {items.map((store,idx)=>(
 
 <Link to={`/store/${store.name}`}>
 <div className="w-full min-h-64 md:min-w-[160px] rounded-2xl mx-auto m-4 gap-2 flex flex-col overflow-hidden hover:p-2 hover:rounded">
       <img className="w-full h-48 hover:opacity-75 object-contain" src={store.image} alt="" />
       <h3 className="font-bold px-2">{store.name}</h3>
       <p className="px-2">{store.address}</p>
     </div>
</Link>
     ))}
    

    </>
}

export default Store