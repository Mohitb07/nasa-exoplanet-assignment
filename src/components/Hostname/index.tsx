import { useEffect, useState } from "react";
import { BASE_URL } from "../../api";
import axios from "axios";

import { Dropdown } from "../Dropdown";

type Option = {
  value: string;
  label: string;
};

type Hostname = {
  hostname: string;
};

export default function HostnameDropdown() {
  const [options, setOptions] = useState<Option[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const getHostnameOptions = async () => {
      try {
        const response = await axios.get(
          `${BASE_URL}select+distinct+hostname+FROM+ps&format=json`,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const hostnames = response.data.map((year: Hostname) => year.hostname);
        const options = hostnames.map((hostname: string) => ({
          value: hostname,
          label: hostname,
        }));
        setOptions(options);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        console.log(error);
      }
    };
    getHostnameOptions();
  }, []);
  return (
    <Dropdown
      options={options}
      values={[]}
      loading={isLoading}
      placeholder="Hostname"
    />
  );
}
