import React, { useState } from "react";
import { FilterBarProps } from "../../../types/types";
import { FaPlus, FaUndo, FaSearch } from "react-icons/fa";

const FilterBar: React.FC<FilterBarProps> = ({ onOpenModal, onEdit }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    console.log("Search for:", searchQuery);
    // Replace this with your actual search logic
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="toolbar">
      <div className="toolbar-left">
        <button className="toolbar-btn" onClick={() => onOpenModal()}>
          <FaPlus /> Add
        </button>
        <button className="toolbar-icon-btn" onClick={() => onEdit()}>
          <FaUndo /> Edit
        </button>
      </div>

      <div className="center_search_bar">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Search items..."
        />
        <button className="toolbar-btn" onClick={handleSearch}>
          <FaSearch /> Search
        </button>
      </div>
    </div>
  );
};

export default FilterBar;
