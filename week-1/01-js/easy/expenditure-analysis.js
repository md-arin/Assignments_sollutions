/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  let categoryTotals = {};

  transactions.forEach((transaction) => {
    const { category, price } = transaction;

    if (category in categoryTotals) {
      
        // The line is using the "in" operator in 
        //JavaScript to check if a property named category exists within the categoryTotals object.       

      categoryTotals[category] += price;

    } else {
      categoryTotals[category] = price;
    }
  });

  //This method returns an array of a given object's own enumerable string-keyed property [key, value] pairs. 
  // In this case, it converts the categoryTotals object into an 
  // array of arrays where each inner array contains a category (key) and its total spent (value).

  const result = Object.entries(categoryTotals).map(([category, total]) => {  
    return { category: category, totalSpent: total };
  });


    return result;
}

module.exports = calculateTotalSpentByCategory;
