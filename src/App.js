import React from "react";
import './App.css'
import Title from "./components/title/Title";
import Board from "./components/board/Board";
import Background from "./components/background/Background";

export default function App(props) {
    return <>
        <Title/>
        <Board>
            <h1>Pingouins</h1>
        </Board>
        <Background/>
    </>;
}
