import axios from "axios";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Container from './Container/Container';



axios.interceptors.request.use(request => {
  console.log("[REQUEST INTERCEPTOR WORKS]", request);
  return request;
});

axios.interceptors.response.use(response => {
  console.log("[RESPONSE INTERCEPTOR WORKS]", response);
  return response;
});

export const MyContext = React.createContext();

function App() {
  // return React.createElement("div", {className : "container"},
  //   React.createElement("h1", {}, "My Notes App!" ));

  return (
    <BrowserRouter>
      <div className="container">
        <h1 className="display-3 text-center">My Notes App</h1>
        <Container />
      </div>
    </BrowserRouter>
  );
}

export default App;
