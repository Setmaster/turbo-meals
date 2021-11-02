import classes from './Input.module.css'

const Input = (props) => {


    return (
        <div className={classes.input}>
            <label htmlFor={props.input.id}>{props.label}</label>
            {/* all properties of props.input will be added as properties to input*/}
            <input {...props.input}/>
        </div>
    );
};

export default Input;