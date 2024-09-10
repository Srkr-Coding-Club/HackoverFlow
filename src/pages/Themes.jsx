const cardData = [
  { id: 1, title: "Health Care", imgSrc: "/bgdoctor.png" },
  { id: 2, title: "Women And Child Safety", imgSrc: "/bgwomen.png" },
  { id: 3, title: "Agriculture", imgSrc: "/bgfarmer.png" },
];

const Themes = () => {
  return (
    <div className="min-h-auto bg-gradient-to-r from-gray-800 to-gray-900 py-8">
      <h1 className="text-4xl text-white text-center mb-8 titles">THEMES</h1>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-6">
          {cardData.map((card) => (
            <div
              key={card.id}
              className="w-full sm:w-64 md:w-72 lg:w-80 flex flex-col items-center bg-gray-900 border border-gray-700 rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105"
            >
              <img
                src={card.imgSrc}
                alt={card.title}
                className="w-auto h-48 object-cover"
              />
              <div className="flex-grow flex items-center justify-center bg-gray-800 w-full">
                <h2 className="text-lg font-semibold mb-4 mt-3 text-white text-center">
                  {card.title}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Themes;
