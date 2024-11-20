import { Pencil } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

export default function ImageUpload({
  label,
  imageUrl = "",
  setImageUrl,
  className = "col-span-full",
}) {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        setSelectedImage(e.target.result);
        setImageUrl(e.target.result); // Update imageUrl if needed
      };
      reader.readAsDataURL(file);
    }
  };

  const handleClearImage = () => {
    setSelectedImage(null);
    setImageUrl(""); // Clear the imageUrl as well if needed
  };

  return (
    <div className={className}>
      <div className="flex justify-between items-center mb-4">
        <label
          htmlFor="course-image"
          className="block text-sm font-medium leading-6 text-gray-900 dark:text-slate-50 "
        >
          {label}
        </label>
        {selectedImage && (
          <button
            onClick={handleClearImage}
            type="button"
            className="flex space-x-2 bg-blue-700 rounded-md shadow text-slate-50 py-2 px-4"
          >
            <Pencil className="w-5 h-5" />
            <span>Change Image</span>
          </button>
        )}
      </div>
      {selectedImage ? (
        <img
          src={selectedImage}
          alt="Selected image preview"
          className="w-full h-64"
          style={{ objectFit: "contain" }}
        />
      ) : imageUrl ? (
        <Image
          src={imageUrl}
          alt="Item image"
          width={1000}
          height={667}
          className="w-full h-64"
          style={{ objectFit: "contain" }}
        />
      ) : (
        <React.Fragment>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="hidden"
            id="image-upload-input"
          />
        
        <label
  htmlFor="image-upload-input"
  className="cursor-pointer border-2 border-gray-300 border-dashed rounded-lg w-full h-64 flex items-center justify-center flex-col"
>
  <div className="mb-2">
    <svg
      className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 20 16"
    >
      {/* Replace the path below with your desired SVG icon */}
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
      />
    </svg>
  </div>
  <p className="text-sm text-gray-500">
    Click to select an image
  </p>
</label>
        </React.Fragment>
      )}
    </div>
  );
}
