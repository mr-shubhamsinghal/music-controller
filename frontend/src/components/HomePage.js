import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link, 
    Redirect
} from 'react-router-dom';

import RoomCreatePage from "./RoomCreatePage";
import RoomJoinPage from "./RoomJoinPage";


export default class HomePage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/"><p>This is the home page</p></Route>
                    <Route path="/room-join-page" component={RoomJoinPage} />
                    <Route path="/room-create-page" component={RoomCreatePage} />
                </Switch>
            </Router>
        );
    }
}
