import Board from "../components/board/Board";
import SizaineProgressBoard from "../components/sizaineProgressBoard/SizaineProgressBoard";
import Background from "../components/background/Background";
import React, {useEffect, useRef, useState} from "react";
import {useHistory} from 'react-router-dom'
import './DisplayPage.css'

export default function DisplayPage(props) {

    let {data} = props;
    const history = useHistory();
    const [currentDisplay, setCurrentDisplay] = useState(0);

    const nextDisplay = () => setCurrentDisplay((currentDisplay + 1) % data.length);

    useInterval(nextDisplay, 5000);

    return <div className={'pageContainer'}>
        <Board>
            {data.map((sizaine, index) => {
                return <SizaineProgressBoard visible={currentDisplay === index} {...sizaine} key={index}/>
            })}
        </Board>
        <Background onShowSettings={()=>history.push('/settings')} onZukoClick={nextDisplay}/>
    </div>

}

function useInterval(callback, delay) {
    const savedCallback = useRef();

    // Remember the latest callback.
    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    // Set up the interval.
    useEffect(() => {
        function tick() {
            savedCallback.current();
        }
        if (delay !== null) {
            let id = setInterval(tick, delay);
            return () => clearInterval(id);
        }
    }, [delay]);
}
