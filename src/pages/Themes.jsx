import { useState } from "react";
import ReactCardFlip from "react-card-flip";

const cardData = [
  {
    id: 1,
    title: "Health Care",
    imgSrc: "/bgdoctor.png",
    description: [
      "Technology heals faster, innovation saves lives.",
      "Revolutionizing healthcare one breakthrough at a time.",
      "Curing the world, one tech solution at a time.",
    ],
  },
  {
    id: 2,
    title: "Women And Child Safety",
    imgSrc: "/bgwomen.png",
    description: [
      "Technology heals faster, innovation saves lives.",
      "Revolutionizing healthcare one breakthrough at a time.",
      "Curing the world, one tech solution at a time.",
    ],
  },
  {
    id: 3,
    title: "Agriculture",
    imgSrc: "/bgfarmer.png",
    description: [
      "Sow the seeds of innovation, and grow the future of sustainable farming.",
      "Empowering agriculture with technology for a greener tomorrow.",
      "Innovate today, harvest tomorrow.",
    ],
  },
];

const Themes = () => {
  const [flipCardId, setFlipCardId] = useState(-1); // Track the ID of the flipped card

  const handleFlip = (id) => {
    // Toggle the flip state
    setFlipCardId(id === flipCardId ? -1 : id);
  };

  return (
    <div className="py-8 min-h-auto" id="themes">
      <h1 className="mb-8 text-4xl text-center text-white titles">THEMES</h1>
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap justify-center gap-6">
          {cardData.map((card) => (
            <FlipCard
              key={card.id}
              card={card}
              isFlipped={card.id === flipCardId}
              onClick={() => handleFlip(card.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const FlipCard = ({ card, isFlipped, onClick }) => {
  return (
    <div className="w-full transition-all ease-in-out hover:scale-105 sm:w-64 md:w-72 lg:w-80 h-60 ">
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        {/* Front of the card */}
        <div
          className="flex flex-col items-center w-full h-full overflow-hidden transition-transform transform bg-gray-900 border-[2px] border-gray-700 rounded-3xl shadow-lg cursor-pointer"
          onClick={onClick}>
          <div className="flex items-center justify-center flex-grow">
            <img
              src={card.imgSrc}
              className="object-cover w-full h-48"
              alt={card.title}
            />
          </div>
          <div className="flex items-center justify-center w-full h-auto bg-gray-800">
            <h2 className="mt-3 mb-4 text-lg font-semibold text-center text-white">
              {card.title}
            </h2>
          </div>
        </div>

        {/* Back of the card */}
        <div
          className="flex flex-col items-center justify-center w-full h-[15.6rem] overflow-hidden transition-transform transform bg-gray-900 border-[2px] border-gray-700 rounded-3xl shadow-lg cursor-pointer"
          onClick={onClick}>
          <ul className="flex flex-col gap-1 p-3 text-white ">
            {card.description.map((point, index) => (
              <li className="text-center" key={index}>
                {point}
              </li>
            ))}
          </ul>
        </div>
      </ReactCardFlip>
    </div>
  );
};

export default Themes;
