function fizzBuzz(numero) {
    
    if (numero % 3 === 0 && numero % 5 === 0){
        return "FizzBuzz";
    }
    if (numero % 3 === 0){
        return "Fizz";
    }
    if(numero % 5 === 0){
       return "Buzz" ;    
    }
    else {
        const numeroString = String(numero)
        console.log (numeroString)
        return numeroString
        
    }
    
}
console.log(fizzBuzz(11))
module.exports = fizzBuzz;