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
//     <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//       <div className="bg-white rounded-lg p-3 mx-auto shadow-lg max-w-2xl w-full">
//         {/* Popup content */}
//         <div className="mb-6 relative">
//           {/* {isImageLoading && (
//             <div className="absolute inset-0 flex items-center justify-center">
//               <div className="loader border-t-transparent border-solid animate-spin rounded-full border-blue-600 border-4 h-8 w-8"></div>
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
//               className="form-checkbox text-indigo-600"
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
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg p-3 mx-auto shadow-lg max-w-2xl w-full">
        {/* Popup content */}
        <div className="mb-6">
          <h2 className="text-xl font-bold mb-4">Important Steps</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li><strong>Step 1:</strong> PPT Submission: 4th Oct 11:59 PM</li>
            <li><strong>Step 2:</strong> Evaluation Rounds: 5th-7th Oct</li>
            <li><strong>Step 3:</strong> Final Registration Ends: 17th Oct 11:59 PM</li>
          </ul>
        </div>
        <div className="mb-4">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              className="form-checkbox text-indigo-600"
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
