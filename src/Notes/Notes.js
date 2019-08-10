import React from "react";
import NoteTitle from "./NoteTitle/NoteTitle";
import NoteBody from './NoteBody/NoteBody';

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
       body = <NoteBody note = {note}/>
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


// github.com/synergy2411/saama
// https://surveymonkey.com/r/28NGCDY