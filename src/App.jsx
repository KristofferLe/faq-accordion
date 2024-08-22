import React from "react";
import Wrapper from "./components/appWrapper";
import Background from "./components/background";
import FaqCard from "./components/card/card";

function App() {
  return (
    <Wrapper>
      <Background />
      <FaqCard />
    </Wrapper>
  );
}

export default App;
