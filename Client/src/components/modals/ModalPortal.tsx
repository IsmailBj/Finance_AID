// components/ModalPortal.tsx
import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";

type ModalPortalProps = {
  children: React.ReactNode;
  onClose: () => void;
};

const ModalPortal: React.FC<ModalPortalProps> = ({ children, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  const modalRoot = document.getElementById("modal-root");
  if (!modalRoot) return null;

  return ReactDOM.createPortal(
    <div className="modal-overlay">
      <div className="modal-container" ref={modalRef}>
        {children}
      </div>
    </div>,
    modalRoot
  );
};

export default ModalPortal;
