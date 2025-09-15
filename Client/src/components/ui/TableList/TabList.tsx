import { FC, useState, useEffect } from "react";
import { CheckButton } from "../../common/buttons/Buttons";
import { TabListProps } from "../../../types/types";
import CurrencySymbol from "../../../helpers/CurrencySymbol";
import IconType from "../../common/Icons/Icon";
import ModalPortal from "../../modals/ModalPortal";
import ConfirmationModal from "../../modals/ConfirmationModal";
import {
  getTodayDate,
  isSameDate,
  isAfterDate,
  isBeforeDate,
} from "../../../helpers/DateAndTimeHelpers";

const TabList: FC<TabListProps> = ({ group, onEdit }) => {
  const [currencySymbol, setCurrencySymbol] = useState("A/N");
  const [confirmationModal, setConfirmationModal] = useState(false);
  const [stateColorChange, setStateColorChange] = useState("");
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const currency: string = CurrencySymbol(group.currency_type);
    setCurrencySymbol(currency);
  }, [group.currency_type]);

  useEffect(() => {
    const today = getTodayDate();
    const endDate = group.end_date.split("T")[0];

    if (isSameDate(today, endDate)) {
      setStateColorChange("worning");
    } else if (isAfterDate(today, endDate)) {
      setStateColorChange("unpaid");
    } else if (isBeforeDate(today, endDate)) {
      setStateColorChange("active");
    }
  }, [group.end_date, group.status]);

  const HandleDelete = async () => {
    const groupId = group.id;
    try {
      const res = await fetch(
        `http://localhost:3000/api/group/delete/${groupId}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (res.status === 204) {
        alert("Group deleted successfully");
        window.location.reload();
      } else {
        const err = await res.json();
        alert(err.error || "Failed to delete group");
      }
    } catch (error) {
      console.error("Error deleting group:", error);
      alert("Failed to delete group. Please try again.");
    }
  };

  const handleCheckGroup = async () => {
    const groupId = group.id;
    try {
      const res = await fetch(
        `http://localhost:3000/api/transaction/add-transaction/${groupId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify({
            paid_amount: group.pay_amount,
            category: group.group_category,
            currency_type: group.currency_type,
            method_type: "cash",
            group_name: group.group_name,
            wallet_id: group.wallet_id,
          }),
        }
      );

      const data = await res.json();
      if (res.status === 201) {
        alert(data.message);
        // window.location.reload();
      } else {
        const err = await res.json();
        alert(err.error || "Failed to check group");
      }
    } catch (error) {
      console.error("Error checking group:", error);
      alert("Failed to check group. Please try again.");
    }
  };
  useEffect(() => {
    if (checked) {
      handleCheckGroup();
    }
  }, [checked]);

  return (
    <div className={`list-table ${checked ? "checked" : ""}`}>
      <div key={group.id} className="group-item">
        <div className="selector">
          <CheckButton
            isChecked={checked}
            toggleCheck={() => setChecked(!checked)}
          />
          <IconType iconType={group.group_category} />
        </div>
        <div className="right-section">
          <div className="group-name">{group.group_name}</div>
          <div className="group-categ">{group.group_category}</div>
        </div>
        <div className="center-section">
          <div className="start-date tab">{group.start_date.split("T")[0]}</div>
          <div className="paymentPlan tab">{group.plan_type}</div>
          <div className="end-date tab">{group.end_date.split("T")[0]}</div>
        </div>
        <div className="left-section">
          <div className="budgeted tab">
            {currencySymbol} {group.pay_amount}
          </div>
          <div className="available tab">
            {currencySymbol} {group.plan_amount}
          </div>
          <div className="activity tab">
            {currencySymbol}{" "}
            {Number(group.plan_amount - group.pay_amount).toFixed(2)}
          </div>
        </div>
        <div className={`state-label state-${stateColorChange}`}></div>
      </div>
      {onEdit && (
        <div className="edit-table">
          <div className="edit-table-item table-item">
            <IconType iconType="edit" />
            <span className="text">Edit</span>
          </div>
          <div className="view-table-item table-item">
            <IconType iconType="view" />
            <span className="text">View Info</span>
          </div>
          <div
            className="delete-table-item table-item"
            onClick={() => setConfirmationModal(true)}
          >
            <IconType iconType="delete" />
            <span className="text">Delete</span>
          </div>
        </div>
      )}
      {confirmationModal && (
        <ModalPortal onClose={() => setConfirmationModal(false)}>
          <ConfirmationModal
            message="DELETE"
            onClose={() => setConfirmationModal(false)}
            onConfirm={HandleDelete}
          />
        </ModalPortal>
      )}
    </div>
  );
};

export default TabList;
