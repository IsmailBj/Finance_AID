import { FC, useState } from "react";
import Avatar from "../common/Avatar";
import { useAvatar } from "../../hooks/useAvatar";

interface AvatarModalProps {
  onClose: () => void;
}

const AvatarModal: FC<AvatarModalProps> = ({ onClose }) => {
  const [selectedAvatar, setSelectedAvatar] = useState<string | null>(null);
  const { setAvatar } = useAvatar();

  const onSave = async () => {
    if (selectedAvatar) {
      try {
        const res = await fetch(
          "http://localhost:3000/api/auth/settings/avatar",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
            body: JSON.stringify({ avatar: selectedAvatar }),
          }
        );
        const data = await res.json();
        if (res.ok) {
          setAvatar(data.avatar || selectedAvatar);
          onClose();
        } else {
          alert(data.error || "Failed to update avatar");
        }
      } catch (error) {
        alert("Error Avatar Could not be saved: " + error);
        console.error("Error saving avatar: ", error);
      }
    }
  };

  return (
    <>
      <div className="avatar-selection-modal">
        <div className="list-header">
          <div className="go-backTab" onClick={onClose}>
            Go Back
          </div>
          <div className="profile-title">Profile Picture</div>
          <input
            type="button"
            value="Save"
            className={`save-avatar ${selectedAvatar ? "enable" : "disable"}`}
            onClick={onSave}
          />
        </div>
        <div className="main-avatar">
          <div className="img-placeholder">
            <Avatar size={100} src={selectedAvatar} />
          </div>
          <div className="preview-avatar">Change Avatar</div>
        </div>
        <div className="avatar-gallery">
          <div className="avatar-list">
            <div
              className="avatar-list__item"
              onClick={() => setSelectedAvatar("default")}
            >
              <Avatar size={100} />
            </div>
            <div
              className="avatar-list__item"
              onClick={() => setSelectedAvatar("human")}
            >
              <Avatar size={100} src="human" />
            </div>
            <div
              className="avatar-list__item"
              onClick={() => setSelectedAvatar("packman")}
            >
              <Avatar size={100} src="packman" />
            </div>
            <div
              className="avatar-list__item"
              onClick={() => setSelectedAvatar("ninja")}
            >
              <Avatar size={100} src="ninja" />
            </div>
            <div className="avatar-list__item">
              <Avatar size={100} />
            </div>
            <div className="avatar-list__item">
              <Avatar size={100} />
            </div>
            <div className="avatar-list__item">
              <Avatar size={100} />
            </div>
            <div className="avatar-list__item">
              <Avatar size={100} />
            </div>
            <div className="avatar-list__item">
              <Avatar size={100} />
            </div>
            <div className="avatar-list__item">
              <Avatar size={100} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AvatarModal;
