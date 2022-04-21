/*
What is DRY?
DONT REPEAT YOURSELF PRINCIPLES
    *ENSURE UNIQUE LOGIC IS WRITTEN IN ONE PLACE 
    *REUSING CODE LEADS TO LEANER CODEBASE
    *OVERSIMPLIFYING CAN LEAD TO MORE COMPLEXITY
*/

//1.ENSURE UNIQUE LOGIC IS WRITTEN IN ONE PLACE
//EX
class BankAccount {
  constructor(initialBalance) {
    this.balance = initialBalance;
  }
  deposit(amount) {
    this.balance += amount;
    return this.balance;
  }
}

//2.code reuse
const myacc = new BankAccount(10);
myacc.deposit(90000);

const myacc2 = new BankAccount(0.1);
myacc2.deposit(1);

//OVERSIMPLIFYING CAN LEAD TO MORE COMPLEXITY
