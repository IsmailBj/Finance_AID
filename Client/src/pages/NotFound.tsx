import { FC } from "react";
import { NavLink } from "react-router-dom";
import emptyImg from "../assets/images/empty.png";

const NotFoundPage: FC = () => {
  return (
    <div className="not-found-container">
      <img src={emptyImg} alt="no image" />
      Page not found <NavLink to="/">Go home</NavLink>
    </div>
  );
};

export default NotFoundPage;
