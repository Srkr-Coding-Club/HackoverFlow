import React, { useState, useEffect } from "react";

const Popup = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isImageLoading, setIsImageLoading] = useState(true); // Loading state for image

  useEffect(() => {
    const storedValue = localStorage.getItem("popupCheckbox");
    const storedTimestamp = localStorage.getItem("popupTimestamp");

    if (storedValue && storedTimestamp) {
      const currentTime = new Date().getTime();
      const storedTime = parseInt(storedTimestamp, 10);

      if (currentTime - storedTime < 60 * 1000) {
        setIsChecked(true);
        return;
      } else {
        localStorage.removeItem("popupCheckbox");
        localStorage.removeItem("popupTimestamp");
      }
    }

    setIsVisible(true);
  }, []);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const handleSubmit = () => {
    if (isChecked) {
      const timestamp = new Date().getTime();
      localStorage.setItem("popupCheckbox", true);
      localStorage.setItem("popupTimestamp", timestamp);
    }
    setIsVisible(false);
  };

  const handleImageLoad = () => {
    setIsImageLoading(false); // When the image is fully loaded
  };

  const handleImageError = () => {
    setIsImageLoading(false); // Hide loading even if image fails
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg p-3 mx-auto shadow-lg max-w-2xl w-full">
        {/* Popup content */}
        <div className="mb-6 relative">
          {/* Image loading spinner */}
          {isImageLoading && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="loader border-t-transparent border-solid animate-spin rounded-full border-blue-600 border-4 h-8 w-8"></div>
            </div>
          )}
          <img
            src="/poster.jpg"
            alt="Poster"
            className={`w-full h-auto rounded-lg transition-opacity duration-500 ${
              isImageLoading ? "opacity-0" : "opacity-100"
            }`}
            onLoad={handleImageLoad}
            onError={handleImageError}
          />
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
        <button
          onClick={handleSubmit}
          disabled={!isChecked}
          className={`${
            isChecked
              ? "bg-indigo-600 hover:bg-indigo-700"
              : "bg-gray-400 cursor-not-allowed"
          } text-white font-semibold py-2 px-6 rounded-lg transition duration-200 ease-in-out`}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Popup;
