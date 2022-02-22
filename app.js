//selectıng html elements
let container = document.querySelector(".container");
let result1 = document.getElementById("screen1");
let result2 = document.getElementById("screen2");

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
                default:break;
            }
            sayi1 = "";
        }
        //when only one number entered
        else if(total == "" ){
            total = sayi1;
            sayi1 = "";
            result2.innerHTML = "";
            
        }
        //add  new operator in array and remove old operator
        islem.push(e.target.value);
            while (islem.length > 1 ){
                islem.shift();
            }
            //thıs block for when only get one number and press "=" button then  move on number to total area
            if (islem[0] == "=") {

                if ( total == Infinity){

                result1.innerHTML= "ERROR";
                result2.innerHTML = "";
                total = 0

                }
                else{
                    result1.innerHTML= total;
                result2.innerHTML = "";

                }
                
            }
            else {
                if ( total == Infinity){

                    result1.innerHTML= "ERROR";
                    result2.innerHTML = "";
                    total = "0";
    
                    }
                    else{
                result1.innerHTML = total + " " + islem[0] ;
                result2.innerHTML = "";
            }
            }
            
            
    }

    //action after press any number button 
    if (e.target.classList.contains('num')){
        sayi1 += e.target.value;
        result2.innerHTML = sayi1;
    }

    //when user press ac button then everything is clear
    if (e.target.classList.contains('btn1')){
        total = "";
        sayi1 = "";
        islem.shift();
        result1.innerHTML = "";
        result2.innerHTML = "";
    }

    // changing number multiply with minus operand
    if (e.target.classList.contains('btn2')){
        if (sayi1 != ""){
            sayi1 = -(+sayi1)
            result2.innerHTML = sayi1;
        }
        else {
            total = -(total)
            result2.innerHTML = total
        }
    }

})


//clock

const updateTime = () => {
  let clock = document.querySelector(".clock");
  let currentTime = new Date();
  let currentHour = currentTime.getHours();
  let currentMinute = currentTime.getMinutes();
  clock.innerHTML = currentHour + ":" + currentMinute;
};

setInterval(updateTime, 1000);
updateTime();