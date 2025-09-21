import { FC, useState } from "react";
import LoginModal from "../components/modals/LoginModal";
import RegisterModal from "../components/modals/RegisterModal";
import LanguageSelector from "../components/common/bars/LanguageSelector";

const LandingPage: FC = () => {
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  return (
    <div className="landing-page">
      <div className="top-bar">
        <LanguageSelector />
      </div>
      <div className="landing-container">
        {(!showRegisterModal && (
          <LoginModal showRegister={setShowRegisterModal} />
        )) || <RegisterModal showRegister={setShowRegisterModal} />}
      </div>
    </div>
  );
};

export default LandingPage;
