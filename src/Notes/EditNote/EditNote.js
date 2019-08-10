import React from "react";
const editNote = props => {
  return (
    <div className="row container">
      <div className="col-xs-12 col-sm-12 col-md-12">
        <form className="card">
          <div className="card-header">
            <h3 className="text-center text-dark">Title : {props.note.title.toUpperCase()}</h3>
          </div>
          <div className="card-body">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                value = {props.note.body}
                onChange = {(event) => props.onChangeHandler(event)}
              />
              <button className="btn btn-block btn-primary"
                  onClick={props.onSaveHandler}>Save</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default editNote;
