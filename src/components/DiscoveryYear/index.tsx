import { useState, useEffect } from "react";
import { Dropdown } from "../Dropdown";
import { BASE_URL } from "../../api";

type Option = {
  value: string;
  label: string;
};

type Year = {
  disc_year: string;
};

export default function DiscoveryYear() {
  const [options, setOptions] = useState<Option[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const getDiscoveryYearOptions = async () => {
      const response = await fetch(
        `${BASE_URL}select+distinct+disc_year+FROM+ps&format=json`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Allow-Control-Allow-Origin": "*",
          },
        }
      );
      const data = await response.json();
      const years = data.map((year: Year) => year.disc_year);
      const options = years.map((year: string) => ({
        value: year,
        label: year,
      }));
      setOptions(options);
      setIsLoading(false);
    };
    getDiscoveryYearOptions();
  }, []);

  return (
    <Dropdown
      options={options}
      values={[]}
      loading={isLoading}
      placeholder="Discovery Year"
    />
  );
}
