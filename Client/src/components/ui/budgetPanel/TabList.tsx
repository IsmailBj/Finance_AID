import React from "react";
import { CheckButton } from "../../common/buttons/Buttons";
import SubBarLine from "../../common/bars/SubBarLine";

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
  return (
    <div className="list-table">
      <div key={group.id} className="group-item">
        <div className="selector">
          <CheckButton isChecked={false} />
          <div className="group-name">{group.name}</div>
        </div>

        <div className="budgeted tab">$ {group.budgeted}</div>
        <div className="activity tab">$ -{group.activity}</div>
        <div className="available tab">$ {group.available}</div>
      </div>
      {group.subGroups.length > 0 && (
        <div className="sub-groups">
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
