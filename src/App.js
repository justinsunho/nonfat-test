import React, { useState } from "react";
import { SubmitButton } from "./components/atoms";
import { Table } from "./components/organisms";
import data from "./projects.json";
import "./App.scss";

function App() {
  const [selected, updateSelect] = useState([]);
  const { projects } = data;

  const setSelectedItems = (TableValue, checked) => {
    if (checked === true) {
      updateSelect((selected) => [...selected, TableValue]);
    } else {
      updateSelect(selected.filter((value) => value.name !== TableValue.name));
    }
  };

  return (
    <div className="App">
      <div className="template">
        <div>PROJECTS</div>
        <Table projects={projects} setSelectedItems={setSelectedItems} />
        <div className="buttonWrapper">
          <SubmitButton selected={selected} />
        </div>
      </div>
    </div>
  );
}

export default App;
