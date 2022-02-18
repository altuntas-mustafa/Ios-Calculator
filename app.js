//selectıng html elements
let container = document.querySelector(".container");
let result1 = document.getElementById("result1");
let result2 = document.getElementById("result2");

//variables created
let total = "";
let sayi1 = "";
let islem = [];

//takıng action from user
container.addEventListener("click", (e) => {


//the area is calculate when user click operator button  
    if (e.target.classList.contains('islem')){
        
        if (sayi1 != "" && total != "" ) {
            switch (islem[0]){
                case '+' : total = +total+(+sayi1) ;break;
                case "-" : total = +total-(+sayi1);break;
                case "/" : total = +total/(+sayi1);break;
                case "*" : total = +total*(+sayi1);break;
                case "%" : total = (+total*+sayi1)/(100);break;
                case "=" : {
                    if (islem[0] == "=" && sayi1 == "") {
                        result1.value = "";
                        result2.value = total;
                    }
                    else {
                    switch (islem[0]){
                        case '+' : total = +sayi1+(+sayi2);break;
                        case "-" : total = s2-s1 ;break;
                        case "/" : total = +sayi1/(+sayi2);break;
                        case "*" : total = +sayi1*(+sayi2);break;
                        case "%" : total = (+total*+sayi1)/(100);break;
                        default:break;
                    }    
                    
                    }
                }
                default:break;
            }
            sayi1 = "";
        }
        //when only one number entered
        else if(total == "" ){
            total = sayi1;
            sayi1 = "";
            result2.value = "";
            
        }
        //add  new operator in array and remove old operator
        islem.push(e.target.value);
            while (islem.length > 1 ){
                islem.shift();
            }
            //thıs block for when only get one number and press "=" button then  move on number to total area
            if (islem[0] == "=") {
                result1.value = total;
                result2.value = "";
            }
            else {
                result1.value = total + " " + islem[0] ;
                result2.value = "";
            }
            
    }

    //action after press any number button 
    if (e.target.classList.contains('num')){
        sayi1 += e.target.value;
        result2.value = sayi1;
    }

    //when user press ac button then everything is clear
    if (e.target.classList.contains('btn1')){
        total = "";
        sayi1 = "";
        sayi2 = "";
        islem.shift();
        result1.value = "";
        result2.value = "";
    }

    // changing number multiply with minus operand
    if (e.target.classList.contains('btn2')){
        if (sayi1 != ""){
            sayi1 = -(+sayi1)
            result2.value = sayi1;
        }
        else {
            total = -(total)
            result2.value = total
        }
    }

})
