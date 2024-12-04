import React from "react";

const ResultCard = ({ count, onRetry }) => {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg bg-white flex flex-col justify-center items-center h-full mb-20 p-5">
      {/* Image */}
      <img
        className="w-full h-48 object-cover"
        src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
        alt="img"
      />

      <h3 className="text-xl font-semibold text-gray-800">Score</h3>
      <p className="text-gray-600 mt-2">{count}</p>

      <button
        onClick={onRetry} // When the button is clicked, it triggers the restartGame function
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
      >
        Play Again
      </button>
    </div>
  );
};

export default ResultCard;
