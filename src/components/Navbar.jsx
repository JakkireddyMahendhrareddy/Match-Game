const Navbar = ({ c, e }) => {
  return (
    <div className="p-5 w-full flex flex-col md:flex-row justify-between items-center bg-gray-700">
      <div className="flex flex-row space-x-3 mb-3 md:mb-0">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="logo"
          className="h-8 w-8"
        />
        <h1 className="text-lg md:text-2xl text-white">Emoji Game</h1>
      </div>

      <div className="flex flex-row space-x-3">
        <h1 className="text-sm md:text-lg text-white">Score: {c}</h1>
        <h1 className="text-sm md:text-lg text-white">Top Score: {e}</h1>
      </div>
    </div>
  );
};

export default Navbar;
