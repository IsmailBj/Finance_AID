import { Group, TransactionType } from "../types/types";

export const filterGroups = (groups: Group[], selectedTab: string): Group[] => {
  // First remove paid groups
  const activeGroups = groups.filter((group) => group.status !== "paid");

  // Then sort based on selectedTab
  return [...activeGroups].sort((a, b) => {
    switch (selectedTab) {
      case "from":
        return (
          new Date(a.start_date).getTime() - new Date(b.start_date).getTime()
        );
      case "plan":
        return (a.plan_type || "").localeCompare(b.plan_type || "");
      case "expires":
        return new Date(a.end_date).getTime() - new Date(b.end_date).getTime();
      case "cost":
        return (a.pay_amount || 0) - (b.pay_amount || 0);
      case "available":
        return (a.plan_amount || 0) - (b.plan_amount || 0);
      // ignore totalLTP for now
      default:
        return 0;
    }
  });
};

export const filterTransaction = (
  transactions: TransactionType[],
  filterBy: string
): TransactionType[] => {
  switch (filterBy) {
    case "Date":
      return [...transactions].sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      );
    case "Amount":
      return [...transactions].sort((a, b) => b.paid_amount - a.paid_amount);
    case "Category":
      return [...transactions].sort((a, b) =>
        a.category.localeCompare(b.category)
      );
    default:
      return transactions;
  }
};
