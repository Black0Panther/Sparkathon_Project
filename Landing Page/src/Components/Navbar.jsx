import { FaSearch } from "react-icons/fa";
import { Navigate, useNavigate } from "react-router-dom";

const Navbar = ()=>{
      const nav = useNavigate();


    return <>
    
    <nav className="bg-[#F8FAFC] p-4 flex justify-between items-center border-b border-gray-300 md:px-16 ">
       <div className="left flex gap-4 items-center md:gap-8">
        <h3 onClick={()=>nav('/')} className="text-black text-lg font-bold md:text-xl cursor-pointer">SmartMart</h3>
        <input className="text-black bg-[#E8EDF5] w-32 px-2 h-6 rounded-lg md:w-80 md:h-8" type="search" placeholder="Search" />
        <button className="relative right-9 md:right-20"><FaSearch size={15} /></button>
       </div>
       <div className="right">
        <button className="bg-[#0A80ED] rounded-2xl text-sm text-[#E8EDF5] px-2 py-1 md:px-4 md:py-2 hover:bg-blue-400 hover:text-white">Login/Signup</button>
       </div>
    </nav>

    
    </>

}

export default Navbar