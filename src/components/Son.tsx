import React from "react";
interface SonProps {
  title: string;
  hobby: string;
  say: () => void;
  info: { name: string; age: number };
  children?: React.ReactNode;
}
const Son = ({ children }: SonProps): JSX.Element => {
  return (
    <div>
      Son 입니다.
      {children}
    </div>
  );
};

export default Son;
