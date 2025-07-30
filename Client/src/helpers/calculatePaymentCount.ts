type PlanType = "one_time" | "weekly" | "monthly" | "yearly";

interface PaymentCountProps {
  plan: PlanType;
  startDate: string;
  endDate: string;
}

// Helper to remove time from a date
const normalizeDate = (dateStr: string): Date => {
  const date = new Date(dateStr);
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
};

const calculatePaymentCount = ({
  plan,
  startDate,
  endDate,
}: PaymentCountProps): number => {
  const start = normalizeDate(startDate);
  const end = normalizeDate(endDate);

  if (isNaN(start.getTime()) || isNaN(end.getTime()) || end < start) {
    return 0;
  }

  switch (plan) {
    case "one_time":
      return 1;

    case "weekly": {
      const diffInDays = Math.floor(
        (end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)
      );
      return Math.floor(diffInDays / 7) + 1;
    }

    case "monthly": {
      const yearDiff = end.getFullYear() - start.getFullYear();
      const monthDiff = end.getMonth() - start.getMonth();
      const dayAdjustment = end.getDate() >= start.getDate() ? 0 : -1;

      return yearDiff * 12 + monthDiff + 1 + dayAdjustment;
    }

    case "yearly": {
      let years = end.getFullYear() - start.getFullYear();
      if (
        end.getMonth() < start.getMonth() ||
        (end.getMonth() === start.getMonth() && end.getDate() < start.getDate())
      ) {
        years--;
      }
      return years + 1;
    }

    default:
      return 0;
  }
};

export default calculatePaymentCount;
