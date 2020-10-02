import React from "react";
import "./styles.css";
import commonutils from "./utils/commonutils";
export default function App() {
  console.log(commonutils.greet("vaishali", "ambi"));
  return (
    <>
      <h1>Hello Everyone!</h1>
      <h1>This is vaishali</h1>
    </>
  );
}
