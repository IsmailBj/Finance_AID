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

export const getTimeZone = (): string => {
  return Intl.DateTimeFormat().resolvedOptions().timeZone || "UTC";
};

const toDate = (dateStr: string): Date => {
  const [year, month, day] = dateStr.split("-").map(Number);
  return new Date(year, month - 1, day);
};

export const isSameDate = (a: string, b: string): boolean => {
  return toDate(a).getTime() === toDate(b).getTime();
};

export const isAfterDate = (a: string, b: string): boolean => {
  return toDate(a).getTime() > toDate(b).getTime();
};

export const isBeforeDate = (a: string, b: string): boolean => {
  return toDate(a).getTime() < toDate(b).getTime();
};
