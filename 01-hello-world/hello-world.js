console.log('Hello, World!')

const is_24_odd = is_odd(24)
console.log(`is 24 odd ? : ${is_24_odd}`)

function is_odd(no) {
    if (no % 2 === 0){
        return false
    } else {
        return true
    }
}

function print_evens(count){
    for (let no = 0; no < count; no++){
        console.log(no * 2)
    }
}

print_evens(10)

function get_odds(count){
    let odd_nos = []
    for (let no = 0; no < count; no++){
        odd_nos.push((no * 2)+1)
    }
    return odd_nos
}

let odd_nos = get_odds(15)
// console.log(`odd numbers : ${odd_nos}`);

// iterate through the data from the array 
for (let odd_no of odd_nos){
    console.log(`odd no : ${odd_no}`)
}

// objects
let product = { 
    id : 100,
    name : 'Pen',
    cost : 10
}

// accessing the attributes (use '.' notation)
console.log(product.id)
console.log(product.name)
console.log(product.cost)

// change the attribute value (10% discount applied)
product.cost = product.cost * 0.9
console.log(`after applying 10% discount, product cost = ${product.cost}`)
