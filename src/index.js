import React from "react";
import ReactDOM from "react-dom/client";
import { ModalProvider ,TransactionProvider} from "./context/index";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <TransactionProvider>
    <ModalProvider>
        <App/>
    </ModalProvider>
    </TransactionProvider>
  </React.StrictMode>
);
