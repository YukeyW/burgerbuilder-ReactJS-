import React, { Component } from 'react';
import Toolbar from '../../component/Navigation/Toolbar/Toolbar';
import { Content } from './style';
import SideDrawer from '../../component/Navigation/SideDrawer/SideDrawer';
import {connect} from 'react-redux';

class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer:  false})
    }

    
    sideDrawerHandler = () => {
        this.setState((prevState) => {
            return { showSideDrawer: !prevState.showSideDrawer };
        });
    }

    render() {
        return (
            <div>
                <Toolbar 
                    isAuth={this.props.isAuth}
                    clickHandler={this.sideDrawerHandler}/>
                <SideDrawer 
                    isAuth={this.props.isAuth}
                    open={this.state.showSideDrawer} 
                    closed={this.sideDrawerClosedHandler}/>
                <Content>
                    {this.props.children}
                </Content>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.token !== null
    }
}

export default connect(mapStateToProps)(Layout);