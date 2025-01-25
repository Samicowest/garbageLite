import React, { useState } from "react";
import { data } from "@/service/data";
import CustomSelect from "@/CustomSelect";
import AddressOverlay from "@/AddressOverlay";

const HubSearch: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [address, setAddress] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedState, setSelectedState] = useState("All");
  const options = [
    { value: "All", label: "All States" },
    { value: "Lagos", label: "Lagos" },
    { value: "Ogun", label: "Ogun" },
    { value: "Ibadan", label: "Ibadan" },
  ];

  const filteredItems = data.filter((item) => {
    const matchesState =
      selectedState === "All" || item.state === selectedState ;
    const matchesFruit = item.hub_name.toLowerCase().includes(searchQuery.toLowerCase()) || item.state.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesState && matchesFruit;
  });

  const handleClick = (add: string) => {
    setIsOpen(true);
    setAddress(add);
  };

  return (
    <>
      <div className="pt-[50px] mt-[20px]">
        <div
          className="bg-white p-6 rounded-lg mx-auto shadow-xl w-[90%] sm:w-[80%] md:w-[60%]"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col md:flex-row gap-4 ">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for recycling..."
              className="w-full md:w-[70%] p-2 border border-gray-300 rounded-lg mb-4"
            />

            <CustomSelect
              value={selectedState}
              onChange={(e) => setSelectedState(e.target.value)}
              options={options}
            />
          </div>

          <ul className="max-h-80 overflow-y-auto">
            {filteredItems.length > 0 ? (
              filteredItems.map((item, index) => (
                <li
                  key={index}
                  className="p-2 bg-gray-100 rounded-lg mb-2 hover:bg-gray-200 cursor-pointer"
                  onClick={() => handleClick(item.address)}
                >
                  {item.hub_name} - {item.lga} - {item.state}
                </li>
              ))
            ) : (
              <li className="p-2 bg-gray-100 rounded-lg mb-2">
                No items found
              </li>
            )}
          </ul>
        </div>
      </div>
      <AddressOverlay isOpen={isOpen} setIsOpen={setIsOpen} address={address} />
    </>
  );
};

export default HubSearch;
