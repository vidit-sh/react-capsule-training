import React from "react";

import PublicTodoList from "../../organisms/PublicTodoList/PublicTodoList";
import PrivateTodoList from "../../organisms/PrivateTodoList/PrivateTodoList";
import { Provider } from "../../../withTasks";

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

const Home = () => (
  <main>
    <Provider value={tasks}>
      <PrivateTodoList />
      <PublicTodoList />
    </Provider>
  </main>
);

export default Home;
