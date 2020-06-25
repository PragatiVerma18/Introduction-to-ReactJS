import React from "react";
import "./App.css";

import DataFetching from "./Components/DataFetching";
import DataFetchingTwo from "./Components/DataFetchingTwo";
import Counter from "./Components/Counter";
import FocusInput from "./Components/FocusInput";
import ClassTimer from "./Components/ClassTimer";
import HookTimer from "./Components/HookTimer";

function App() {
  return (
    <div className="App">
      {/* <DataFetchingTwo /> */}
      {/* <Counter /> */}
      {/* <FocusInput /> */}
      <ClassTimer />
      <HookTimer />
    </div>
  );
}

export default App;
