import React from "react";
import { Provider } from "react-redux";
import { store } from "../Redux/Store/Store";
import { Toaster } from "react-hot-toast";

const Layout = ({ children }) => {
  const token = localStorage.getItem("token");
  return (
    <div>
      <Toaster position="top-right" autoClose={3000} />
      <Provider store={store}>
        {token && <div>Navbar</div>}
        <div>{children}</div>
        <div>footer</div>
      </Provider>
    </div>
  );
};

export default Layout;
