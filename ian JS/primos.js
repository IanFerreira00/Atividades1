function MuliplicaSemMultiplica(num1, num2){
    let resultadoMultiplica = 0
    for(let i=0; i < num2; i++){
        resultadoMultiplica += num1
    }
    return resultadoMultiplica
}
const num1 = 5
const num2 = 3
const resultadoMultiplica = MuliplicaSemMultiplica(num1, num2)
console.log(`o resultado da multiplicação de ${num1} e ${num2} é ${resultadoMultiplica}`)