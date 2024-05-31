import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

// Index 라는 이름 충돌로 변경함
import Home from "./pages/";
import Company from "./pages/company/index.js";

function App() {
  return (
    <BrowserRouter>
      {/* 공통레이아웃 적용 */}
      <div className="wrap">
        <Header></Header>
        <Routes>
          {/* 루트경로 */}
          <Route path="/" element={<Home></Home>}></Route>

          <Route path="/company">
            {/* 패스 상 기본페이지 */}
            <Route index element={<Company></Company>}></Route>

            <Route path="ceo" element={<h1>대표 소개</h1>}></Route>
            <Route path="history" element={<h1>회사 연혁</h1>}></Route>
            <Route path="partner" element={<h1>파트너 소개</h1>}></Route>
            <Route path="location" element={<h1>회사 위치</h1>}></Route>
          </Route>

          <Route path="/good">
            {/* 패스 상 기본페이지 */}
            <Route index element={<h1>제품 소개</h1>}></Route>

            <Route path=":id" element={<h1>제품 상세</h1>}></Route>
            <Route path="delete/:id" element={<h1>제품 삭제</h1>}></Route>
            <Route path="modify/:id" element={<h1>제품 수정</h1>}></Route>
          </Route>

          {/* 잘못된 경로 */}
          <Route path="*" element={<h1>잘못된 경로입니다.</h1>}></Route>
        </Routes>
        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
