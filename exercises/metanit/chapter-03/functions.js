function sayJavaScript(){
    console.log("Я изучаю JavaScript");
};
sayJavaScript();
sayJavaScript();

function first() {
    console.log("Первая функция");
}

function second() {
    console.log("Вторая функция");
}

let action = first;
action();
action = second;
action();