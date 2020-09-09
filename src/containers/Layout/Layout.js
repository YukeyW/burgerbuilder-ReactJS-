import React, { Component } from 'react';
import Toolbar from '../../component/Navigation/Toolbar/Toolbar';
import { Content } from './style';
import SideDrawer from '../../component/Navigation/SideDrawer/SideDrawer';

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
                <Toolbar clickHandler={this.sideDrawerHandler}/>
                <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler}/>
                <Content>
                    {this.props.children}
                </Content>
            </div>
        )
    }
}

export default Layout;