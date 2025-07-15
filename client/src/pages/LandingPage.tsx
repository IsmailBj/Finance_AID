import { FC, useState } from "react";
import LoginModal from "../components/modals/loginModal";
import RegisterModal from "../components/modals/RegisterModal";

const LandingPage: FC = () => {
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  return (
    <div className="landing-page">
      <div className="landing-container">
        {(!showRegisterModal && (
          <LoginModal showRegister={setShowRegisterModal} />
        )) || <RegisterModal showRegister={setShowRegisterModal} />}
      </div>
    </div>
  );
};

export default LandingPage;
