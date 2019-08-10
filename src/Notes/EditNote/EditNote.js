import React from "react";
const editNote = props => {
  return (
    <div className="row">
      <div className="col-xs-12 col-sm-12 col-md-12">
        <form className="card">
          <h3 className="text-center text-primary">Title :</h3>
          <input
            type="text"
            className="form-control"
            placeholder="Body should go here.."
          />
          <button className="btn btn-block btn-success">Save</button>
        </form>
      </div>
    </div>
  );
};
export default editNote;
