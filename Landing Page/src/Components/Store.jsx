import { Link } from "react-router-dom"

const Store = ({ items }) => {
  return (
    <>
      {items.map((store, idx) => (
        <Link to={`/store/${store.name}`} key={idx}>
          <div className="w-64 md:w-full min-h-64 md:min-w-[160px] rounded-2xl mx-auto m-4 gap-4 items-center flex flex-col overflow-hidden hover:p-2 hover:rounded">
            <img className="w-full h-48 hover:opacity-75 object-contain" src={store.image} alt="" />
            <h3 className="font-bold px-2 text-xl">{store.name}</h3>
            <p className="px-2 text-lg">{store.address}</p>
          </div>
        </Link>
      ))}
    </>
  )
}

export default Store
