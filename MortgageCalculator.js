function calculator(){
    var rate = (parseFloat(document.getElementById('interest').value)/100)/12;

    var price = parseFloat(document.getElementById('price').value);

    var principal = price - parseFloat(document.getElementById('down').value);

    var term =parseFloat(document.getElementById('term').value) * 12;

    var mortgage = principal * ((rate * Math.pow((1+ rate), term))/(Math.pow((1+ rate), term) -1));

    if (mortgage < 0){
        document.getElementById("result").innerText = 'Result unavailable, try different numbers';
    }else if (mortgage==Infinity){
        document.getElementById("result").innerText = 'Result unavailable, try different numbers';
    } else {
          document.getElementById("result").innerText = 'The monthly payment is $' + mortgage.toFixed(2);
    }
}
setInterval(calculator,100);

function loan(){
    var monthly = (parseFloat(document.getElementById('loanInterest').value)/100)/12;

    var pv = (parseFloat(document.getElementById('loan').value));

    var term = (parseFloat(document.getElementById('loanTerm').value));

    var pmt = (pv*monthly)/(1-Math.pow((1+monthly), -term));

    if (pmt < 0){
        document.getElementById("loanResult").innerText = 'Result unavailable, try different numbers';
    }else 
          document.getElementById("loanResult").innerText = 'The monthly payment is $' + pmt.toFixed(2);
}
setInterval(loan,100);

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 6000); // Change image every 2 seconds
}