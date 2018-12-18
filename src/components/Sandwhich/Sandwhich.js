import React from 'react';
import classes from './Sandwhich.css';
import SandwhichIngredient from './SandwhichIngredient/SandwhichIngredient';


const sandwhich = (props) => {
    let transformedIngredients = Object.keys(props.ingredients)
        .map(igKey =>{
            return[...Array(props.ingredients[igKey])].map((_,i)=> {
               return  <SandwhichIngredient key={igKey + i} type={igKey}/>
            });
        })
        .reduce((arr, el) => {
            return arr.concat(el)
        }, []);
    if(transformedIngredients.length  <= 0){
        transformedIngredients = <p>Please start adding ingredients</p>
    }
    console.log(transformedIngredients);
    return (
        <div className={classes.Sandwhich}>
            <SandwhichIngredient type = "bread-top"/>
            {transformedIngredients}
            <SandwhichIngredient type = "bread-bottom"/>
        </div>
    );
}
export default sandwhich;