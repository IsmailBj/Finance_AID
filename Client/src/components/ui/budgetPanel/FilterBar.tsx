import React, { useState } from "react";
import {
  FaPlus,
  FaUndo,
  FaRedo,
  FaClock,
  FaThLarge,
  FaList,
  FaSearch,
} from "react-icons/fa";

interface FilterBarProps {
  setOpenModal: (open: boolean) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({ setOpenModal }) => {
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
        <button className="toolbar-btn" onClick={() => setOpenModal(true)}>
          <FaPlus /> Category Group
        </button>
        <button className="toolbar-icon-btn">
          <FaUndo /> Undo
        </button>
        <button className="toolbar-icon-btn">
          <FaRedo /> Redo
        </button>
        <button className="toolbar-icon-btn">
          <FaClock /> Recent Moves
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

      <div className="toolbar-right">
        <button className="view-toggle active">
          <FaThLarge />
        </button>
        <button className="view-toggle">
          <FaList />
        </button>
      </div>
    </div>
  );
};

export default FilterBar;
