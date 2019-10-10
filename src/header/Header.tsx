import React from "react";

import "./header.scss";

interface IProps {
  title: string;
}

const Header: React.FC<IProps> = () => {
  return (
    <div>
      <h1>Header</h1>
    </div>
  );
};

export default Header;
