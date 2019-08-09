import React from "react";
import NoteTitle from "./NoteTitle/NoteTitle";

import "./notes.css";

class Notes extends React.Component {
  state = {
    showBody: false,
    selectedId : null,
    notes: [
      { id: 1, title: "grocery", body: "buy the pulses" },
      { id: 2, title: "domestic", body: "renew insurance" },
      { id: 3, title: "study", body: "read the books" },
      { id: 4, title: "planting", body: "pot the plants" }
    ]
  };

  clickHandler = (id) => {
    // this.state.showBody = true;   - NEVER DO THIS
    this.setState({
      showBody: true,
      selectedId : id
    });
  };

  render() {
    let body = null;

    if (this.state.showBody && this.state.selectedId !== null) {
        
      const duplicateNotes = [...this.state.notes];
       const note = duplicateNotes.find(note => {
           return note.id === this.state.selectedId
       });
       body = (
        <div className="col-xs-12 col-sm-12 col-md-12">
          <div className="card">
            <div className="card-body">
              <p>{note.body}</p>
            </div>
          </div>
        </div>
      );
    }
    let notes = this.state.notes.map(note => (  
        <NoteTitle 
            title={note.title} 
            key = {note.id} 
            id = {note.id}
            onClickHandler={()=>this.clickHandler(note.id)} />));

    return (
      <div className="container">
        <div className="row text-center">{notes}</div>
        <br />
        <div className="row">{body}</div>
      </div>
    );
  }
}

export default Notes;
