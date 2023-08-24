import { useState, useEffect } from "react";
import { Dropdown } from "../Dropdown";
import { BASE_URL } from "../../api";
import axios from "axios";

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
      try {
        const response = await axios.get(
          `${BASE_URL}select+distinct+disc_year+FROM+ps&format=json`,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const years = response.data.map((year: Year) => year.disc_year);
        const options = years.map((year: string) => ({
          value: year,
          label: year,
        }));
        setOptions(options);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        console.log(error);
      }
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
