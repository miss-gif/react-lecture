import React from "react";

const Partner = ({ pc }) => {
  return (
    <div>
      <h1>
        <ul>
          {pc.map((item, index, arr) => {
            return (
              <li key={index}>
                {item.name} {item.link}
              </li>
            );
          })}
        </ul>
      </h1>
    </div>
  );
};

export default Partner;
