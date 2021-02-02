import React from "react";
import Jobs from "./containers/Jobs";
import GraphqlProvider from "./graphql/Provider";

const App = () => {
  return (
    <GraphqlProvider>
      <Jobs />
    </GraphqlProvider>
  );
};

export default App;
