import { FC, useState } from "react";
import TransactionFilter from "./TransactionFilter";
import TransTab from "./TableList/TabTrans";
import { TransactionListProps } from "../../types/types";
import emptyImg from "../../assets/images/empty.png";
import { filterTransaction } from "../../helpers/Filters";

const TransactionList: FC<TransactionListProps> = ({ list }) => {
  const [filterBy, setFilterBy] = useState("Date");

  if (!list || list.length === 0) {
    return (
      <div className="no-transactions">
        <img src={emptyImg} alt="no image" />
      </div>
    );
  }

  const filteredData = filterTransaction(list, filterBy);

  return (
    <div className="transaction-list">
      <TransactionFilter setFilterBy={setFilterBy} />
      {list.length === 0 && (
        <div className="no-groups">Create a Group Here</div>
      )}
      <div className="list-container">
        {filteredData.map((DataTap) => (
          <TransTab DataTap={DataTap} key={DataTap.id} />
        ))}
      </div>
    </div>
  );
};

export default TransactionList;
