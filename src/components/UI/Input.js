import classes from './Input.module.css'
import {forwardRef} from "react";

const Input = forwardRef((props, ref) => {


    return (
        <div className={classes.input}>
            <label htmlFor={props.input.id}>{props.label}</label>
            {/* all properties of props.input will be added as properties to input*/}
            <input ref={ref} {...props.input}/>
        </div>
    );
});

export default Input;