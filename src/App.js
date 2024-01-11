// App.js
import React from "react";
import { Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import UsersList from "./redux/UsersList";
import UserDetails from "./pages/UserDetails";

const App = () => {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<UsersList />} />
        <Route path="/user/:userId" element={<UserDetails />} />
      </Routes>
    </Provider>
  );
};

export default App;
