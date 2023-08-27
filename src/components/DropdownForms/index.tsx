import { memo } from "react";

import HostnameDropdown from "./Hostname";
import DiscoveryMethod from "./DiscoveryMethod";
import DiscoveryYear from "./DiscoveryYear";
import DiscoveryFacility from "./DiscoveryFacility";

const DropDownForms = () => {
  return (
    <>
      <HostnameDropdown />
      <DiscoveryMethod />
      <DiscoveryYear />
      <DiscoveryFacility />
    </>
  );
};
const MemoizedTable = memo(DropDownForms);
export default MemoizedTable;
