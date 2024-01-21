function calculator(){
    var rate = (parseFloat(document.getElementById('interest').value)/100)/12;

    var price = parseFloat(document.getElementById('price').value);

    var principal = price - parseFloat(document.getElementById('down').value);

    var term =parseFloat(document.getElementById('term').value) * 12;

    var mortgage = principal * ((rate * Math.pow((1+ rate), term))/(Math.pow((1+ rate), term) -1));

    if (mortgage < 0){
        document.getElementById("result").innerText = 'Result unavailable, try different numbers';
    }else if (mortgage=Infinity){
        document.getElementById("result").innerText = 'Result unavailable, try different numbers';
    } else {
          document.getElementById("result").innerText = 'The monthly payment is $' + mortgage.toFixed(2);
    }
}
setInterval(calculator,100);