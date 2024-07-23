
function add(a: number, b: number, c: number,) {
    return a * b * c
}
function ab(a: number, b: number, ) {
    return a + b 
}
function bs(a: number, b: number, ) {
    return a - b 
}
function ax(a: number, b: number, ) {
    return a / b 
}

console.log(add(99,99,99))
console.log(ab(12,9))
console.log(bs(99,11))
console.log(ax(108,9))

function grade(homework: number, midterm: number, final: number){
    let score: number = homework + midterm + final

    if (score < 50){
        return 'grade F'
    } else if (score > 50){
        return 'grade d'
    } else if (score > 60){
        return 'grade c'
    } else if (score > 70){
        return 'grade d'
    } else if (score > 80){
        return 'grade a'
    }
}
console.log(grade(30,11,20))

