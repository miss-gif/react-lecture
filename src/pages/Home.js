import { useEffect, useState } from "react";
import Gallery from "../component/Gallery";
import Info from "../component/Info";
import Notice from "../component/Notice";
import QuickLink from "../component/QuickLink";
import Slide from "../component/Slide";
import Footer from "../component/layout/Footer";
import Header from "../component/layout/Header";
import Main from "../component/layout/Main";

export const Home = () => {
  let [login, setLogin] = useState(false);
  console.log("Home 이 새로고침 되니? login : ", login);

  const [count, setCount] = useState(0);

  const changeLogin = () => {
    setLogin(!login);
    // console.log("현재 login : ", login);
  };

  useEffect(() => {
    // console.log("Home 이 새로고침 되니? USE-EFFECT", login);
  }, [login]);

  return (
    <>
      <button
        onClick={() => {
          changeLogin();
        }}
      >
        로그인버튼
      </button>
      <Header login={login} />
      <Main>
        <Slide />
        <Info>
          <Notice />
          <Gallery />
          <QuickLink />
        </Info>
      </Main>
      <Footer />
    </>
  );
};
