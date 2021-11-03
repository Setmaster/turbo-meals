import classes from './AvailableMeals.module.css';
import Card from "./Card";
import Meals from "./Meals";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
    {
        id: 'm1',
        name: 'Picanha Steak',
        description: 'Finest steak seasoned with bold spices and seared\n' +
            'just right with fries as side.',
        price: 22.99,
    },
    {
        id: 'm2',
        name: 'Bloomin\' Onion',
        description: 'Our special crispy onion with dipping spicy sauce.',
        price: 16.5,
    },
    {
        id: 'm3',
        name: 'Springs Chicken',
        description: 'Flame-grilled chicken breast topped with crisp\n' +
            'strips of bacon, and our honey garlic sauce.',
        price: 18.99,
    },
    {
        id: 'm4',
        name: 'Green Bowl',
        description: 'Chicken tenders served over mixed lettuce, with tomato,\n' +
            'cheese, bacon, and homemade dressing.',
        price: 10.99,
    },
];

const AvailableMeals = () => {
    const mealsList = DUMMY_MEALS.map(meal =>
        <MealItem
            key={meal.id}
            id = {meal.id}
            name={meal.name}
            description={meal.description}
            price={meal.price}
        />);

    return (
        <section className={classes.meals}>
            <Card>
                <ul>
                    {mealsList}
                </ul>
            </Card>
        </section>
    );
};

export default AvailableMeals;