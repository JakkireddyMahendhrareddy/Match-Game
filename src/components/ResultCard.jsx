const ResultCard = ({
  c,
  onRetry,
  message = "You Win",
  message1 = "You Lose",
}) => {
  return (
    <>
      {c === 12 ? (
        <div className="flex flex-col justify-center items-center bg-green-100 p-6 mt-10 w-11/12 sm:w-3/4 md:w-1/2 rounded-lg shadow-lg mx-auto">
          <h1 className="text-2xl sm:text-3xl font-bold text-green-600 mb-4">
            {message}
          </h1>
          <img
            src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
            alt="You Win"
            className="rounded-full mb-6 h-32 w-32 sm:h-40 sm:w-40 md:h-48 md:w-48"
          />
          <h1 className="text-xl sm:text-2xl font-bold text-green-600 mb-4">
            Score: {c}
          </h1>
          <button
            onClick={onRetry}
            className="bg-green-600 text-white py-2 px-6 rounded-lg hover:bg-green-700 transition text-sm sm:text-base"
          >
            Try Again
          </button>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center bg-red-100 p-6 mt-10 w-11/12 sm:w-3/4 md:w-1/2 rounded-lg shadow-lg mx-auto">
          <h1 className="text-2xl sm:text-3xl font-bold text-red-600 mb-4">
            {message1}
          </h1>
          <img
            src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
            alt="You Lose"
            className="rounded-full mb-6 h-32 w-32 sm:h-40 sm:w-40 md:h-48 md:w-48"
          />
          <h1 className="text-xl sm:text-2xl font-bold text-red-600 mb-4">
            Score: {c}
          </h1>
          <button
            onClick={onRetry}
            className="bg-red-600 text-white py-2 px-6 rounded-lg hover:bg-red-700 transition text-sm sm:text-base"
          >
            Try Again
          </button>
        </div>
      )}
    </>
  );
};
export default ResultCard;
