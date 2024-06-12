import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// ts 에서는 데이터 종류를 구별한다.
// as 는 강제로 타입지정
// const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

// js 버전
const root = ReactDOM.createRoot(document.getElementById("root"));

// 전역 상태 관리 (사용자 아이디를 관리)
const userInfoContext = createContext();
root.render(
  <>
    <App />
  </>,
);
