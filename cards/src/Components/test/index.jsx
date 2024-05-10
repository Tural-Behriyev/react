import React, { useState } from "react";

const Test = () => {
  //   const [show, setShow] = useState(false);
  //   const changeShow = () => setShow(!show);

  const [mode, setMode] = useState("light");
  const ChangeMode = () => {
    if (mode === "dark") {
      setMode("light");
    } else {
      setMode("dark");
    }
  };

  return (
    <div>
      {/* <button onClick={changeShow}>{show ? "hide" : "show"}</button> */}
      {/* <h2>men {show ? "men burdayam" : "men yoxam"}</h2> */}
      <div className={mode}>
        <button onClick={ChangeMode}>{mode === "dark" ? "light" : "dark"}</button>
      </div>
    </div>
  );
};

export default Test;