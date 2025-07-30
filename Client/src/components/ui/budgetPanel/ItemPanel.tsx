import { FC, useState, useEffect } from "react";
import FilterBar from "./FilterBar";
import AutoAssignPanel from "./AutoAssignCard";
import TableList from "./TableList";
import ModalPortal from "../../modals/ModalPortal";
import GroupModal from "../../modals/GroupModal";
import { Group } from "../../../types/types";
import ApexChartPie from "../../charts/PieChard";

const ItemPanel: FC = () => {
  const [openModal, setOpenModal] = useState(false);
  const [groups, setGroups] = useState<Group[]>([]);
  const [edit, onEdit] = useState(Boolean);

  const fetchGroups = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/group/get-groups", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      if (!res.ok) throw new Error("Failed to fetch groups");
      const data = await res.json();
      setGroups(data);
    } catch (err) {
      alert(err instanceof Error ? err.message : "An error occurred");
    }
  };

  useEffect(() => {
    fetchGroups();
  }, []);

  return (
    <div className="item-panel-section">
      <div className="item-panel">
        <FilterBar
          onOpenModal={() => setOpenModal(true)}
          onEdit={() => onEdit(!edit)}
        />
        <TableList onOpenModal={() => setOpenModal(true)} groups={groups} />
      </div>
      <div className="cards-holder">
        <ApexChartPie
          labels={["Apple", "Mango", "Orange", "Watermelon", "Banana"]}
        />
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
