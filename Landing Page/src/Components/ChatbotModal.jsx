import React from "react";
import { useNavigate } from "react-router-dom";
const ChatbotModal = ({ show, onClose }) => {
  if (!show) return null;
   const nav = useNavigate();
  const handlenav = ()=>{
     nav('/navigate');
  }


  return (
    <div className="fixed inset-0 z-50 flex items-end justify-end p-2">
      <div className="bg-gray-300 rounded-xl p-0 shadow-2xl w-[350px] h-auto relative overflow-hidden items-center">
        {/* Close Button */}
<div className="flex items-center justify-center relative h-12 border-b bg-white rounded-t-xl">
  <p className="text-center w-full font-semibold">Store Assistant</p>
  <button
    onClick={onClose}
    className="absolute right-4 text-gray-600 hover:text-black text-2xl"
  >
    &times;
  </button>
</div>

        {/* Image inside styled container */}
        <img onClick={()=>handlenav()}
          src="/images/chatbot.jpeg"
          alt="Chatbot Screenshot"
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
};

export default ChatbotModal;
