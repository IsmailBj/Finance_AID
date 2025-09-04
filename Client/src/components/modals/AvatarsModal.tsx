import { FC } from "react";
import Avatar from "../common/Avatar";

interface AvatarModalProps {
  onClose: () => void;
}

const AvatarModal: FC<AvatarModalProps> = ({ onClose }) => {
  return (
    <div className="avatar-selection-modal">
      <div className="go-backTab" onClick={onClose}>
        Go Back
      </div>
      <div className="main-avatar">
        <div className="profile-title">Profile Picture</div>
        <div className="img-placeholder">
          <Avatar size={100} />
        </div>
        <div className="change-avatar">Change Avatar</div>
      </div>
      <div className="avatar-gallery">
        <div className="avatar-list">
          <Avatar size={100} />
          <Avatar size={100} />
          <Avatar size={100} />
          <Avatar size={100} />
        </div>
      </div>
    </div>
  );
};

export default AvatarModal;
