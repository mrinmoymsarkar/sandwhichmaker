import React, {Component} from 'react'

import Aux from '../../../hoc/Auxilary/Auxiliary';
import Button from '../../../components/UI/Button/Button';

class OrderSummary extends Component {

    //this could be functional component, doesnt have to be class component
    componentWillUpdate() {
        console.log('[OrderSummarry] WILLUPDATE')
    }

    render() {
        const ingredientSummary = Object.keys(this.props.ingredients)
            .map(igKey => {
                return (
                    <li key={igKey}>
                        <span style={{textTransform: 'capitalize'}}> {igKey} </span>:{this.props.ingredients[igKey]}
                    </li>)
            })

        return (
            <Aux>
                <h3> Your Order </h3>
                <p>A delicious sandwich with following ingredients</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total price: {this.props.price.toFixed(2)}</strong></p>
                <p>Continue to checkout?</p>
                <Button btnType="Danger" clicked={this.props.purchaseCanceled}> Cancel</Button>
                <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTNUE</Button>
            </Aux>

        );
    }
}


export default OrderSummary;