import React from 'react';

const noteBody = props => {
    return (
        <div className="col-xs-12 col-sm-12 col-md-12">
          <div className="card">
            <div className="card-body">
              <p>{props.note.body}</p>
            </div>
          </div>
        </div>
    )
}

export default noteBody;