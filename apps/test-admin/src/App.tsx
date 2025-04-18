import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { AdminList } from "./admin/AdminList";
import { AdminCreate } from "./admin/AdminCreate";
import { AdminEdit } from "./admin/AdminEdit";
import { AdminShow } from "./admin/AdminShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"Test"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Admin"
          list={AdminList}
          edit={AdminEdit}
          create={AdminCreate}
          show={AdminShow}
        />
      </Admin>
    </div>
  );
};

export default App;
