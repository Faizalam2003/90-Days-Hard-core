function createBankAccount(initialBalance){

    let balance = initialBalance;
    return {
        deposit(amount){
            balance += amount;
        },
        withdraw(amount){
            if (amount <= balance) balance -= amount;
            else console.log("Insufficient funds");
        },
        getBalance(){
            return balance;
        }
    }

}

const myAccount = createBankAccount(1000);
myAccount.deposit(500); // Adds 500 to balance
console.log(myAccount.getBalance()); // 1500
myAccount.withdraw(200);
console.log(myAccount.getBalance()); // 1300
// Can't directly access `balance`
console.log(myAccount.balance); // undefined