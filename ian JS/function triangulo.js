function triangulo(a, b, c){
    if (a == b && b == c){
        console.log ("O triangulo é equilátero")  
    }
    else if (a == b && b != c || a == c && c != b){
        console.log ("O triangulo é isósceles")
    }
    else if (a != b && b != c){
        console.log ("O triangulo é escaleno")
    }
}
triangulo (2, 3, 2)
