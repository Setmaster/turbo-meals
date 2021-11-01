import  classes from './MealItem.module.css';

const MealItem = (props) => {
const price = `$${props.price.toFixed(2)}`; // eg: 2.5542 -> 2.55

    return (
        <li>
            <div className={classes.meal}>
                <h3>{props.name}</h3>
                <div className={classes.description}>{props.description}</div>
                <div className={classes.price}>{price}</div>
            </div>
            <di>

            </di>
        </li>
    );
};

export default MealItem;