import Gallery from "../component/Gallery";
import Info from "../component/Info";
import Notice from "../component/Notice";
import QuickLink from "../component/QuickLink";
import Slide from "../component/Slide";
import Footer from "../component/layout/Footer";
import Header from "../component/layout/Header";
import Main from "../component/layout/Main";

const Home = () => {
  return (
    <>
      <Header title="제목" main="내용" age="1" />
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

export default Home;
