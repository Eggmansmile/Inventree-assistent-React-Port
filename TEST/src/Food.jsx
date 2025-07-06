function Food(){
    // It's more common in React to store lists of items in an array
    // and then use .map() to render them.
    const foods = ["orange", "apple", "banana"];

    return( 
        <ul>   
            {foods.map((food, index) => <li key={index}>{food}</li>)}
        </ul>
    );
}

export default Food;
