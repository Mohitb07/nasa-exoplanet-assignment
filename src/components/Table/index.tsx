import { Planet } from "../../context/PlanetData";

type TableProps = {
  searchResult: Planet[];
  isSearching: boolean;
  handleDecreasingOrder: (field: number) => void;
  handleIncreasingOrder: (field: number) => void;
};

const Table = ({
  searchResult,
  isSearching,
  handleDecreasingOrder,
  handleIncreasingOrder,
}: TableProps) => {
  if (isSearching) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="flex flex-col items-center text-base md:text-xl">
          <h1 className="font-bold tracking-wider text-center">Loading....</h1>
        </div>
      </div>
    );
  }

  if (searchResult.length === 0) {
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
  }

  return (
    <div className="p-4 w-full overflow-x-auto">
      <table className="min-w-full text-xs md:text-base table-auto">
        <thead className="text-center">
          <tr className="bg-gray-200 text-gray-600 uppercase text-xs md:text-sm leading-normal">
            <th className="py-2 px-6">
              Planet name
              <span className="flex items-center justify-center mt-2">
                <svg
                  onClick={() => handleDecreasingOrder(0)}
                  className="cursor-pointer -mt-6"
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  fill="#000000"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.0686 15H7.9313C7.32548 15 7.02257 15 6.88231 15.1198C6.76061 15.2237 6.69602 15.3797 6.70858 15.5392C6.72305 15.7231 6.93724 15.9373 7.36561 16.3657L11.4342 20.4343C11.6322 20.6323 11.7313 20.7313 11.8454 20.7684C11.9458 20.8011 12.054 20.8011 12.1544 20.7684C12.2686 20.7313 12.3676 20.6323 12.5656 20.4343L16.6342 16.3657C17.0626 15.9373 17.2768 15.7231 17.2913 15.5392C17.3038 15.3797 17.2392 15.2237 17.1175 15.1198C16.9773 15 16.6744 15 16.0686 15Z"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <svg
                  onClick={() => handleIncreasingOrder(0)}
                  className="cursor-pointer -ml-2"
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  fill="#000000"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.9313 9.00005H16.0686C16.6744 9.00005 16.9773 9.00005 17.1175 8.88025C17.2393 8.7763 17.3038 8.62038 17.2913 8.46082C17.2768 8.27693 17.0626 8.06274 16.6342 7.63436L12.5656 3.56573C12.3676 3.36772 12.2686 3.26872 12.1544 3.23163C12.054 3.199 11.9458 3.199 11.8454 3.23163C11.7313 3.26872 11.6323 3.36772 11.4342 3.56573L7.36561 7.63436C6.93724 8.06273 6.72305 8.27693 6.70858 8.46082C6.69602 8.62038 6.76061 8.7763 6.88231 8.88025C7.02257 9.00005 7.32548 9.00005 7.9313 9.00005Z"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </th>
            <th className="py-3 px-6">
              Hostname
              <span className="flex items-center justify-center mt-2">
                <svg
                  onClick={() => handleDecreasingOrder(1)}
                  className="cursor-pointer -mt-6"
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  fill="#000000"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.0686 15H7.9313C7.32548 15 7.02257 15 6.88231 15.1198C6.76061 15.2237 6.69602 15.3797 6.70858 15.5392C6.72305 15.7231 6.93724 15.9373 7.36561 16.3657L11.4342 20.4343C11.6322 20.6323 11.7313 20.7313 11.8454 20.7684C11.9458 20.8011 12.054 20.8011 12.1544 20.7684C12.2686 20.7313 12.3676 20.6323 12.5656 20.4343L16.6342 16.3657C17.0626 15.9373 17.2768 15.7231 17.2913 15.5392C17.3038 15.3797 17.2392 15.2237 17.1175 15.1198C16.9773 15 16.6744 15 16.0686 15Z"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <svg
                  onClick={() => handleIncreasingOrder(1)}
                  className="cursor-pointer -ml-2"
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  fill="#000000"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.9313 9.00005H16.0686C16.6744 9.00005 16.9773 9.00005 17.1175 8.88025C17.2393 8.7763 17.3038 8.62038 17.2913 8.46082C17.2768 8.27693 17.0626 8.06274 16.6342 7.63436L12.5656 3.56573C12.3676 3.36772 12.2686 3.26872 12.1544 3.23163C12.054 3.199 11.9458 3.199 11.8454 3.23163C11.7313 3.26872 11.6323 3.36772 11.4342 3.56573L7.36561 7.63436C6.93724 8.06273 6.72305 8.27693 6.70858 8.46082C6.69602 8.62038 6.76061 8.7763 6.88231 8.88025C7.02257 9.00005 7.32548 9.00005 7.9313 9.00005Z"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </th>
            <th className="py-3 px-6">
              Discovery method
              <span className="flex items-center justify-center mt-2">
                <svg
                  onClick={() => handleDecreasingOrder(2)}
                  className="cursor-pointer -mt-6"
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  fill="#000000"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.0686 15H7.9313C7.32548 15 7.02257 15 6.88231 15.1198C6.76061 15.2237 6.69602 15.3797 6.70858 15.5392C6.72305 15.7231 6.93724 15.9373 7.36561 16.3657L11.4342 20.4343C11.6322 20.6323 11.7313 20.7313 11.8454 20.7684C11.9458 20.8011 12.054 20.8011 12.1544 20.7684C12.2686 20.7313 12.3676 20.6323 12.5656 20.4343L16.6342 16.3657C17.0626 15.9373 17.2768 15.7231 17.2913 15.5392C17.3038 15.3797 17.2392 15.2237 17.1175 15.1198C16.9773 15 16.6744 15 16.0686 15Z"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <svg
                  onClick={() => handleIncreasingOrder(2)}
                  className="cursor-pointer -ml-2"
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  fill="#000000"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.9313 9.00005H16.0686C16.6744 9.00005 16.9773 9.00005 17.1175 8.88025C17.2393 8.7763 17.3038 8.62038 17.2913 8.46082C17.2768 8.27693 17.0626 8.06274 16.6342 7.63436L12.5656 3.56573C12.3676 3.36772 12.2686 3.26872 12.1544 3.23163C12.054 3.199 11.9458 3.199 11.8454 3.23163C11.7313 3.26872 11.6323 3.36772 11.4342 3.56573L7.36561 7.63436C6.93724 8.06273 6.72305 8.27693 6.70858 8.46082C6.69602 8.62038 6.76061 8.7763 6.88231 8.88025C7.02257 9.00005 7.32548 9.00005 7.9313 9.00005Z"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </th>
            <th className="py-3 px-6">
              Discovery year
              <span className="flex items-center justify-center mt-2">
                <svg
                  onClick={() => handleDecreasingOrder(3)}
                  className="cursor-pointer -mt-6"
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  fill="#000000"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.0686 15H7.9313C7.32548 15 7.02257 15 6.88231 15.1198C6.76061 15.2237 6.69602 15.3797 6.70858 15.5392C6.72305 15.7231 6.93724 15.9373 7.36561 16.3657L11.4342 20.4343C11.6322 20.6323 11.7313 20.7313 11.8454 20.7684C11.9458 20.8011 12.054 20.8011 12.1544 20.7684C12.2686 20.7313 12.3676 20.6323 12.5656 20.4343L16.6342 16.3657C17.0626 15.9373 17.2768 15.7231 17.2913 15.5392C17.3038 15.3797 17.2392 15.2237 17.1175 15.1198C16.9773 15 16.6744 15 16.0686 15Z"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <svg
                  onClick={() => handleIncreasingOrder(3)}
                  className="cursor-pointer -ml-2"
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  fill="#000000"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.9313 9.00005H16.0686C16.6744 9.00005 16.9773 9.00005 17.1175 8.88025C17.2393 8.7763 17.3038 8.62038 17.2913 8.46082C17.2768 8.27693 17.0626 8.06274 16.6342 7.63436L12.5656 3.56573C12.3676 3.36772 12.2686 3.26872 12.1544 3.23163C12.054 3.199 11.9458 3.199 11.8454 3.23163C11.7313 3.26872 11.6323 3.36772 11.4342 3.56573L7.36561 7.63436C6.93724 8.06273 6.72305 8.27693 6.70858 8.46082C6.69602 8.62038 6.76061 8.7763 6.88231 8.88025C7.02257 9.00005 7.32548 9.00005 7.9313 9.00005Z"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </th>
            <th className="py-3 px-6">
              Discovery facility
              <span className="flex items-center justify-center mt-2">
                <svg
                  onClick={() => handleDecreasingOrder(4)}
                  className="cursor-pointer -mt-6"
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  fill="#000000"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.0686 15H7.9313C7.32548 15 7.02257 15 6.88231 15.1198C6.76061 15.2237 6.69602 15.3797 6.70858 15.5392C6.72305 15.7231 6.93724 15.9373 7.36561 16.3657L11.4342 20.4343C11.6322 20.6323 11.7313 20.7313 11.8454 20.7684C11.9458 20.8011 12.054 20.8011 12.1544 20.7684C12.2686 20.7313 12.3676 20.6323 12.5656 20.4343L16.6342 16.3657C17.0626 15.9373 17.2768 15.7231 17.2913 15.5392C17.3038 15.3797 17.2392 15.2237 17.1175 15.1198C16.9773 15 16.6744 15 16.0686 15Z"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <svg
                  onClick={() => handleIncreasingOrder(4)}
                  className="cursor-pointer -ml-2"
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  fill="#000000"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.9313 9.00005H16.0686C16.6744 9.00005 16.9773 9.00005 17.1175 8.88025C17.2393 8.7763 17.3038 8.62038 17.2913 8.46082C17.2768 8.27693 17.0626 8.06274 16.6342 7.63436L12.5656 3.56573C12.3676 3.36772 12.2686 3.26872 12.1544 3.23163C12.054 3.199 11.9458 3.199 11.8454 3.23163C11.7313 3.26872 11.6323 3.36772 11.4342 3.56573L7.36561 7.63436C6.93724 8.06273 6.72305 8.27693 6.70858 8.46082C6.69602 8.62038 6.76061 8.7763 6.88231 8.88025C7.02257 9.00005 7.32548 9.00005 7.9313 9.00005Z"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </th>
          </tr>
        </thead>
        <tbody>
          {searchResult.map((planet) => (
            <tr key={planet[0]} className="text-center">
              <td className="border px-4 py-2">{planet[0]}</td>
              <td className="border px-4 py-2">{planet[1]}</td>
              <td className="border px-4 py-2">{planet[2]}</td>
              <td className="border px-4 py-2">{planet[3]}</td>
              <td className="border px-4 py-2">{planet[4]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Table;
