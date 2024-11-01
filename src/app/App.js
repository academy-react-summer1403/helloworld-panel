import React, { Suspense } from "react";

// ** Router Import
// import Router from "../router/Router";
import Router from "../configs/router";

const App = () => {
  return (
    <Suspense fallback={null}>
      <Router />
    </Suspense>
  );
};

export default App;
