import DiscoveryFacility from "../components/DiscoveryFacility";
import DiscoveryMethod from "../components/DiscoveryMethod";
import DiscoveryYear from "../components/DiscoveryYear";
import HostnameDropdown from "../components/Hostname";
import Table from "../components/Table";

// flex flex-col md:flex-wrap md:flex-row lg:flex-nowrap

const Homepage = () => {
  return (
    <div className="flex h-screen justify-center">
      <div className="xl:container flex flex-col pt-10 space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 px-4 items-center">
          <HostnameDropdown />
          <DiscoveryMethod />
          <DiscoveryYear />
          <DiscoveryFacility />

          <div className="gap-2 md:col-span-2 md:gap-4 lg:col-span-1 grid md:grid-cols-2 lg:grid-cols-2 lg:gap-2">
            <button className="bg-blue-700 px-5 rounded-xl py-2 w-full text-white">
              Search
            </button>

            <button className="bg-blue-700 px-5 rounded-xl py-2 w-full text-white">
              Clear
            </button>
          </div>
        </div>
        <div className="h-full">
          <Table />
        </div>
      </div>
    </div>
  );
};
export default Homepage;
