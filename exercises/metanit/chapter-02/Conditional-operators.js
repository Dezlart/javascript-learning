let temperature = 18;
const weather = temperature >= 20 ? "Тепло" : "Холодно";
console.log(weather);

let username = null;
let age = 0;
const displayName = username ?? "Аноним";
const displayAge = age ?? "Возраст не указан";
console.log(displayName);
console.log(displayAge);
