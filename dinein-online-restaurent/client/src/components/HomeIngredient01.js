import React from 'react';
import '../App.css';
import vegetables from './headers/icon/5502254.jpg';
import HomeIngredient01Details from './HomeIngredientsDetails01';

const HomeIngredient01 = () => {

    return(
    
    <div className = "flex-HomeFounder">
         <HomeIngredient01Details/>
        <img src={vegetables} className = "image-HomeFounder1" alt=""/>
       
    </div>
)
}
export default HomeIngredient01;