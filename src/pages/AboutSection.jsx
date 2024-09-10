import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const AboutSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className="px-5 py-10 text-white bg-gradient-to-r from-gray-800 to-gray-900"
    >
      <h2 className="mb-10 text-5xl font-bold text-center titles">
        What is HackOverFlow
      </h2>
      <div className="flex flex-col items-center justify-center space-y-8 md:flex-row md:space-y-0 md:space-x-8">
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
      <div className="grid gap-8 mt-10 md:grid-cols-2">
        <div className="h-full p-6 overflow-y-auto bg-gray-700 rounded-lg ">
          <p className="mb-4 text-lg">
            Getting into a loop of ideas, but finding out where to showcase
            them? It’s time to think big and act fast! 💡 Start building
            projects and join us at HackOverFlow 2024! 🛠
          </p>
          <p className="mb-4 text-lg">
            HackOverFlow 2024 is a 24-hour national-level hackathon organized by
            the SRKR CODING CLUB🌏{" "}
          </p>
          <p className="text-lg">
            This event provides a platform for passionate developers, designers,
            and enthusiasts to come together and transform their ideas into
            reality. It’s not just an opportunity to showcase technical skills;
            it’s a chance to network, learn, and have a memorable time with
            like-minded individuals. 👏
          </p>
        </div>
        <div className="flex items-center justify-center w-auto h-auto p-3 bg-gray-600 rounded-lg">
          <img
            src="/team.jpg"
            alt="DUHacks Participants"
            className="w-auto h-auto rounded-lg "
          />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
