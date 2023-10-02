function Bhaskara (a, b, c){
    var delta = (b*b)-4*a*c

    if (delta < 0){
        console.log ("A conta acaba aqui")
    }
    else {
        var x1 = (-b + Math.sqrt(delta)) / (2*a) 
        var x2 = (-b - Math.sqrt(delta)) / (2*a)
        console.log(`O delta deu ${delta}, o x1 deu ${x1} e o x2 deu ${x2}`)
    }
}
Bhaskara (31, 20, 10)