import { FC, useState, useEffect } from "react";
import { CheckButton } from "../../common/buttons/Buttons";
import { TabListProps } from "../../../types/types";
import CurrencySymbol from "../../../helpers/CurrencySymbol";
import IconType from "../../common/Icons/Icon";

const TabList: FC<TabListProps> = ({ group }) => {
  const [currencySymbol, setCurrencySymbol] = useState("A/N");

  useEffect(() => {
    const currency: string = CurrencySymbol(group.currency_type);
    setCurrencySymbol(currency);
  }, [group.currency_type]);

  return (
    <div className="list-table">
      <div key={group.id} className="group-item">
        <div className="selector">
          <CheckButton isChecked={false} />
          <IconType iconType={group.group_category} />
        </div>
        <div className="right-section">
          <div className="group-name">{group.group_name}</div>
          <div className="group-name">{group.group_category}</div>
        </div>
        <div className="center-section">
          <div className="payment-date-info">
            <div className="start-date">{group.start_date.split("T")[0]}</div>
            <div className="paymentPlan">{group.plan_type}</div>
            <div className="end-date">{group.end_date.split("T")[0]}</div>
          </div>
        </div>
        <div className="left-section">
          <div className="budgeted tab">
            {currencySymbol} {group.pay_amount}
          </div>
          <div className="available tab">
            {currencySymbol} {group.plan_amount}
          </div>
          <div className="activity tab">
            {currencySymbol}{" "}
            {Number(group.plan_amount - group.pay_amount).toFixed(2)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabList;
