import React from "react";
import "./style.css";

export default function App() {
  const teste  = [1,2,3,4];
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen  er:)</p>
      <div className="Heelo">
        {teste.map((i, val) => {
          return (
            <div key={i}>
              {val}
            </div>)
        })}
      </div>
    </div>
  );
}
