import React, { Component } from "react";

class RefDemo extends Component {
  constructor(props) {
    super(props);
    this.inputTitle = React.createRef();
    this.inputBody = React.createRef();
  }

  clickHandler = event => {
    event.preventDefault();
    console.log("Title : ", this.inputTitle.current.value);
    console.log("Body : ", this.inputBody.current.value);
    this.props.history.push({
        pathname : '/',
        state : {
            title : this.inputTitle.current.value,
            body : this.inputBody.current.value
        },
        // search : "?page_no=99"
    })
  };
  render() {
    return (
      <div className="container">
        <h2 className="text-center display-4">Add New Note</h2>
        <form>
          <div className="form-group">
            <label>Title : </label>
            <input type="text" ref={this.inputTitle} className="form-control" />
          </div>

          <div className="form-group">
            <label>Body : </label>
            <input type="text" ref={this.inputBody} className="form-control" />
          </div>

          <button
            className="btn btn-dark btn-md btn-block"
            onClick={event => this.clickHandler(event)}
          >
            Add New
          </button>
        </form>
      </div>
    );
  }
}

export default RefDemo;
