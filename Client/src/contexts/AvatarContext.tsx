import { createContext, useState, ReactNode } from "react";

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
  const [avatar, setAvatar] = useState<string | null>(null);

  return (
    <AvatarContext.Provider value={{ avatar, setAvatar }}>
      {children}
    </AvatarContext.Provider>
  );
};

export default AvatarContext;
