import AppRoutes from "./router/AppRoutes";
import { AvatarProvider } from "./contexts/AvatarContext";

const App = () => {
  return (
    <AvatarProvider>
      <AppRoutes />
    </AvatarProvider>
  );
};

export default App;
