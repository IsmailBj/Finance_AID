import React from "react";
// import "./Toolbar.scss";
import {
  FaPlus,
  FaUndo,
  FaRedo,
  FaClock,
  FaThLarge,
  FaList,
} from "react-icons/fa";

const ItemControls: React.FC = () => {
  return (
    <div className="toolbar">
      <div className="toolbar-left">
        <button className="toolbar-btn">
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

export default ItemControls;
