const age = 20;

if(age < 18){
    console.log("Доступ запрещен");
}
else if(age >= 18 && age <= 64){
    console.log("Доступ разрешен");
}
else{
    console.log("Льготный доступ");
}

const role = "admin";

switch(role){
    case "admin":
        console.log("Полный доступ");
        break;
    case "user":
        console.log("Обычный доступ");
        break;
    case "guest":
        console.log("Гостевой доступ");
        break;
    default:
        console.log("Неизвестная роль");
        break;
}
