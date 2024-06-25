import React from "react";

// eslint-disable-next-line react/prop-types
const Header = ({ login }) => {
  return (
    <header className="header">{login ? "정보수정" : "로그인필요"}</header>
  );
};

export default Header;
