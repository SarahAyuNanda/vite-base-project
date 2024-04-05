import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import App from "./App.tsx";

import "@/assets/styles/index.css";

import { store } from "@/services/redux/index.ts";

import { AppProviderComponent, BuildProviderTree } from "@/utils/config/provider.tsx";

/* -------------------------------- Provider Config -------------------------------- */
const providerComponent: AppProviderComponent[] = [
  [BrowserRouter, {}],
  [Provider, { store }],
];
const ProviderTree = BuildProviderTree(providerComponent);

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <StrictMode>
    <ProviderTree>
      <App />
    </ProviderTree>
  </StrictMode>,
);
