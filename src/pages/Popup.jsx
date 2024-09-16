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
  const [isChecked, setIsChecked] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Set popup visible every time the page loads
    setIsVisible(true);
  }, []);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
    if (event.target.checked) {
      setIsVisible(false); // Close the popup when checkbox is checked
    }
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
              <strong>Step 1:</strong> PPT Submission
              <strong> (DEAD LINE): </strong>
              <span className=" text-red-500 font-bold max-[460px]:block text-end">
                4th Oct 11:59 PM
              </span>
            </li>
            <li>
              <strong>Step 2:</strong> PPT Evaluation Rounds :
              <span className=" text-red-500 font-bold max-[460px]:block text-end">
                {" "}
                5th Oct-7th Oct
              </span>
            </li>
            <li>
              <strong>Step 3:</strong> Final Registration
              <strong> (DEAD LINE): </strong>
              <span className=" text-red-500 font-bold max-[460px]:block text-end">
                17th Oct 11:59 PM
              </span>
            </li>
          </ul>
        </div>
        <div className="mb-4">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              className="text-indigo-600 form-checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            <span className="ml-2">I agree to the Steps.</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Popup;
