import React, {Component} from 'react';
import { Contact, Button } from './style';
import axios from '../../../axios-orders';
import Spinner from '../../../component/UI/Spinner/Spinner';
import { withRouter } from 'react-router-dom';
import Input from '../../../component/UI/Input/Input';

class ContactData extends Component {
    state = {
        orderForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Name'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            street: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Street'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            zipCode: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'ZIP Code'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            country: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Country'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Your E-Mail'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            deliveryMethod: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        {value: 'fastest', displayValue: 'Fastest'},
                        {value: 'cheapest', displayValue: 'Cheapest'}
                    ]
                },
                value: ''
            }
        },
        loading: false
    }

    orderHandler = (event) => {
        event.preventDefault()
        this.setState({loading:true});
        const formData = {};
        for (let formIdentifier in this.state.orderForm) {
            formData[formIdentifier] = this.state.orderForm[formIdentifier].value
        }
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            orderData: formData
        }
        axios.post('/orders.json', order)
            .then(response => {
                this.setState({ loading: false});
                this.props.history.push('/');
            })
            .catch(error => {
                this.setState({ loading: false});
            });
    }

    checkValidity(value, rules) {
        let isValid = false;

        if (rules.required) {
            isValid = value.trim() !== '';
        }

        return isValid;
    }

    handleChanged = (event, inputIdentifier) => {
        const updateOrderForm = {...this.state.orderForm};
        const updateFormElement = {...updateOrderForm[inputIdentifier]};
        updateFormElement.value = event.target.value;
        updateFormElement.valid = this.checkValidity(updateFormElement.value, updateFormElement.validation)
        updateFormElement.touched = true;
        updateOrderForm[inputIdentifier] = updateFormElement;
        this.setState({orderForm:updateOrderForm})
    }

    render() {
        const formElementsArray = [];
        for (let key in this.state.orderForm) {
            formElementsArray.push({
                id: key,
                config: this.state.orderForm[key]
            });
        }
        let form = (<form onSubmit={this.orderHandler}>
                        {formElementsArray.map(formElement => (
                            <Input 
                                key={formElement.id}
                                elementType={formElement.config.elementType} 
                                elementConfig={formElement.config.elementConfig} 
                                value={formElement.config.value}
                                inValid={!formElement.config.valid}
                                shouldValidate={formElement.config.validation}
                                touched={formElement.config.touched}
                                change={(event) => this.handleChanged(event, formElement.id)}/>
                        ))}
                        <Button>ORDER</Button>
                    </form>)
        if (this.state.loading) {
            form = <Spinner/>
        }

        return (
            <Contact>
                <h4>Enter your Contact Data</h4>
                {form}
            </Contact>
        )
    }
}

export default withRouter(ContactData);
