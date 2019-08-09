import React from 'react';
import Notes from './Notes/Notes';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {

  // return React.createElement("div", {className : "container"}, 
  //   React.createElement("h1", {}, "My Notes App!" ));

  return (
    <div className="container">
      <h1 className="display-3 text-center">My Notes App</h1>
      <Notes />
    </div>
  );
}

export default App;
