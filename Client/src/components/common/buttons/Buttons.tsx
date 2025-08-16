import { FaCheck } from "react-icons/fa";
import { CheckButtonProps } from "../../../types/types";

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
