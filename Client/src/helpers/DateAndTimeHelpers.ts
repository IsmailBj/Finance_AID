export const getTodayDate = (): string => {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
};

export const getDayOfWeek = (): string => {
  const day = new Date();
  return day.toLocaleDateString(undefined, { weekday: "long" });
};

export const getTime = (): string => {
  const time = new Date();
  return time.toLocaleTimeString(undefined, {
    hour: "2-digit",
    minute: "2-digit",
  });
};
