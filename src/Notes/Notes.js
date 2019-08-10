import React from "react";
import axios from 'axios';

import NoteTitle from "./NoteTitle/NoteTitle";
import NoteBody from "./NoteBody/NoteBody";
import EditNote from "./EditNote/EditNote";

import "./notes.css";

class Notes extends React.Component {

  constructor(props) {
    super(props);
    console.log("[Constructor]");
    this.state = {
      showBody: false,
      selectedId: null,
      editNoteId: null,
      notes: []
    };
  }


  clickHandler = id => {
    // this.state.showBody = true;   - NEVER DO THIS
    this.setState({
      showBody: true,
      selectedId: id
    });
  };

  componentDidMount() {
    console.log("[Component Did Mount]");
    axios.get("https://monocept-proj.firebaseio.com/notesdata.json")
      .then(response => {
        this.setState({notes : response.data})
      }).catch(err => console.log(err))
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("[Should Component Update]");
    return true;
  }
  componentWillUnmount() {
    console.log("[Component Will Unmount]");
  }

  deleteHandler = id => {
    let duplicateNotes = [...this.state.notes];
    const position = duplicateNotes.findIndex(note => note.id === id);
    duplicateNotes.splice(position, 1);
    this.setState({
      notes: duplicateNotes,
      showBody: false,
      selectedId: null,
      editNoteId: null
    });
  };

  editHandler = id => {
    this.setState({
      editNoteId: id,
      showBody: false,
      selectedId: null
    });
  };

  changeHandler = (event) => {
    console.log(event.target.value);
    const duplicateNotes = [...this.state.notes];
    const position = duplicateNotes.findIndex(note =>note.id === this.state.editNoteId );
    // const note = duplicateNotes.find(note => note.id === this.state.editNoteId);
    // duplicateNotes.splice(position, 1);
    // note.body = event.target.value;
    // duplicateNotes.push(note);
    duplicateNotes[position].body = event.target.value;
    this.setState({
      notes : duplicateNotes
    })
  }

  saveHandler = () => {
    this.setState({
      editNoteId : null
    })
  }

  render() {
    console.log("[Render]");
    let body = null;
    let editBody = null;

    // EDIT THE NOTE
    if (this.state.editNoteId !== null) {
      const duplicateNotes = [...this.state.notes];
      const note = duplicateNotes.find(note => {
        return note.id === this.state.editNoteId;
      });
      editBody = (
        <EditNote
          note={note}
          onChangeHandler={event => this.changeHandler(event)}
          onSaveHandler = {this.saveHandler}
        />
      );
    }

    // SHOW THE NOTE BODY
    if (this.state.showBody && this.state.selectedId !== null) {
      const duplicateNotes = [...this.state.notes];
      const note = duplicateNotes.find(note => {
        return note.id === this.state.selectedId;
      });
      body = (
        <NoteBody
          note={note}
          onDeleteHandler={id => this.deleteHandler(id)}
          onEditHandler={id => this.editHandler(id)}
        />
      );
    }
    let notes = this.state.notes.map(note => (
      <NoteTitle
        title={note.title}
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
          <div className="col-xs-12 col-sm-12 col-md-12">{editBody}</div>
        </div>
      </div>
    );
  }
}

export default Notes;
