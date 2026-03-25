function add(a,b){
    if(!(a > b)){
        throw new Error("number a must be greater than number b ")
    }
    return a+b
}



function sub(a,b){
    return a-b
}

function multiply(a,b){
    return a*b
}

add(2,5)
add(10,23)
add(34,45)
sub(10,12)


