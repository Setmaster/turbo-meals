import classes from './Modal.module.css';
import {Fragment} from "react";
import {createPortal} from "react-dom";

const Backdrop = (props) => {
    return (
        <div className={classes.backdrop}/>
    );
};

const ModalOverlay = (props) => {
    return (
        <div className={classes.modal}>
            <div>{props.children}</div>
        </div>
    );
};

const portalElement = document.getElementById('overlays');

const Modal = (props) => {


    return (
        <Fragment>
            {createPortal(<Backdrop/>, portalElement)}
            {createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
        </Fragment>
    );
};

export default Modal;