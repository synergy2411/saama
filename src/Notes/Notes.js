import React from "react";
import NoteTitle from "./NoteTitle/NoteTitle";
import NoteBody from "./NoteBody/NoteBody";
import EditNote from './EditNote/EditNote';

import "./notes.css";

class Notes extends React.Component {
  constructor(props) {
    super(props);
    console.log("[Constructor]")
    this.state = {
      showBody: false,
      selectedId: null,
      editNoteId : null,
      notes: [
        { id: 1, title: "grocery", body: "buy the pulses" },
        { id: 2, title: "domestic", body: "renew insurance" },
        { id: 3, title: "study", body: "read the books" },
        { id: 4, title: "planting", body: "pot the plants" }
      ]
    };
  }


  clickHandler = id => {
    // this.state.showBody = true;   - NEVER DO THIS
    this.setState({
      showBody: true,
      selectedId: id
    });
  };

  componentDidMount(){
    console.log("[Component Did Mount]")
  }
  shouldComponentUpdate(nextProps, nextState){
    console.log("[Should Component Update]");
    return true;
  }
  componentWillUnmount(){
    console.log("[Component Will Unmount]")
  }

  deleteHandler = id => {
    let duplicateNotes = [...this.state.notes];
    const position = duplicateNotes.findIndex(note => note.id === id);
    duplicateNotes.splice(position, 1);
    this.setState({
      notes : duplicateNotes,
      showBody : false,
      selectedId : null
    })
  }

  editHandler = id => {
    this.setState({
      editNoteId : id 
    })
  }


  render() {
    console.log("[Render]")
    let body = null;
    let editBody = null;
    if(this.state.editNoteId !== null){
      editBody = <EditNote />
    }

    if (this.state.showBody && this.state.selectedId !== null) {
      const duplicateNotes = [...this.state.notes];
      const note = duplicateNotes.find(note => {
        return note.id === this.state.selectedId;
      });
      body = <NoteBody 
                note={note} 
                onDeleteHandler = {(id) => this.deleteHandler(id)}
                onEditHandler = {(id) => this.editHandler(id)}
                />;
    }
    let notes = this.state.notes.map(note => (
      <NoteTitle
      title = {note.title}
        key={note.id}
        id={note.id}
        onClickHandler={() => this.clickHandler(note.id)}
      />
    ));

    return (
      <div className="container">
        <div className="row text-center">{notes}</div>
        <br />
        <div className="row">{body}</div>
        <br />
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12">
          {editBody}
          </div>
        </div>
      </div>
    );
  }
}

export default Notes;
