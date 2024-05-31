import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/company">회사소개</Link>
          <ul>
            <li>
              <Link to="/company/ceo">대표 소개</Link>
            </li>
            <li>
              <Link to="/company/history">회사 연혁</Link>
            </li>
            <li>
              <Link to="/company/location">회사위치</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/good">제품소개</Link>
          <ul>
            <li>
              <Link to="/good/1">제품 소개</Link>
            </li>
            <li>
              <Link to="/good/delete/1">제품 삭제</Link>
            </li>
            <li>
              <Link to="/good/modify/1">제품 수정</Link>
            </li>
          </ul>
        </li>
      </ul>
    </header>
  );
};

export default Header;
