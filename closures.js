// ================================
// JAVASCRIPT CLOSURES
// ================================


// 1. Basic Closure

function outer() {
    let count = 0;

    function inner() {
        count++;
        console.log(count);
    }

    return inner;
}

const result = outer();

result(); // 1
result(); // 2
result(); // 3


// ================================
// 2. Private Variables
// ================================

function bankAccount() {
    let balance = 1000;

    return {
        getBalance() {
            return balance;
        },

        deposit(amount) {
            balance += amount;
        }
    };
}

const account = bankAccount();

console.log(account.getBalance()); // 1000

account.deposit(500);

console.log(account.getBalance()); // 1500

console.log(account.balance); // undefined


// ================================
// 3. Closure + Caching
// ================================

function memo() {
    let cache = {};

    return function (num) {

        if (cache[num]) {
            console.log("Cache se mila");
            return cache[num];
        }

        console.log("Calculation ho rahi hai");

        let result = num * num;

        cache[num] = result;

        return result;
    };
}

const square = memo();

console.log(square(5));  // Calculation ho rahi hai
                         // 25

console.log(square(5));  // Cache se mila
                         // 25

console.log(square(10)); // Calculation ho rahi hai
                         // 100

console.log(square(5));  // Cache se mila
                         // 25


// ================================
// 4. Closure + Callback
// ================================

function greet(name) {

    return function () {
        console.log("Hello " + name);
    };
}

const sayHello = greet("Gajal");

sayHello(); // Hello Gajal


// ================================
// 5. Stale Closure
// ================================

function createFunction() {

    let count = 0;

    return function () {
        console.log(count);
    };
}

const fn = createFunction();

fn(); // 0
