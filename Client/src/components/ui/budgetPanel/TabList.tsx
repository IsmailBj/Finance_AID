import React from "react";
import { CheckButton } from "../../common/buttons/Buttons";
// import SubBarLine from "../../common/bars/SubBarLine";
import { FaArrowAltCircleDown } from "react-icons/fa";

interface Group {
  id: number;
  group_name: string;
  pay_amount: number;
  status: string;
  plan_type: string;
  plan_amount: number;
}

const TabList: React.FC<Group> = (group) => {
  return (
    <div className="list-table">
      <div key={group.id} className="group-item">
        <div className="selector">
          <CheckButton isChecked={false} />
          <FaArrowAltCircleDown />
          <div className="group-name">{group.group_name}</div>
        </div>
        <div className="paymentPlan tab">{group.plan_type}</div>
        <div className="budgeted tab">$ {group.pay_amount}</div>
        <div className="available tab">$ {group.plan_amount}</div>
        <div className="activity tab">
          $ {Number(group.plan_amount - group.pay_amount).toFixed(2)}
        </div>
      </div>
    </div>
  );
};

export default TabList;
