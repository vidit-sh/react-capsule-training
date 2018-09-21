import React from "react";
import Home from "./components/templates/Home/Home";
import { DataProvider } from "./dataStore";

let state = {
  tasks: [
    {
      id: 1234,
      label: "I am a public task",
      done: false
    },
    {
      id: 4567,
      label: "I am another public task",
      done: true
    }
  ]
};

const App = () => {
  return (
    <DataProvider state={state}>
      <Home />
    </DataProvider>
  );
};

export default App;
