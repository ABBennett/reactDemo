import React from "react";
import { render } from "react-dom";

function Hi() {
  return <p>Hi this is a P tag</p>;
}

render(<Hi />, document.getElementById("app"));
