import React from "react";
import AangImage from '../../assets/images/aang.png';
import ZukoImage from '../../assets/images/zuko.png';
import CloudImage1 from '../../assets/images/cloud1.svg';
import CloudImage2 from '../../assets/images/cloud2.svg';
import CloudImage3 from '../../assets/images/cloud3.svg';
import CloudImage4 from '../../assets/images/cloud4.svg';
import './Background.css';

export default function Background(props) {
    let {onShowSettings} = props;
    return <>
        <img src={AangImage} alt={'Aang'} className={'aangImage'} onDoubleClick={onShowSettings}/>
        <img src={ZukoImage} alt={'Zuko'} className={'zukoImage'}/>
        <img src={CloudImage1} alt={'Cloud'} className={'cloud cloud1'}/>
        <img src={CloudImage2} alt={'Cloud'} className={'cloud cloud2'}/>
        <img src={CloudImage3} alt={'Cloud'} className={'cloud cloud3'}/>
        <img src={CloudImage4} alt={'Cloud'} className={'cloud cloud4'}/>
        <img src={CloudImage2} alt={'Cloud'} className={'cloud cloud5'}/>
    </>;


}
