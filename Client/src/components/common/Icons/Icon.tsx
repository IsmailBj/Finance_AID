import { FC } from "react";
import {
  FaHome,
  FaPaperPlane,
  FaHospital,
  FaHouseUser,
  FaOtter,
  FaTrash,
  FaEdit,
  FaEye,
} from "react-icons/fa";
interface IconTypeProps {
  iconType: string;
}

const IconType: FC<IconTypeProps> = ({ iconType }) => {
  let IconHolder: FC = FaOtter;
  switch (iconType) {
    case "Home":
      IconHolder = FaHome;
      break;
    case "Bills":
      IconHolder = FaPaperPlane;
      break;
    case "Medical":
      IconHolder = FaHospital;
      break;
    case "Rent":
      IconHolder = FaHouseUser;
      break;
    case "Other":
      IconHolder = FaOtter;
      break;
    case "edit":
      IconHolder = FaEdit;
      break;
    case "delete":
      IconHolder = FaTrash;
      break;
    case "view":
      IconHolder = FaEye;
      break;
    default:
      IconHolder = FaOtter;
      break;
  }
  return <IconHolder />;
};

export default IconType;
