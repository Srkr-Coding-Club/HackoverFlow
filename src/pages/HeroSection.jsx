import Countdown from 'react-countdown';

const Banner = () => {
  const countdownDate = new Date('2024-10-25T00:00:00').getTime();

  const renderer = ({ days, hours, minutes, seconds }) => {
    return (
      <div className="flex space-x-4 text-center">
      <div className="flex flex-col items-center bg-black bg-opacity-30 p-2 md:p-4 rounded-xl">
        <span className="text-4xl md:text-6xl text-cyan-500 font-bold">{days}</span>
        <span className="text-lg md:text-xl font-bold">Days</span>
      </div>
      <div className="flex flex-col items-center bg-black bg-opacity-30 p-2 md:p-4 rounded-xl">
        <span className="text-4xl md:text-6xl text-pink-500 font-bold">{hours}</span>
        <span className="text-lg md:text-xl font-bold">Hours</span>
      </div>
      <div className="flex flex-col items-center bg-black bg-opacity-30 p-2 md:p-4 rounded-xl">
        <span className="text-4xl md:text-6xl text-purple-500 font-bold">{minutes}</span>
        <span className="text-lg md:text-xl font-bold">Minutes</span>
      </div>
      <div className="flex flex-col items-center bg-black bg-opacity-30 p-2 md:p-4 rounded-xl">
        <span className="text-4xl md:text-6xl text-orange-500 font-bold">{seconds}</span>
        <span className="text-lg md:text-xl font-bold">Seconds</span>
      </div>
    </div>
    
    );
  };

  return (
    <div className="flex flex-col h-full md:flex-row items-center bg-gradient-to-r from-gray-800 to-gray-900 text-white py-10 px-5">
      <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left md:ml-10">
        <h1 className="text-6xl font-semibold mt-20 mb-4 titles">HACK OVERFLOW</h1>
        <p className="text-2xl mb-2 font-bold">25 - 26TH OCT</p>
        <p className="text-xl mb-8">HACK FOR A CHANGE !</p>
        <Countdown date={countdownDate} renderer={renderer} />

        {/* Buttons container */}
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mt-8">
         
          {/* Go to Themes Button */}
          <a
            href="/HACKOVERFLOW-2K24-PROBLEM-STATEMENTS.pdf"
            download={"HACKOVERFLOW-2024-Problem-Statements.pdf"}
            className="px-10 py-3 bg-white text-gray-900 font-bold rounded-full shadow-lg hover:bg-gray-900 hover:text-white hover:border-white hover:border-2 transition-colors duration-300"
          >
            Go to Themes
          </a>

          {/* Register Now Button */}
          <a
            href="https://scc-hackoverflow.vercel.app"
            className="px-10 py-3 bg-white text-gray-900 font-bold rounded-full shadow-lg hover:bg-gray-900 hover:text-white hover:border-white hover:border-2 transition-colors duration-300"
          >
            Register Now
          </a>

         
        </div>
      </div>

      <div className="mt-8 md:mt-0 md:ml-8 md:w-full w-1/2 hidden md:flex justify-center">
        <img src="/boy.png" alt="Character" className="h-[30rem] w-auto drop-shadow-3xl" />
      </div>
    </div>
  );
};

export default Banner;
