import React from "react"
import ReactDOM from "react-dom/client"
import App from "./components/app"
import "./style.css"
import { Provider } from "react-redux"
import store from "./redux/store"

const app = (
  <Provider store={store}>
    <App />
  </Provider>
)

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(app)
