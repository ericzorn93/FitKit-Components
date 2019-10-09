import React from "react";

import "./header.scss";

interface Props {
  title: string;
}

const Header: React.FC<Props> = () => {
  return (
    <div>
      <h1>Header</h1>
    </div>
  );
};

export default Header;
