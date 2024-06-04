import { NavLink } from "react-router-dom";

const Header = ({ children }) => {
  // js 자리
  // 현재 패스와 같은 경우에 보여줄 css Object 생성
  const ActiveLink = {
    color: "red",
    fontWeight: "bold",
  };

  return (
    <header className="header">
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => {
              return isActive ? "ActiveLink" : "";
            }}
          >
            홈
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/company"
            className={({ isActive }) => {
              return isActive ? "ActiveLink" : "";
            }}
          >
            회사소개
          </NavLink>
          <ul>
            <li>
              <NavLink
                to="/company/ceo?name=홍길동&age=30"
                className={({ isActive }) => {
                  return isActive ? "ActiveLink" : "";
                }}
              >
                대표 소개
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/company/history"
                className={({ isActive }) => {
                  return isActive ? "ActiveLink" : "";
                }}
              >
                회사 연혁
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/company/partner"
                className={({ isActive }) => {
                  return isActive ? "ActiveLink" : "";
                }}
              >
                파트너사
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/company/location"
                className={({ isActive }) => {
                  return isActive ? "ActiveLink" : "";
                }}
              >
                회사위치
              </NavLink>
            </li>
          </ul>
        </li>
        <li>
          <NavLink
            to="/good"
            className={({ isActive }) => {
              return isActive ? "ActiveLink" : "";
            }}
          >
            제품소개
          </NavLink>
        </li>
      </ul>

      {children}
    </header>
  );
};

export default Header;
