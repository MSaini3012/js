const accountId = 12345
let accountEmail = "mohit@google.com"
var accountPassword = "23"
accountCity = "Jaipur"

// accountId = 2   not allowed

console.log(accountId);

accountEmail = "ms@google.com"
accountPassword = "1233"
accountCity = "Mumbai"
let accountState;

/*

prefer not use var
Because of issue ni Block scope and Functional scope

*/

console.table([accountEmail , accountId , accountPassword , accountCity , accountState])