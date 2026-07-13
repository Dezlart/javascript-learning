const READ = 1;
const WRITE = 2;
const DELETE = 4;

let permissions = READ | WRITE;

console.log("Начальные правав:", permissions);

const canRead = (permissions & READ) !== 0;
console.log("Может читать:", canRead);

const canDelete = (permissions & DELETE) !== 0;
console.log("Может удалять:", canDelete);

// Добавь право DELETE
permissions = permissions | DELETE;

console.log("Права после добавления DELETE:", permissions);

// Удали право WRITE
permissions = permissions & ~WRITE;

console.log("Итоговые права:", permissions);

const canWrite = (permissions & WRITE) !== 0;
console.log("Может записывать", canWrite);