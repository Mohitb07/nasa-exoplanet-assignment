type SearchButtonProps = {
  onClick: () => void;
};

const SearchButton = ({ onClick }: SearchButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="bg-blue-700 px-5 rounded-xl py-2 w-full text-white"
    >
      Search
    </button>
  );
};
export default SearchButton;
