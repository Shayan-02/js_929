// Add your JavaScript code here
function sumArrays(arr1, arr2) {
    let array3 = [];

    // ساخت آرایه سوم با جمع عناصر متناظر
    for (i = 0; i < arr1.length; i++) {
        array3.push(arr1[i] + arr2[i]);
    }

    return array3;
}

// نمایش نتیجه


let array1 = [];
let array2 = [];

// گرفتن ۵ عدد برای آرایه اول
for (let i = 0; i < 5; i++) {
    let input = +prompt(`آرایه اول - عدد ${i + 1} را وارد کنید:`);
    array1.push(input);
}

// گرفتن ۵ عدد برای آرایه دوم
for (let i = 0; i < 5; i++) {
    let input = +prompt(`آرایه دوم - عدد ${i + 1} را وارد کنید:`);
    array2.push(input);
}

alert(`آرایه سوم (جمع عناصر): ${sumArrays(array1, array2)}`);
