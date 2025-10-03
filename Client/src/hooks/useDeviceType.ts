import { useEffect, useState } from "react";

type DeviceType = "mobile" | "desktop";

export function useDeviceType(): DeviceType {
  const [deviceType, setDeviceType] = useState<DeviceType>("desktop");

  const getDeviceType = () => {
    const width = window.innerWidth;
    if (width < 1024) return "mobile";
    return "desktop";
  };

  useEffect(() => {
    const handleResize = () => {
      setDeviceType(getDeviceType());
    };

    setDeviceType(getDeviceType());

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return deviceType;
}
