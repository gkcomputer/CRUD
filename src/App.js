import React from "react";
import { RouterProvider } from "react-router-dom";
import { routes } from "./routes";

function App() {
  return (
    <div>
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
