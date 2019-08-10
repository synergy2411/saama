/* eslint-disable react/no-typos */
import React from "react";
import PropTypes from "prop-types";
import { MyContext } from "../../App";

const noteTitle = props => {
  // console.log(props);

  const handleClick = () => {
    props.onClickHandler();
  };

  return (
    <div className="col-xs-6 col-sm-6 col-md-6">
      <div className="card myclass" onClick={() => handleClick()}>
        <div className="card-header">
          <h3>{props.title.toUpperCase()}</h3>
          <MyContext.Consumer>
            {value => value.username }
          </MyContext.Consumer>
        </div>
      </div>
    </div>
  );
};

noteTitle.propTypes = {
  title: PropTypes.string.isRequired,
  onClickHandler: PropTypes.func
};
export default noteTitle;
