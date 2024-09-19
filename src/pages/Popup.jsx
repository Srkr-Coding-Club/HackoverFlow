// import React, { useState, useEffect } from "react";

// const Popup = () => {
//   const [isChecked, setIsChecked] = useState(false);
//   const [isVisible, setIsVisible] = useState(false);
//   const [isImageLoading, setIsImageLoading] = useState(true); // Loading state for image

//   useEffect(() => {
//     // Set popup visible every time the page loads
//     setIsVisible(true);
//   }, []);

//   const handleCheckboxChange = (event) => {
//     setIsChecked(event.target.checked);
//     if (event.target.checked) {
//       setIsVisible(false); // Close the popup when checkbox is checked
//     }
//   };

//   const handleImageLoad = () => {
//     setIsImageLoading(false); // When the image is fully loaded
//   };

//   const handleImageError = () => {
//     setIsImageLoading(false); // Hide loading even if image fails
//   };

//   if (!isVisible) return null;

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
//       <div className="w-full max-w-2xl p-3 mx-auto bg-white rounded-lg shadow-lg">
//         {/* Popup content */}
//         <div className="relative mb-6">
//           {/* {isImageLoading && (
//             <div className="absolute inset-0 flex items-center justify-center">
//               <div className="w-8 h-8 border-4 border-blue-600 border-solid rounded-full loader border-t-transparent animate-spin"></div>
//             </div>
//           )} */}
//           <img
//             src="/poster.jpg"
//             alt="Poster"
//             className={`w-full h-auto rounded-lg transition-opacity duration-500 ${
//               isImageLoading ? "opacity-0" : "opacity-100"
//             }`}
//             onLoad={handleImageLoad}
//             onError={handleImageError}
//           />
//         </div>
//         <div className="mb-4">
//           <label className="inline-flex items-center">
//             <input
//               type="checkbox"
//               className="text-indigo-600 form-checkbox"
//               checked={isChecked}
//               onChange={handleCheckboxChange}
//             />
//             <span className="ml-2">I agree to the Steps.</span>
//           </label>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Popup;

import React, { useState, useEffect } from "react";

const Popup = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
   
    setIsVisible(true);
  }, []);

  const handleClose = () => {
    setIsVisible(false); 
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-full max-w-2xl p-3 mx-auto bg-white rounded-lg shadow-lg">
        {/* Popup content */}
        <div className="mb-6">
          <h2 className="mb-4 text-xl font-bold">Important Steps</h2>
          <ul className="pl-5 space-y-2 text-gray-700 list-disc">
            <li>
              Final Registration (DEADLINE):
              <span className="text-red-500 font-bold max-[460px]:block text-end">
                11th Oct 11:59 PM
              </span>
            </li>
            <li>
              Participants can select a problem statement from the document
              provided.
            </li>
            <li>
              Participants may also bring their own problem statements, provided
              they align with one or a mix of the hackathon themes.
            </li>
          </ul>
        </div>
        <div className="mb-4">
          <button
            onClick={handleClose}
            className="font-bold text-white px-6 py-2 rounded-xl bg-red-500 hover:bg-red-600 transition-all duration-300 ease-in-out shadow-lg"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
