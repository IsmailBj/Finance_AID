import { createContext, ReactNode } from "react";
import { useLocalStorage } from "../helpers/useLocalStorage";

interface AvatarContextType {
  avatar: string | null;
  setAvatar: (newAvatar: string | null) => void;
}

const defaultValue: AvatarContextType = {
  avatar: "default",
  setAvatar: () => {},
};

const AvatarContext = createContext<AvatarContextType | undefined>(
  defaultValue
);

export const AvatarProvider = ({ children }: { children: ReactNode }) => {
  const [avatar, setAvatar] = useLocalStorage<string | null>(
    "avatar",
    "default"
  );

  return (
    <AvatarContext.Provider value={{ avatar, setAvatar }}>
      {children}
    </AvatarContext.Provider>
  );
};

export default AvatarContext;
