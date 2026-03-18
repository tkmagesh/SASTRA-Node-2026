function add(x,y) {
    return x + y
}

function subtract(x,y){
    return x - y;
}

let calculator = {
    add : add,
    subtract : subtract
}

// exporting the calculator the object
module.exports = calculator;