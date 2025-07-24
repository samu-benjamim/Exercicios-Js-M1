function listarPares (numMin, numMax){
    var listPares = []
    for (let i = numMin; i <= numMax; i++){
        if ((i % 2) === 0){
            listPares.push(i)
        }
    }
    console.log(listPares)
}

(function main(){
    listarPares(1, 80)
})()