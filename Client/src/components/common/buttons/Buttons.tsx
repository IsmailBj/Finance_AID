import chardIcon from "../../../assets/icons/chardIcon.svg";
import budgetIcon from "../../../assets/icons/moneyIcon.svg";
import { FaCheck } from "react-icons/fa";
import { CiSettings } from "react-icons/ci";
import { CheckButtonProps } from "../../../types/types";

export const BranchTreeBtn = () => {
  return (
    <a className="icon-block" href="/">
      {/* <FaPlus /> */}
    </a>
  );
};

export const DashboardBtn = () => {
  return (
    <a className="icon-block" href="/">
      <img src={chardIcon} alt="chard icon missing" />
    </a>
  );
};

export const BudgetIconBtn = () => {
  return (
    <a className="icon-block" href="/">
      <img src={budgetIcon} alt="budget icon missing" />
    </a>
  );
};

export const SettingsBtn = () => {
  return (
    <a className="icon-block" href="/">
      <CiSettings />
    </a>
  );
};

export const CheckButton: React.FC<CheckButtonProps> = ({
  isChecked,
  toggleCheck,
}) => {
  return (
    <button
      type="button"
      className={`check-button ${isChecked ? "checked" : ""}`}
      aria-pressed={isChecked}
      onClick={toggleCheck}
    >
      <span className="checkmark">{isChecked ? <FaCheck /> : ""}</span>
    </button>
  );
};
