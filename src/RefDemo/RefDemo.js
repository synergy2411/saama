import React, {Component} from 'react';
import axios from 'axios';

class RefDemo extends Component{
    constructor(props){
        super(props);
        this.inputTitle = React.createRef();
    }

    clickHandler = (event) => {
        event.preventDefault();
        console.log(this.inputTitle.current.value);
        axios.post("https://monocept-proj.firebaseio.com/notesdata.json", {
            noteTitle : this.inputTitle.current.value
        }).then(res => console.log(res))
        .catch(err => console.log(err));
    }
    render(){
        return (
            <div className="container">
                <form>
                    <label>Title : </label>
                    <input type = "text" ref ={this.inputTitle}  className="form-control" />
                    <button className="btn btn-dark btn-md"
                        onClick={event => this.clickHandler(event)}>Save</button>
                </form>
            </div>
        )
    }
}

export default RefDemo;