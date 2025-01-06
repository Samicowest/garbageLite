import { useState } from "react";
import { data } from "@/service/data";
import AddressOverlay from "@/AddressOverlay";
const HubSearch = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [address, setAddress] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedState, setSelectedState] = useState("All");

  const handleClick = (add: string) => {
    setIsOpen(true);
    setAddress(add);
  };

  // Filter based on both state and fruit
  const filteredItems = data.filter((item) => {
    const matchesState =
      selectedState === "All" || item.state === selectedState;
    const matchesFruit = item.hub_name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesState && matchesFruit;
  });

  return (
    <>
      <div className="pt-[50px]">
        <div
          className="bg-white p-6 rounded-lg mx-auto shadow-xl w-[90%] sm:w-[80%] md:w-[60%]"
          onClick={(e) => e.stopPropagation()}
        >
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for recycling..."
            className="w-full p-2 border border-gray-300 rounded-lg mb-4"
          />

          <select
            value={selectedState}
            onChange={(e) => setSelectedState(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg mb-4"
          >
            <option value="All">All States</option>
            <option value="Lagos">Lagos</option>
            <option value="Ogun">Ogun</option>
            <option value="Ibadan">Ibadan</option>
          </select>

          <ul className="max-h-80 overflow-y-auto">
            {filteredItems.length > 0 ? (
              filteredItems.map((item, index) => (
                <li
                  key={index}
                  className="p-2 bg-gray-100 rounded-lg mb-2 hover:bg-gray-200 cursor-pointer"
                  onClick={() => handleClick(item.address)}
                >
                  {item.hub_name} - {item.lga}
                </li>
              ))
            ) : (
              <li className="p-2 text-gray-500">No items found</li>
            )}
          </ul>
        </div>
      </div>
      <AddressOverlay isOpen={isOpen} setIsOpen={setIsOpen} address={address} />
    </>
  );
};

export default HubSearch;
