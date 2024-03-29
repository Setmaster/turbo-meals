import classes from './HeaderCartButton.module.css'
import CartIcon from "../Cart/CartIcon";
import {useContext, useEffect, useState} from "react";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
    const [btnHighlighted, setBtnHighlighted] = useState(false);
    const cartCtx = useContext(CartContext);
    const {items} = cartCtx;

    const numberOfCartItems = items.reduce(
        (currentNumber, item)=>{
            return currentNumber + item.amount
        }, 0
    );


    const btnClasses = `${classes.button} ${btnHighlighted ? classes.bump : ''}`

    useEffect(()=>{
        if(items.length === 0){
            return;
        }
        setBtnHighlighted(true);

        const timer = setTimeout(()=>{
            setBtnHighlighted(false);
        }, 300);

        // cleanup function
        return ()=>{
            clearTimeout(timer);
        }
    }, [items]);

    return (
        <button className={btnClasses} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon/>
            </span>
            <span>Your cart</span>
            <span className={classes.badge}>
                {numberOfCartItems}
            </span>
        </button>
    );
};

export default HeaderCartButton;