// Code EyesOnMe Component Here
import React from "react";

function EyesOnMe() {
  return (
  <button onFocus={(e) => console.log('Good!')} onBlur={(e) => console.log('Hey! Eyes on me!')}>Eyes on Me</button>
  );
}

export default EyesOnMe;