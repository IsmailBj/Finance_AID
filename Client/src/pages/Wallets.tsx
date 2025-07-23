import { FC } from "react";
import Header from "../components/ui/Header";
import Card from "../components/common/cards/Cards";
import FilterBar from "../components/ui/budgetPanel/FilterBar";

const Wallets: FC = () => {
  return (
    <div className="wallets-page">
      <Header />
      <div className="wallets-container">
        <FilterBar />
        <div className="cards-swapper">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Wallets;
