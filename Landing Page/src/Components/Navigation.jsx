import { useNavigate } from "react-router-dom";

const Navigation = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col items-center justify-center p-6">
      <h2 className="text-2xl font-bold mb-4">Navigation Map</h2>
      
      <img 
        src="/images/mapchatbox.png" 
        alt="Store Map Navigation" 
        className="w-full max-w-4xl border rounded-lg shadow-lg mb-6"
      />
      <div className="flex gap-4">
      <button
        onClick={() => navigate(-1)}
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
      >
         Back
      </button>
      <button onClick={()=>navigate('/feedbck')} className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">Feedback</button>
    </div>
    </div>
  );
};

export default Navigation;