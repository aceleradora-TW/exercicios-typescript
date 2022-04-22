function numerosArmstrong(numero) {
   var charNum = String(numero)

   var arrayNum = []
   var cont = 0

   for(var i=0; i < charNum.length; i++){
    var elevacao = charNum[i] ** charNum.length
    arrayNum.push(elevacao)
   }

   for(var i=0; i < arrayNum.length; i++){
       cont = cont + arrayNum[i]
   }

   //var resultado = (cont == numero) ? 'Este nao eh um numero de Armstrong!' : 'Este eh um numero de Armstrong!'

   if(cont == numero){
       return 'Este eh um numero de Armstrong!'
   }
   return 'Este nao eh um numero de Armstrong!'


}
module.exports = numerosArmstrong;