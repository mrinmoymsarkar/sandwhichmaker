import React, {Component} from 'react';
import  Aux from '../../hoc/Auxilary/Auxiliary';
import  Sandwhich from '../../components/Sandwhich/Sandwhich'
import BuildControls from '../../components/Sandwhich/BuildControls/BuildControls'
import  Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Sandwhich/OrderSummary/OrderSummary'
import axios from '../../axios-orders'
import Spinner from '../../components/UI/Spinner/Spinner'

const INGREDIENT_PRICES = {
    salad: 5.5,
    cheese: 10.4,
    meat: 30.3,
    bacon: 17.7
};

class SandwhichMaker extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 40,
        purchasable: false,
        purchasing:false,
        loading:false
    }

    updatePurchaseState (ingredients) {
        // const ingredients = {
        //     ...this.state.ingredients
        // };
        const sum = Object.keys(ingredients)
            .map(igKey => {
                return ingredients[igKey];
            })
            .reduce((sum, el) => {
                return sum + el;
            }, 0);
        this.setState({purchasable: sum >0})
    }


    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type]
        const updatedCount = oldCount + 1
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type]
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
        this.updatePurchaseState(updatedIngredients)
    }

    purchaseHandler= () => {
        this.setState({purchasing: true})
    }
    purchaseCancelHandler = () => {
        this.setState({purchasing:false})
    }

    purchaseContinueHandler = () => {
        //alert('You Continue')
        this.setState({loading:true});
        const order = {
            ingredients: this.state.ingredients,
            price:this.state.totalPrice,
            customer:{
                name: 'Mrinmoy Sarkar',
                address: {
                    street:"Dalinagar",
                    pincode: '402208',
                    country: 'India'
                },
                email: 'mrinmoy.sarkar@techprimelab.com'
            },
            deliveryMethod:'Fastest'
        }
        axios.post('/order.json',order)
            .then(response => {
                this.setState({loading:false, purchasing:false});
            })
            .catch(error =>  {
                this.setState({loading:false, purchasing:false});
            })
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type]
        if (oldCount<=0){
            return;
        }
        const updatedCount = oldCount - 1
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceDeduction = INGREDIENT_PRICES[type]
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
        this.updatePurchaseState(updatedIngredients)
    }


    render() {
        const disabledInfo = {
            ...this.state.ingredients
        };
        for (let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        let orderSummary =  <OrderSummary
            ingredients={this.state.ingredients}
            price = {this.state.totalPrice}
            purchaseCanceled = {this.purchaseCancelHandler }
            purchaseContinued = {this.purchaseContinueHandler}/>

        if (this.state.loading){
            orderSummary = <Spinner/>
        }

        return (
            <Aux>
                <Modal show = {this.state.purchasing} modalClosed = {this.purchaseCancelHandler}>
                    {orderSummary}
                </Modal>
                <Sandwhich ingredients={this.state.ingredients}/>
                <BuildControls
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    disabled = {disabledInfo}
                    purchasable = {this.state.purchasable}
                    ordered = {this.purchaseHandler}
                    price = {this.state.totalPrice}/>

    </Aux>
    )
    }

}

export default SandwhichMaker;