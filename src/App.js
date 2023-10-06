import React from "react";
import { SearchPage } from "./components/pages/searchPage/SearchPage";
import { UpdateUser } from "./components/pages/userUpdatePage/UpdateUser";
import { BodyContent } from "./components/pages/homePage/BodyContent";

function App() {
  return (
    <div>
      {/* <BodyContent /> */}
      <SearchPage />
      {/* <UpdateUser /> */}
    </div>
  );
}

export default App;
