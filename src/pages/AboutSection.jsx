import React, { useState, useEffect } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const AboutSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Array of images for the slideshow
  const images = ["/team.jpg", "/poster.jpg"];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);

  // Change image every 3 seconds with smoother transition
  useEffect(() => {
    const intervalId = setInterval(() => {
      // Start fade-out
      setIsFadingOut(true);

      // Wait for fade-out to complete before switching the image
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
        setIsFadingOut(false); // Start fade-in after image change
      }, 500); // 500ms matches the duration of the CSS transition
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(intervalId); // Clear interval on component unmount
  }, [images.length]);

  return (
    <div ref={ref} className="px-5 py-10 text-white " id="about">
      <h2 className="mb-10 text-5xl font-bold text-center titles">
        What is HackOverFlow
      </h2>
      <div className="flex flex-col items-center justify-center space-y-8 font-bold md:flex-row md:space-y-0 md:space-x-8">
        <div className="flex flex-col items-center p-4 text-center bg-gray-700 rounded-lg w-52">
          {inView && (
            <CountUp end={3} duration={3} className="text-4xl text-cyan-500" />
          )}
          <span className="text-xl">Themes</span>
        </div>
        <div className="flex flex-col items-center p-4 text-center bg-gray-700 rounded-lg w-52">
          {inView && (
            <CountUp end={24} duration={3} className="text-4xl text-pink-500" />
          )}
          <span className="text-xl">Hours of Hacking</span>
        </div>
        <div className="flex flex-col items-center p-4 text-center bg-gray-700 rounded-lg w-52">
          {inView && (
            <CountUp
              end={1700}
              duration={3}
              className="text-4xl text-orange-500"
            />
          )}
          <span className="text-xl">Participants</span>
        </div>
      </div>

      <div className="grid gap-8 mt-10 font-medium md:grid-cols-2">
        <div className="flex items-center justify-center h-full p-6 bg-gray-700 rounded-lg">
          <div className="max-w-lg overflow-y-auto text-white">
            <p className="mb-4 text-lg">
              Getting into a loop of ideas, but finding out where to showcase
              them? It’s time to think big and act fast! 💡 Start building
              projects and join us at HackOverFlow 2024! 🛠
            </p>
            <p className="mb-4 text-lg">
              HackOverFlow 2024 is a 24-hour national-level hackathon organized
              by the SRKR CODING CLUB🌏{" "}
            </p>
            <p className="text-lg">
              This event provides a platform for passionate developers,
              designers, and enthusiasts to come together and transform their
              ideas into reality. It’s not just an opportunity to showcase
              technical skills; it’s a chance to network, learn, and have a
              memorable time with like-minded individuals. 👏
            </p>
          </div>
        </div>

        {/* Slideshow Section */}
        <div className="flex items-center justify-center w-full h-auto p-3 bg-gray-600 rounded-lg">
          <img
            src={images[currentImageIndex]}
            alt="Hackathon Slideshow"
            className={`w-full h-auto object-cover rounded-lg transition-opacity duration-500 ${
              isFadingOut ? "opacity-0" : "opacity-100"
            }`}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
