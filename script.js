/* Assignment: Building a Shopping List
In this assignment, you'll create a shopping list using arrays and practice manipulating them with various methods and properties.*/

/*Part 1: Creating the Shopping List

1. Create an empty array called shoppingList.
2. Use the push() method to add at least 5 items to your shoppingList.
3. Log the shoppingList array to the console.
4. Use the length property to find the number of items in your shoppingList, and log the result to the console.*/

let shoppingList = [];
shoppingList.push("pen", "bag", "pencil", "wood", "notebook");
console.log(shoppingList);
shoppingList.length;

/*Part 2: Modifying the Shopping List

1.Use the pop() method to remove the last item from your shoppingList.
2. Log the updated shoppingList array to the console.
3. Use the unshift() method to add a new item to the beginning of your shoppingList.
4. Log the updated shoppingList array to the console.
5. Use the shift() method to remove the first item from your shoppingList.
6. Log the updated shoppingList array to the console.*/

shoppingList.pop();
console.log(shoppingList);
shoppingList.unshift("hammer");
console.log(shoppingList);
shoppingList.shift();


/*Bonus:

1. Create a new array called groceryStore and populate it with at least 10 different items.
2. Use an array method that will allow you to check if your shoppingList includes an item from the groceryStore array.
3. Log the result to the console.
4. Use an array method to find the index of an item from the shoppingList in the groceryStore array.
5. Log the index to the console.
6. Use the slice() method to create a new array called cartItems that contains the first 3 items from your shoppingList.
7. Log the cartItems array to the console.*/