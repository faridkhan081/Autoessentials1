import { X } from "lucide-react";
import React from "react";

const ImageViewer = ({ imageUrl, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75">
      <div className="max-w-[300px] overflow-hidden w-full max-h-full relative">
        <img
          src={imageUrl}
          alt="Full screen"
          className="object-contain max-w-full max-h-full mx-auto"
        />
        <button
          className="absolute top-0 right-0 m-4 text-white cursor-pointer bg-red-600"
          onClick={onClose}
        >
          <X size={30} />
        </button>
      </div>
    </div>
  );
};

export default ImageViewer;
