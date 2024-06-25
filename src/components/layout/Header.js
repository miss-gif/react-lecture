import styled from "@emotion/styled";
import React from "react";

// eslint-disable-next-line react/prop-types
export const Header = () => {
  return (
    <header>
      <LogoDiv>111</LogoDiv>
      <GnbDiv className="gnb">
        <nav className="menu">123</nav>
      </GnbDiv>
      <MemberDiv className="member">123</MemberDiv>
    </header>
  );
};

const LogoDiv = styled.div`
  font-size: 30px;
  font-weight: 700;
  background-color: orchid;
`;
const GnbDiv = styled.div``;
const MemberDiv = styled.div``;
