import React, { useState } from "react";
import ListComponent from "./ListComponent";
import Results from "./Results";
import { Route, Routes } from "react-router-dom";

const App = () => {
  const [select, setSelect] = useState(false);
  return (
    <>
      <Routes>
        <Route path="/" element={<ListComponent setSelect={setSelect} />} />
        {select && <Route path="result" element={<Results />} />}
      </Routes>
    </>
  );
};
export default App;
