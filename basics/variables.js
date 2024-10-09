const accountId = 144553
let accountEmail = "enakshi0148@gmail.com"
var acccountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2 // not allowed


accountEmail = "ehwud@hc.com"
acccountPassword = "21211212"
accountCity = "Bathinda"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, acccountPassword,accountCity,accountState])