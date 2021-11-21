import React from 'react';
import '../App.css';
import cheese from './headers/icon/1970483.jpg';
import HomeIngredient02Details from './HomeIngredientDetails02';

const HomeIngredient02 = () => {

    return(
    
    <div className = "flex-HomeFounder">
        <img src={cheese} className = "image-HomeFounder1" alt=""/>
        <HomeIngredient02Details/>
    </div>
)
}
export default HomeIngredient02;