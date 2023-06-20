function fatorial(n) {
    let fat = 1
    for(var i = n; i > 1; i--) {
        fat *= i
        console.log(fat)
    }
}

fatorial(5)
