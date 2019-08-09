import React from "react";

const noteTitle = (props) => {
    // console.log(props);

    const handleClick = () => {
        props.onClickHandler();
    }

  return (
    <div className="col-xs-6 col-sm-6 col-md-6">
      <div className="card myclass" onClick={() => handleClick()}>
        <div className="card-header">
          <h3>{props.title.toUpperCase()}</h3>
        </div>
      </div>
    </div>
  );
};

export default noteTitle;
