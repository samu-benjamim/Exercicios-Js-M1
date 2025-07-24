function fazerTaboada (num){
    for (let i = 1; i <= 10; i++){
        let res = i * num
        console.log(`${i} x ${num} = ${res}`)
    }
}

(function main(){
    fazerTaboada(7);
})()

