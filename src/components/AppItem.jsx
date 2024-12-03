const AppItem = ({ appDetails, id, listChange }) => {
  const { emojiName, emojiUrl } = appDetails;

  const changeImages = () => {
    listChange(id);
  };

  return (
    <button
      onClick={changeImages}
      className="flex flex-col items-center bg-orange-100 shadow-lg p-3 sm:p-4 rounded-lg transition transform hover:scale-105"
    >
      <img
        src={emojiUrl}
        alt={emojiName}
        className="h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 mb-2"
      />
      <p className="text-xs sm:text-sm md:text-base font-semibold">
        {emojiName}
      </p>
    </button>
  );
};
export default AppItem;
