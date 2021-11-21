import React from 'react';
import '../App.css';
import crew from './headers/icon/3691638.jpg';
import HomeCrewDetails from './HomeCrewDetail';

const HomeCrew = () => {

    return(
    
    <div className = "flex-HomeFounder">
        <HomeCrewDetails/>
        <img src={crew} className = "image-HomeFounder1" alt=""/>
        
    </div>
)
}
export default HomeCrew;