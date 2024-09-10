

const cardData = [
  { id: 1, title: "Health Care", imgSrc: "/bgdoctor.png" },
  { id: 2, title: "Women And Child Safety", imgSrc: "/bgwomen.png" },
  { id: 3, title: "Agriculture", imgSrc: "/bgfarmer.png" },
  
];

const Themes = () => {
  return (
    <div className="min-h-auto bg-gradient-to-r from-gray-800 to-gray-900 py-8">
      <h1 className="text-4xl text-white text-center mb-8 titles">THEMES</h1>
      <div className="flex flex-wrap justify-center gap-6 p-4">
        {cardData.map((card) => (
          <div
            key={card.id}
            className="w-32 sm:w-60 md:w-72 lg:w-80 h-fit flex flex-col items-center border border-gray-500 rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105"
          >
            <img
              src={card.imgSrc}
              alt={card.title}
              className="w-2/4 h-2/4  object-cover"
            />
            <div className="flex-grow flex items-center justify-center bg-gray-800 w-full">
              <h2 className="text-sm font-semibold mb-4 mt-3 text-white">{card.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Themes;
