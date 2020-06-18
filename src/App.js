import React from "react";
import './App.css'
import Title from "./components/title/Title";
import Board from "./components/board/Board";
import Background from "./components/background/Background";
import SizaineProgress from "./components/sizaineProgress/SizaineProgress";

import data from "./data";

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data,
            currentDisplay: 0
        };
    }

    componentDidMount() {
        this.carouselInterval = setInterval(()=> this.setState({currentDisplay: (this.state.currentDisplay + 1) % 6}), 5000)
    }

    componentWillUnmount() {
        clearInterval(this.carouselInterval)
    }

    render() {
        return <>
            <Board>
                {this.state.data.map((sizaine, index) => {
                    console.log(index);
                    return <SizaineProgress visible={this.state.currentDisplay === index} {...sizaine}/>
                })}
            </Board>
            <Background/>
        </>;
    }


}
