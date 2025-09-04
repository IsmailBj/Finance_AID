import { FC, useState } from "react";
import LoginModal from "../components/modals/LoginModal";
import RegisterModal from "../components/modals/RegisterModal";
import WaveAnimated from "../components/common/animations/waveAnimated";

const LandingPage: FC = () => {
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  return (
    <div className="landing-page">
      <div className="landing-container">
        {(!showRegisterModal && (
          <LoginModal showRegister={setShowRegisterModal} />
        )) || <RegisterModal showRegister={setShowRegisterModal} />}
      </div>
      <WaveAnimated />
    </div>
  );
};

export default LandingPage;
