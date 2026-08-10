const age = 19;
const hasTicket = true;
const isBanned = false;
const hasStudentCard = true;

const isAdult = age >= 18;
const canEnter = isAdult && hasTicket && !isBanned;
const hasDiscount = hasStudentCard || age < 18;
const shouldRefuseEntry = isBanned || !hasTicket;

console.log("Совершеннолетний:", isAdult);
console.log("Можно войти:", canEnter);
console.log("Есть скидка:", hasDiscount);
console.log("Нужно отказать во входе:", shouldRefuseEntry);