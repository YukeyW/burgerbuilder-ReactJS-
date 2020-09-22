import React, {Component} from 'react';
import Layout from './containers/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import { Route, Switch, Redirect } from 'react-router-dom';
import Auth from './containers/Auth/Auth';
import Logout from './containers/Auth/Logout/Logout';
import {connect} from 'react-redux';
import * as actions from './store/actions/index';
import asyncComponent from './hoc/asyncComponent/asyncComponent';

const asyncCheckout = asyncComponent(() => {
  return import('./containers/Checkout/Checkout');
});

const asyncOrders = asyncComponent(() => {
  return import('./containers/Orders/Orders');
});

const asyncAuth = asyncComponent(() => {
  return import('./containers/Auth/Auth');
});

class App extends Component {
  componentDidMount () {
    this.props.onTryAutoSignup();
  }

  render() {
    let route = (
      <Switch>
        <Route path='/Auth' exact component={Auth}/>
        <Route path='/' exact component={BurgerBuilder}/>
        <Redirect to='/' />
      </Switch>
    )

    if (this.props.isAuthentication) {
      route = (
        <Switch>
          <Route path='/checkout' component={asyncCheckout}/>
          <Route path='/orders' component={asyncOrders}/>
          <Route path='/Auth' exact component={asyncAuth}/>
          <Route path='/Logout' exact component={Logout}/>
          <Route path='/' exact component={BurgerBuilder}/>
          <Redirect to='/' />
        </Switch>
      ) 
    }

    return (
      <Layout>
        {route}
      </Layout>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthentication: state.auth.token !== null
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
