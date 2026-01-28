let isReversed = function(number){
    let arr = [];
    const sNum = String(number)
    for (j = sNum.length - 1; j >= 0; j--){
        arr.push(+sNum[j])}
    console.log(sNum === arr.join("") ? "ok" : "no ok");
}


isReversed(121)
isReversed(123)

// let arr = [];

// for (i = 0; i < sNum.length; i++){
    //     arr.push(Number(sNum[i]))}

    // for (j = 0; j < String(num).length; j++){
        //     arr2.unshift(Number(String(num)[j]));}

// let sarr = arr.join("");