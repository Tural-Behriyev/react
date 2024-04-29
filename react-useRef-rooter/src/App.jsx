import React from "react";
import WebRoutes from "./Components/WebRoutes";
import Footer from "./Components/Footer";

const App = () => {
  // const inputRef = useRef();
  // const h2Ref = useRef();
  // const handleClick = () => {
  //   console.log(h2Ref.current.innerText);
  //   inputRef.current.focus()
  // };
  return (
    <div>
      {/* <h2 ref={h2Ref}>h2</h2>
      <input type="text" ref={inputRef} />
      <button onClick={handleClick}>click me</button> */}

     <WebRoutes/>
     <Footer/>
    </div>
  );
};

export default App;
