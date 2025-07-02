import React, { useState } from "react";
import { CheckButton } from "../../common/buttons/Buttons";
import SubBarLine from "../../common/bars/SubBarLine";
import { FaArrowAltCircleDown } from "react-icons/fa";

type Group = {
  id: number;
  name: string;
  budgeted: number;
  activity: number;
  available: number;
  subGroups: SubGroup[];
};

type SubGroup = {
  id: number;
  name: string;
  budgeted: number;
  activity: number;
  available: number;
  DatePlan?: Array<string>;
};

const TabList: React.FC<Group> = (group) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="list-table">
      <div
        key={group.id}
        className="group-item"
        onClick={() => setCollapsed(!collapsed)}
      >
        <div className="selector">
          <CheckButton isChecked={false} />
          <FaArrowAltCircleDown />
          <div className="group-name">{group.name}</div>
        </div>

        <div className="budgeted tab">$ {group.budgeted}</div>
        <div className="activity tab">$ -{group.activity}</div>
        <div className="available tab">$ {group.available}</div>
      </div>
      {group.subGroups.length > 0 && (
        <div className={`sub-groups ${collapsed ? "collapsed" : ""}`}>
          {group.subGroups.map((subGroup) => (
            <TabListSubGroup key={subGroup.id} {...subGroup} />
          ))}
        </div>
      )}
    </div>
  );
};

export const TabListSubGroup: React.FC<SubGroup> = (subGroup) => {
  return (
    <div key={subGroup.id} className="sub-group-item">
      <div className="selector">
        <CheckButton isChecked={false} />
        <div className="group-status-info">
          <div className="group-name">⚙️{subGroup.name}</div>
          {subGroup.DatePlan && subGroup.DatePlan.length > 0 && (
            <div className="group-status">
              {subGroup.DatePlan.map((status) => (
                <SubBarLine state={status} />
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="budgeted tab">$ {subGroup.budgeted}</div>
      <div className="activity tab">$ -{subGroup.activity}</div>
      <div className="available tab">$ {subGroup.available}</div>
    </div>
  );
};

export default TabList;
