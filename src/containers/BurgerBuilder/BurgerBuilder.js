import React, { Component } from 'react';
import Burger from '../../component/Burger/Burger';
import Modal from '../../component/UI/Modal/Modal';
import BuildControl from '../../component/Burger/BuildControl/BuildControl';
import OrderSummary from '../../component/Burger/OrderSummary/OrderSummary';
import Spinner from '../../component/UI/Spinner/Spinner';
import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}

class BurgerBuilder extends Component {
    state = {
        ingredients: null,
        totalPrice: 4,
        purchasable: false,
        purchasing: false,
        loading: false,
        error: false
    }

    componentDidMount() {
        axios.get('/ingredients.json')
            .then(response => {
                this.setState({ingredients: response.data});
                this.updatePurchasable(response.data)
            })
            .catch(error => {
                this.setState({error: true})
            })
    }

    updatePurchasable = (ingredient) => {
        const sum = Object.keys(ingredient).map(igKey=>{
            return ingredient[igKey]
        }).reduce((sum,el)=>{return sum+el},0)
        this.setState({
            purchasable: sum>0
        });
    }

    purchaseHandler = () => {
        this.setState({purchasing: true})
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const newCount = oldCount + 1;
        const updateIngredients = {
            ...this.state.ingredients
        };
        updateIngredients[type] = newCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({
            ingredients:updateIngredients,
            totalPrice: newPrice
        })
        this.updatePurchasable(updateIngredients)
    }

    removeIngredientHandler = (type) => {
        const count = this.state.ingredients[type];
        if (count > 0) {
            const newCount = count - 1;
            const updateIngredient = {...this.state.ingredients};
            updateIngredient[type] = newCount;
            const priceAddition = INGREDIENT_PRICES[type];
            const oldPrice = this.state.totalPrice;
            const newPrice = oldPrice - priceAddition;
            this.setState({
                ingredients:updateIngredient,
                totalPrice: newPrice
            }) 
            this.updatePurchasable(updateIngredient)
        }
    }

    purchaseCancelHandler = () => {
        this.setState({
            purchasing: false
        })
    }

    purchaseContinueHandler = () => {
        const queryParams = [];
        for (let i in this.state.ingredients) {
            queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i]))
        }
        queryParams.push('price=' + this.state.totalPrice);
        const queryString = queryParams.join('&');
        this.props.history.push({
            pathname: '/checkout',
            search: '?' + queryString
        });
    }

    render() {
        const disabledInfo = {
            ...this.state.ingredients
        };
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        let orderSummary = null

        let burger = this.state.error ? 'ingredients cannot be loaded' :  <Spinner/>
        if (this.state.ingredients) {
            burger = (
                <div>
                    <Burger ingredients={this.state.ingredients}/>
                    <BuildControl 
                        ingredientAdded={this.addIngredientHandler} 
                        ingredientRemove={this.removeIngredientHandler}
                        disabled={disabledInfo}
                        price={this.state.totalPrice}
                        ordered={this.purchaseHandler}
                        purchasable={this.state.purchasable}/>
                </div>
            )
            orderSummary = <OrderSummary 
                            ingredients={this.state.ingredients} 
                            cancel={this.purchaseCancelHandler}  
                            clicked={this.purchaseContinueHandler}
                            price={this.state.totalPrice}/>
        }
        if (this.state.loading) {
            orderSummary = <Spinner/>
        }

        return (
            <div>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    {orderSummary}
                </Modal>
                {burger}
            </div>
            
        )
    }
}

export default withErrorHandler(BurgerBuilder, axios);