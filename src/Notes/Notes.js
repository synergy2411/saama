import React from "react";
import "./notes.css";

class Notes extends React.Component {
  render() {
    const note = {id : 1, title : "grocery", body : "buy the pulses"}
    return (
      <div className="container">
        <div className="row text-center">
          <div className="col-xs-6 col-sm-6 col-md-6">
            <div className="card myclass">
              <div className="card-header">
                <h3>{note.title.toUpperCase()}</h3>
              </div>
            </div>
          </div>
        </div>
        <br/>
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12">
            <div className="card">
              <div className="card-body">
                <p>{note.body}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Notes;
