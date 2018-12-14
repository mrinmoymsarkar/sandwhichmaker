import React from 'react';
import classes from './Sandwhich.css';
import SandwhichIngredient from './SandwhichIngredient/SandwhichIngredient';


const sandwhich = (props) => {
    return (
        <div className={classes.Sandwhich}>
            <SandwhichIngredient type = "bread-top"/>
            <SandwhichIngredient type = "cheese"/>
            <SandwhichIngredient type = "meat"/>
            <SandwhichIngredient type = "bread-bottom"/>
        </div>
    );
}
export default sandwhich;