import React from "react";

const noteBody = props => {
  return (
    <div className="col-xs-12 col-sm-12 col-md-12">
      <div className="card">
        <div className="card-body">
          <div className="card-text">
            <p className="text-center text-dark">
              {props.note.body.toUpperCase()}
            </p>
            <div className="row">
              <div className="col-xs-6 col-sm-6 col-md-6">
                <button className="btn btn-block btn-danger" 
                    onClick={() => props.onDeleteHandler(props.note.id)}>
                  Delete
                </button>
              </div>
              <div className="col-xs-6 col-sm-6 col-md-6">
              <button className="btn btn-block btn-dark"
                  onClick={() => props.onEditHandler(props.note.id)}>
                  Edit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default noteBody;
