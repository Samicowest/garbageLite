import { useDataContext } from "@/service/context";
import { useState } from "react";
import { data } from "@/service/data";
const Overlay = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { toggleOverlay, overlayVisible } = useDataContext();
  const [selectedState, setSelectedState] = useState("All");

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
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 transition-opacity duration-300 ${
        overlayVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      onClick={toggleOverlay}
    >
      <div
        className="bg-white p-6 rounded-lg shadow-xl w-[90%] sm:w-[80%] md:w-[60%]"
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

        <ul className="max-h-60 overflow-y-auto">
          {filteredItems.length > 0 ? (
            filteredItems.map((item, index) => (
              <li
                key={index}
                className="p-2 bg-gray-100 rounded-lg mb-2 hover:bg-gray-200 cursor-pointer"
                onClick={toggleOverlay}
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
  );
};

export default Overlay;
