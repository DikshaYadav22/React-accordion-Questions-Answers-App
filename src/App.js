import "./App.css";
import React, { useState } from "react";

import data from "./components/data";
import Questions from "./components/Questions";

const App = () => {
  const [questions, setQuestions] = useState(data);

  const [activeId, setActiveId] = useState(false);
  return (
    <>
      <Questions
        questions={questions}
        activeId={activeId}
        setActiveId={setActiveId}
      />
    </>
  );
};

export default App;
