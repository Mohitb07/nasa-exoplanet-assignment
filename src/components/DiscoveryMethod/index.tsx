import { useEffect, useState } from "react";
import { readString } from "react-papaparse";
import DataFile from "./data.csv";
import Papa from "papaparse";

import { Dropdown } from "../Dropdown";
import { readFile } from "fs";

type Option = {
  value: string;
  label: string;
};

type Method = {
  discoverymethod: string;
};

export default function DiscoveryMethod() {
  const [options, setOptions] = useState<Option[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // useEffect(() => {
  //   const getDiscoveryMethods = async () => {
  //     try {
  //       const response = await axios.get(
  //         `${BASE_URL}select+distinct+discoverymethod+FROM+ps&format=json`,
  //         {
  //           headers: {
  //             "Content-Type": "application/json",
  //           },
  //         }
  //       );
  //       const methods = response.data.map(
  //         (year: Method) => year.discoverymethod
  //       );
  //       const options = methods.map((method: string) => ({
  //         value: method,
  //         label: method,
  //       }));
  //       setOptions(options);
  //       setIsLoading(false);
  //     } catch (error) {
  //       setIsLoading(false);
  //       console.log(error);
  //     }
  //   };
  //   getDiscoveryMethods();
  // }, []);

  useEffect(() => {
    const csvFilePath = import.meta.env.BASE_URL + "data.csv";

    fetch(csvFilePath)
      .then((response) => response.text())
      .then((data) => {
        Papa.parse(data, {
          complete: (result) => {
            const csvData = result.data;
            let dataStartIndex = csvData.findIndex(
              (row) => row[""] === "hostname"
            );
            dataStartIndex += 2; // Increment by 2 to skip both header rows

            // Step 2: Extract the "disc_year" column values
            const discYearColumn = csvData
              .slice(dataStartIndex)
              .map((row) => row["_1"]);

            // Step 3: Filter out empty and "disc_year" values
            const uniqueDiscYears = new Set(
              discYearColumn.filter(
                (value) => value !== "" && value !== "disc_year"
              )
            );

            // Step 4: Convert set to array
            const uniqueDiscYearsArray = Array.from(uniqueDiscYears);

            console.log(uniqueDiscYearsArray);
          },
          delimiter: ",",
          escapeChar: '"',
          skipEmptyLines: true,
          header: true,
          // Other PapaParse configuration options here
        });
      });
  }, []);

  return (
    <>
      <Dropdown
        options={options}
        values={[]}
        loading={isLoading}
        placeholder="Discovery Method"
      />
    </>
  );
}
