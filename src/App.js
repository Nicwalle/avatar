import React from "react";
import './App.css'
import DisplayPage from "./pages/DisplayPage";
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";
import SettingsPage from "./pages/SettingsPage";
import SizaineSettingsPage from "./pages/SizaineSettingsPage";
import firebaseKey from "./firebaseKey";

// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/firestore";

firebase.initializeApp(firebaseKey);

const db = firebase.firestore();

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            showSettings: false
        };
    }

    componentDidMount() {
        db.collection('Sizaines').onSnapshot((sizaines) => {
            let newData = [];
            sizaines.forEach(sizaine => {
                newData = [sizaine.data(), ...newData];
            });
            this.setState({data: newData});
        })
    }

    render() {
        return <Router>
                <Switch>
                    <Route path="/settings/:sizaine">
                        <SizaineSettingsPage data={this.state.data}/>
                    </Route>
                    <Route path="/settings">
                        <SettingsPage data={this.state.data}/>
                    </Route>
                    <Route path="/">
                        <DisplayPage data={this.state.data}/>
                    </Route>
                </Switch>
        </Router>
    }


}
