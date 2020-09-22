import React, { Component } from 'react';
import Burger from '../../component/Burger/Burger';
import Modal from '../../component/UI/Modal/Modal';
import BuildControl from '../../component/Burger/BuildControl/BuildControl';
import OrderSummary from '../../component/Burger/OrderSummary/OrderSummary';
import Spinner from '../../component/UI/Spinner/Spinner';
import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';


export class BurgerBuilder extends Component {
    state = {
        purchasing: false
    }

    componentDidMount() {
        this.props.onIngredients();
    }

    updatePurchasable = (ingredient) => {
        const sum = Object.keys(ingredient).map(igKey=>{
            return ingredient[igKey]
        }).reduce((sum,el)=>{return sum+el},0)
        return sum>0
        
    }

    purchaseHandler = () => {
        if (this.props.isAuthenticate) {
            this.setState({purchasing: true})
        } else {
            this.props.onSetAuthRedirectPath('/checkout');
            this.props.history.push('/auth')
        }
        
    }

    purchaseCancelHandler = () => {
        this.setState({
            purchasing: false
        })
    }

    purchaseContinueHandler = () => {
        this.props.onInitPurchase();
        this.props.history.push('/checkout');
    }

    render() {
        const disabledInfo = {
            ...this.props.ings
        };
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        let orderSummary = null

        let burger = this.props.error ? 'ingredients cannot be loaded' :  <Spinner/>
        if (this.props.ings) {
            burger = (
                <div>
                    <Burger ingredients={this.props.ings}/>
                    <BuildControl 
                        ingredientAdded={this.props.onIngredientAdded} 
                        ingredientRemove={this.props.onIngredientRemoved}
                        disabled={disabledInfo}
                        price={this.props.price}
                        ordered={this.purchaseHandler}
                        purchasable={this.updatePurchasable(this.props.ings)}
                        isAuthenticate={this.props.isAuth}/>
                </div>
            )
            orderSummary = <OrderSummary 
                            ingredients={this.props.ings} 
                            cancel={this.purchaseCancelHandler}  
                            clicked={this.purchaseContinueHandler}
                            price={this.props.price}/>
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

const mapStateToProps = state => {
    return {
        ings: state.burgerBuilder.ingredients,
        price: state.burgerBuilder.totalPrice,
        error: state.burgerBuilder.error,
        isAuth: state.auth.token
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onIngredientAdded: (ingName) => dispatch(actions.addIngredient(ingName)),
        onIngredientRemoved: (ingName) => dispatch(actions.removeIngredient(ingName)),
        onIngredients: () => dispatch(actions.initIngredients()),
        onInitPurchase: () => dispatch(actions.purchaseInit()),
        onSetAuthRedirectPath: (path) => dispatch(actions.setAuthRedirectPath(path))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios));