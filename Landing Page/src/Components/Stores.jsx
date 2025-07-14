import Store from "./Store"

const Stores = ({items}) =>{
   return <>
     <div className=" min-h-[calc(100vh-70px)] overflow-hidden bg-[#F8FAFC]">
       <div className=" max-w-6xl w-full mx-auto">
          <h2 className="text-center font-bold text-2xl mt-8 md:mt-16 mb-6 md:text-left">Stores Near You</h2>
          <div className=" grid grid-cols-1 gap-2 md:grid-cols-[repeat(auto-fit,minmax(250px,1fr))]">
            <Store items={items}></Store>
          </div>
       </div>
     </div>
   </>
}

export default Stores