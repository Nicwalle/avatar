import React from "react";
import {
    CircularProgressbar,
    CircularProgressbarWithChildren,
    buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import FireImage from '../../assets/images/fire.svg';
import WaterImage from '../../assets/images/water.svg';
import EarthImage from '../../assets/images/earth.svg';
import AirImage from '../../assets/images/air.svg';

import './SizaineProgress.css'

export default function SizaineProgress(props) {

    let {name, air, earth, water, fire, visible} = props;

    if (!visible) return <></>;
    console.log(props)
    return <div style={{color: "white"}}>
        <h1 className={'sizaineName'}>{name}</h1>
        <div className={'container'}>
            <div className={'child'}>
                <CircularProgressbarWithChildren
                    value={fire}
                    circleRatio={0.75}
                    strokeWidth={18}
                    styles={buildStyles({
                        rotation: 1 / 2 + 1 / 8,
                        strokeLinecap: "round",
                        trailColor: '#cb926a',
                        pathColor: '#ED694A',
                    })}
                >
                    <img alt={'Feu'} src={FireImage} width={'40%'} />
                </CircularProgressbarWithChildren>
            </div>
            <div className="child">
                <div className="scoreContainer">
                    <span className={'score'}>{air+earth+fire+water}</span>
                    <span style={{fontSize:32}}>points</span>
                </div>
            </div>
            <div className={'child'}>
                <CircularProgressbarWithChildren
                    value={water}
                    circleRatio={0.75}
                    strokeWidth={18}
                    styles={buildStyles({
                        rotation: 1 / 2 + 1 / 8,
                        strokeLinecap: "round",
                        trailColor: '#cb926a',
                        pathColor: '#619FCD',
                    })}
                >
                    <img alt={'Eau'} src={WaterImage} width={'40%'} />
                </CircularProgressbarWithChildren>
            </div>
        </div>
        <div className="container">
            <div className={'child'}>
                <CircularProgressbarWithChildren
                    value={earth}
                    circleRatio={0.75}
                    strokeWidth={18}
                    styles={buildStyles({
                        rotation: 1 / 2 + 1 / 8,
                        strokeLinecap: "round",
                        trailColor: '#cb926a',
                        pathColor: '#66BB20',
                    })}
                >
                    <img alt={'Terre'} src={EarthImage} width={'40%'} />
                </CircularProgressbarWithChildren>
            </div>
            <div className={'child'}>
                <CircularProgressbarWithChildren
                    value={air}
                    circleRatio={0.75}
                    strokeWidth={18}
                    styles={buildStyles({
                        rotation: 1 / 2 + 1 / 8,
                        strokeLinecap: "round",
                        trailColor: '#cb926a',
                        pathColor: '#919191',
                    })}
                >
                    <img alt={'Air'} src={AirImage} width={'40%'} />
                </CircularProgressbarWithChildren>
            </div>
        </div>


    </div>
}
