import React from "react";
import './App.css'
import DisplayPage from "./pages/DisplayPage";
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import SettingsPage from "./pages/SettingsPage";
import SizaineSettingsPage from "./pages/SizaineSettingsPage";
import firebaseKey from "./firebaseKey";
import * as firebase from "firebase/app";
import "firebase/firestore";
import CssBaseline from "@material-ui/core/CssBaseline";

firebase.initializeApp(firebaseKey);

firebase.firestore().settings({
    cacheSizeBytes: firebase.firestore.CACHE_SIZE_UNLIMITED
});

firebase.firestore().enablePersistence().catch((err) => {
    switch (err.code) {
        case 'failed-precondition':
            console.log("[Persistence error] Only one tab at the time!");
            break;
        case 'unimplemented':
            console.log("[Persistence error] The current browser does not support persistence");
            break;
        default:
            break
    }
});

const db = firebase.firestore();


export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            showSettings: false
        };


        this.theme = createMuiTheme({
                palette: {
                    type: 'dark',
                    background: {
                        surface: '#393939'
                    }
                },
            }
        );
    }

    componentDidMount() {
        this.reloadDataFromFirestore();
    }

    reloadDataFromFirestore = () => db.collection('Sizaines').onSnapshot((sizaines) => {
        let newData = [];
        sizaines.forEach(sizaine => {
            newData = [sizaine.data(), ...newData];
        });
        this.setState({data: newData});
    });

    updateValue = (sizaine, element, value) => {
        const update = {};
        update[element] = parseInt(value);
        db.collection('Sizaines').doc(sizaine).set(update, {merge:true}).then(()=>this.reloadDataFromFirestore());
    };

    render() {
        return <ThemeProvider theme={this.theme}>
            <CssBaseline/>
            <Router>
                <Switch>
                    <Route path="/settings/:sizaineName">
                        <SizaineSettingsPage data={this.state.data} updateValue={this.updateValue}/>
                    </Route>
                    <Route path="/settings">
                        <SettingsPage data={this.state.data}/>
                    </Route>
                    <Route path="/">
                        <DisplayPage data={this.state.data}/>
                    </Route>
                </Switch>
            </Router>
        </ThemeProvider>
    }


}
