
import Countdown from 'react-countdown';

const Banner = () => {
  const countdownDate = new Date('2024-10-25T00:00:00').getTime();

  const renderer = ({ days, hours, minutes, seconds }) => {
    return (
      <div className="flex space-x-4 text-center">
        <div className="flex flex-col items-center bg-black bg-opacity-30 p-0 md:p-4">
          <span className="text-6xl text-cyan-500 font-bold">{days}</span>
          <span className="text-xl font-bold">Days</span>
        </div>
        <div className="flex flex-col items-center bg-black bg-opacity-30 p-0 md:p-4">
          <span className="text-6xl text-pink-500 font-bold">{hours}</span>
          <span className="text-xl font-bold">Hours</span>
        </div>
        <div className="flex flex-col items-center bg-black bg-opacity-30 p-0 md:p-4">
          <span className="text-6xl text-purple-500 font-bold">{minutes}</span>
          <span className="text-xl font-bold">Minutes</span>
        </div>
        <div className="flex flex-col items-center bg-black bg-opacity-30 p-0 md:p-4">
          <span className="text-6xl text-orange-500 font-bold">{seconds}</span>
          <span className="text-xl font-bold">Seconds</span>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col h-screen md:flex-row items-center bg-gradient-to-r from-gray-800 to-gray-900 text-white py-10  px-5">
      <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left md:ml-10">
        <h1 className="text-5xl font-bold mt-6 mb-4">HACK OVERFLOW</h1>
        <p className="text-2xl mb-2 font-bold">25-26TH OCT</p>
        <p className="text-xl mb-8">HACK FOR A CHANGE !</p>
        <Countdown date={countdownDate} renderer={renderer} />
        <a
          href="/HACKOVERFLOW-2K24-PROBLEM-STATEMENTS.pdf"
          download={"HACKOVERFLOW-2024-Problem-Statements.pdf"}
          className="mt-8 px-10 py-3 bg-white text-gray-900 font-bold rounded-full shadow-lg hover:bg-gray-900 hover:text-white hover:border-white hover:border-2 transition-colors duration-300"
        >
          Go to Themes
        </a>
      </div>
      <div className="mt-8 md:mt-0 md:ml-8 md:w-full w-1/2 flex justify-center">
        <img src="/mascot-2.svg" alt="Character" className=" h-96 w-auto" />
      </div>
    </div>
  );
};

export default Banner;
