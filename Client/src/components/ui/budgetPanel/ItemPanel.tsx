import { FC, useState, useEffect } from "react";
import FilterBar from "./FilterBar";
import ListCard from "./CardList";
import TableList from "../TableList/TableList";
import ModalPortal from "../../modals/ModalPortal";
import GroupModal from "../../modals/GroupModal";
import { Group, Wallet } from "../../../types/types";
import ApexChartPie from "../../charts/PieChard";

const ItemPanel: FC = () => {
  const [openModal, setOpenModal] = useState(false);
  const [groups, setGroups] = useState<Group[]>([]);
  const [labels, setLabels] = useState<string[]>([]);
  const [series, setSeries] = useState<number[]>([]);
  const [wallets, setWallets] = useState<Wallet[]>([]);
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
      setGroups(data.groups || []);
      setLabels(data.labels || []);
      setSeries(data.series || []);
      setWallets(data.wallets || []);
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
        <TableList
          onOpenModal={() => setOpenModal(true)}
          groups={groups}
          onEdit={edit}
        />
      </div>
      <div className="cards-holder">
        <ApexChartPie labels={labels} series={series} />
        <ListCard groups={groups} />
      </div>
      {openModal && (
        <ModalPortal onClose={() => setOpenModal(false)}>
          <GroupModal onClose={() => setOpenModal(false)} wallets={wallets} />
        </ModalPortal>
      )}
    </div>
  );
};

export default ItemPanel;
