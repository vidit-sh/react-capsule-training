import React from "react";

import PrivateTodoList from "../../organisms/PrivateTodoList/PrivateTodoList";
import PublicTodoList from "../../organisms/PublicTodoList/PublicTodoList";

const Home = () => (
  <main>
    <PrivateTodoList />
    <PublicTodoList />
  </main>
);

export default Home;
