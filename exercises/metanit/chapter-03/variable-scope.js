const x = 10;

function test(){
    const x = 20;

    {
        const x = 30;
        console.log(x);
    }

    console.log(x);
}

test();
console.log(x);

function example() {
    let a = 10;

    if (true) {
        let b = 20;
        var c = 30;

        console.log(a);
        console.log(b);
        console.log(c);
    }

    console.log(a);
    console.log(c);
}

example();