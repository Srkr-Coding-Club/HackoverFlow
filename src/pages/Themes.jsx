import { useState } from "react";
import ReactCardFlip from "react-card-flip";

const cardData = [
  {
    id: 1,
    title: "Health Care",
    imgSrc: "/bgdoctor.png",
    description:
      "The theme of Health Care aims to innovate and improve access to medical services, patient care, and overall health management. Participants are encouraged to develop solutions that address challenges such as disease prevention, remote healthcare, and efficient medical resource allocation.",
  },
  {
    id: 2,
    title: "Women And Child Safety",
    imgSrc: "/bgwomen.png",
    description:
      "Women and Child Safety focuses on developing solutions that enhance the protection and well-being of women and children. Participants are encouraged to create technologies or systems that address issues like harassment prevention, emergency response, and safe environments for vulnerable groups.",
  },
  {
    id: 3,
    title: "Agriculture",
    imgSrc: "/bgfarmer.png",
    description:
      "The theme of Agriculture emphasizes creating innovative solutions to improve farming techniques, resource management, and sustainability. Participants are encouraged to address challenges like crop optimization, soil health, and efficient use of water and other resources to boost agricultural productivity.",
  },
];

const Themes = () => {
  const [flipCardId, setFlipCardId] = useState(-1); // Track the ID of the flipped card

  const handleFlip = (id) => {
    // Toggle the flip state
    setFlipCardId(id === flipCardId ? -1 : id);
  };

  return (
    <div className="py-8 min-h-auto">
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
          <p className="p-3 text-center text-white ">{card.description}</p>
        </div>
      </ReactCardFlip>
    </div>
  );
};

export default Themes;
