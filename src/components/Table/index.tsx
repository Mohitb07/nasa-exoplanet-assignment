const Table = () => {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="flex flex-col items-center text-base md:text-xl">
        <h1 className="font-bold tracking-wider text-center">
          Exoplanets are planets outside the Solar System.
        </h1>
        <h1 className="font-bold tracking-wider text-center">
          Here you can query{" "}
          <span className="text-blue-500">NASA's Exoplanet Archive</span> and
          find the one you love the most.
        </h1>
      </div>
    </div>
  );
};
export default Table;
