import React, {Component} from 'react';
import { Link, Route } from 'react-router-dom';
import  Notes from '../Notes/Notes';
import AddNew from "../RefDemo/RefDemo";

class Container extends Component{
    render(){
        return (
            <div className="container">
                <header>
                    <nav>
                        <ul>
                            <li><Link to="/">Notes</Link></li>
                            <li><Link to="/addnew">Add New</Link></li>
                        </ul>
                    </nav>
                </header>
                <hr />

                {/* <Route path = "/" exact render={() => <h1>Home Component</h1>} /> */}
                <Route path = "/" exact component = {Notes} />
                <Route path = "/addnew" exact component = {AddNew} />
            
            </div>
            

        )
    }
}

export default Container;