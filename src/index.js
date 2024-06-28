import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import AppRoot from "./AppRoot";

// ts 에서는 데이터 종류를 구별한다.
// as는

// const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <AppRoot />
  </>,
);
