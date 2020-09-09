import React, { Fragment, Component } from 'react';
import { ModalContent } from './style';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children ;
    }

    render() {
        return (
            <Fragment>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed}/>
                <ModalContent show={this.props.show}>
                    {this.props.children}
                </ModalContent>
            </Fragment>
        )
    }
} 

export default Modal;
