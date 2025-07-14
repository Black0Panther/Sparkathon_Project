 import { FaComments } from "react-icons/fa"; 
import ChatbotModal from "./ChatbotModal";
import { useState } from "react";

 const Chatbot=()=>{
    const [showModal, setShowModal] = useState(false);

 return <>
  {!showModal && (<div
       onClick={() => setShowModal(true)}
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        backgroundColor: "#007bff",
        color: "#fff",
        borderRadius: "50%",
        width: "60px",
        height: "60px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        zIndex: 1000,
      }}
    >
      <FaComments size={30} />

    </div>
  )}
    {/* Modal for Chatbot Screenshot */}
      <ChatbotModal show={showModal} onClose={() => setShowModal(false)} /> 
    </>
     }

     export default Chatbot