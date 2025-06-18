// let name = prompt("Enter Your name");
// let age = Number(prompt("Enter your age"));
// let currentYear = 2025;
// let birthYear = Math.floor(currentYear-age);
// let message = `Hello, ${name}! you were born in approximately ${birthYear}.`;
// console.log(message);


const transactions = [
    { amount: 250, status : "completed"},
    { amount: 1500, status : "completed"},
    { amount: 75.5, status : "completed"},
    { amount: 1200, status : "completed"}

];

function categorizeTransaction(transaction) {
    if (transaction.status === "completed" && transaction.amount > 1000){
    return "VIP completed";
    } else if (transaction.status === "completed"){
    return "Standard completed";
    } else{
    return transaction.status;
    }
}

transactions.forEach(transaction => {
  let category = categorizeTransaction(transaction);
  console.log(`Amount: $${transaction.amount}, Status: ${category}`);
});

let totalCompleted = transactions.filter(t => t.status === "Completed").reduce((sum, t) => sum + t.amount, 0);
console.log(`Total Completed: $${totalCompleted > 0 ? totalCompleted : "None"}`);
