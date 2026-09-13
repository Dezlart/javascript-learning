function greet(name = "Гость", age = 18){
    console.log("Имя: ", name);
    console.log("Возраст: ", age);
}

greet("Pavel", 20);
greet("Pavel");
greet();

function multiply(){
    for (const n of arguments){
        console.log(n*2);
    }
}

multiply(2, 3, 4);

function showPerson(name, age, city){
    console.log("Имя:", name);
    console.log("Возраст:", age);
    console.log("Город:", city);
}

const person = ["Pavel", 20, "Krasnodar"];

showPerson(...person);

function hello(){
    console.log("Привет");
}

function bye(){
    console.log("Пока");
}

function execute(func){
    func();
}

execute(hello);
execute(bye);