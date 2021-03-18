import React from "react";
import { Route } from "react-router-dom";

//Import components and pages
import Home from "./pages/Home";
import GlobalStyle from "./components/GlobalStyle";

function App() {
  return (
    <div className='App'>
      <GlobalStyle />
      <Route path={["/games:id", "/"]}>
        <Home />
      </Route>
    </div>
  );
}

export default App;
