function fizzBuzz(numero) {
    //3, 5, 3 && 5 else - nenhum



    if( numero % 3 == 0 ){

        return 'Fizz' 

    }else if (numero % 5 == 0){
        return'Buzz' 
    }else if (numero % 3 == 0 && numero % 5 == 3 ){
        return 'FizzBuzz'
    }else{
        return numero
    }