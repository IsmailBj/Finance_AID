import { FC, useState } from "react";
import FilterBar from "./FilterBar";
import AutoAssignPanel from "./AutoAssignCard";
import TableList from "./TableList";
import ModalPortal from "../../modals/ModalPortal";
import GroupModal from "../../modals/GroupModal";

const ItemPanel: FC = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="item-panel-section">
      <div className="item-panel">
        <FilterBar onOpenModal={() => setOpenModal(true)} />
        <TableList onOpenModal={() => setOpenModal(true)} />
      </div>
      <div className="cards-holder">
        <AutoAssignPanel />
      </div>
      {openModal && (
        <ModalPortal onClose={() => setOpenModal(false)}>
          <GroupModal onClose={() => setOpenModal(false)} />
        </ModalPortal>
      )}
    </div>
  );
};

export default ItemPanel;
