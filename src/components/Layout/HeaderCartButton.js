import classes from './HeaderCartButton.module.css'
import CartIcon from "../Cart/CartIcon";
import {useContext} from "react";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
    const ctx = useContext(CartContext);

    return (
        <button className={classes.button} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon/>
            </span>
            <span>Your cart</span>
            <span className={classes.badge}>
                {ctx.totalAmount}
            </span>
        </button>
    );
};

export default HeaderCartButton;