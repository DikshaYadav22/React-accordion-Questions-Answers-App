import "./App.css";
import React, { useState } from "react";

import data from "./components/data";
import Questions from "./components/Questions";

const App = () => {
  const [questions, setQuestions] = useState(data);

  const [show, setShow] = useState(false);
  return (
    <>
      <Questions questions={questions} show={show} setShow={setShow} />
    </>
  );
};

export default App;
