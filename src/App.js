import React from "react";
import Notes from "./Notes/Notes";
import RefDemo from './RefDemo/RefDemo';
import axios from 'axios';

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";


axios.interceptors.request.use((request) => {
  console.log("[REQUEST INTERCEPTOR WORKS]", request);
  return request;
})

axios.interceptors.response.use(response => {
  console.log("[RESPONSE INTERCEPTOR WORKS]", response);
  return response;
})

export const MyContext = React.createContext();

function App() {
  // return React.createElement("div", {className : "container"},
  //   React.createElement("h1", {}, "My Notes App!" ));

  return (
    <div className="container">
      <h1 className="display-3 text-center">My Notes App</h1>
      <RefDemo />
      <hr />
      <MyContext.Provider value = {{username : "Foo"}} >
        <Notes />
      </MyContext.Provider>
    </div>
  );
}

export default App;
