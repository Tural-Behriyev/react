import { useState } from "react";
import React from "react";
import Data from "./Components/GetData";
import Cards from "./Components/Cards";
import styled from "styled-components";



const AppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 2rem;
  background: bisque;
`;

const App = () => {
  return (
    <AppWrapper>
      <Data />
      <Cards />
    </AppWrapper>
  );
};

export default App;