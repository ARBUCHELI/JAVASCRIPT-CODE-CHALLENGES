const username = Symbol("username");
const password = Symbol("password");

const user = {
    //username: "buchenwolf",
    //password: "1234566",
    [username]: "buchenwolf",
    [password]: "1234566",
    age: 27,
};

console.log(user.username);
console.log(user.password);