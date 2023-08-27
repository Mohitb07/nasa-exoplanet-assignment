import { Planet } from "../types";

export const processColumn = (parsedData: Planet[] = [], column: number) => {
  const parsedColumn = parsedData.map((row) => row[column]);
  const slicedParsedColumn = parsedColumn.slice(1);
  const uniqueSet = new Set(slicedParsedColumn);
  const list = Array.from(uniqueSet);

  const options = list.map((hostname) => {
    return {
      value: hostname,
      label: hostname,
    };
  });

  return options;
};
