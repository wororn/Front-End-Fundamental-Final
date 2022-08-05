const firstNumber = "-";
const secondNmber = "-";
const operator = "-";

const button = document.queryselector("#submit");

const nama = document.querySelector("#nama");
const phone = document.querySelector("#phone");
const email = document.querySelector("#email");


button.addEventListener('click',function(event) {

    const history = {
        firstNumber: nama,
        secondNumber: phone,
        operator: email    
        }
        
        putHistory(history);
        renderHistory();
        
});