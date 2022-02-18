let container = document.querySelector(".container");
let result1 = document.getElementById("result1");
let result2 = document.getElementById("result2");
let total = [];
let sayi1 = [];
let sayi2 = [];
let islem = [];

container.addEventListener("click", (e) => {

    if (e.target.classList.contains('islem')){
        islem.push(e.target.value);
        if (total.length > 0 &&  sayi1.length > 0 ) {
            sayi2  = total.join('');
            total = +total.join('') + (+sayi1.join(''));
            console.log(total,typeof(total));
        }
        else if(sayi2.length == 0){
            sayi2 = sayi1;
            sayi1 = [];
        }
        else if (sayi1.length >0 && sayi2.length>0) {
            total = +(sayi1.join('')) + (+(sayi2.join('')));
            console.log(total,typeof(total));
        }
    }
    if (e.target.classList.contains('num')){
        sayi1.push(e.target.value);
        console.log(sayi1)
    }
    if (islem.length >= 2 ){
        islem.shift();
    }

})
