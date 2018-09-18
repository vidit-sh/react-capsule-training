import React from "react";

import PublicTodoList from "../../organisms/PublicTodoList/PublicTodoList";
import PrivateTodoList from "../../organisms/PrivateTodoList/PrivateTodoList";

const tasks = [
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
];

export const DataContext = React.createContext();

const Home = () => (
  <main>
    <DataContext.Provider value={tasks}>
      <PrivateTodoList />
      <PublicTodoList />
    </DataContext.Provider>
  </main>
);

export default Home;
