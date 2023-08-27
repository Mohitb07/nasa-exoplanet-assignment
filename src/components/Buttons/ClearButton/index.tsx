type ClearButtonProps = {
  onClick: () => void;
};

const ClearButton = ({ onClick }: ClearButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="bg-blue-700 px-5 rounded-xl py-2 w-full text-white"
    >
      Clear
    </button>
  );
};
export default ClearButton;
