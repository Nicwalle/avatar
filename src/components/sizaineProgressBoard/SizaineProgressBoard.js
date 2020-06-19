import React from "react";
import "react-circular-progressbar/dist/styles.css";
import FireImage from '../../assets/images/fire.svg';
import WaterImage from '../../assets/images/water.svg';
import EarthImage from '../../assets/images/earth.svg';
import AirImage from '../../assets/images/air.svg';
import ElementProgress from "../elementProgress/ElementProgress";
import './SizaineProgressBoard.css'

export default function SizaineProgressBoard(props) {

    let {name, air, earth, water, fire, bonus, visible} = props;

    if (!visible) return <></>;


    return <div style={{color: "white"}}>
        <h1 className={'sizaineName'}>{name}</h1>
        <div className={'container'}>
            <div className={'child'}>
                <ElementProgress name={'Feu'} value={fire} color={'#ED694A'} image={FireImage}/>
            </div>
            <div className="child scoreContainer">
                <span className={'score'}>{scoreForDisplay(air+earth+water+fire+bonus)}</span>
            </div>
            <div className={'child'}>
                <ElementProgress name={'Eau'} value={water} color={'#619FCD'} image={WaterImage}/>
            </div>
        </div>
        <div className="container">
            <div className={'child'}>
                <ElementProgress name={'Terre'} value={earth} color={'#66BB20'} image={EarthImage}/>
            </div>
            <div className="child">
                <span className={'bonusLabel'}>Bonus:</span>
                <span className={'bonus'}>{scoreForDisplay(bonus)}</span>
            </div>
            <div className={'child'}>
                <ElementProgress name={'Air'} value={air} color={'#919191'} image={AirImage}/>
            </div>
        </div>
    </div>
}

function scoreForDisplay(score) {
    const stringScore = Math.round(score).toString();
    return [...stringScore].map((letter, index) => <span className={'paperSheet'} key={index}>{letter}</span>);
}
