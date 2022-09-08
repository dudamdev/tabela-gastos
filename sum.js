function clicar() {
  var salary = document.querySelector(".salary").value;

  var plan1 = document.querySelector("#plan1").value;
  var plan2 = document.querySelector("#plan2").value;
  var plan3 = document.querySelector("#plan3").value;
  var plan4 = document.querySelector("#plan4").value;
  var plan5 = document.querySelector("#plan5").value;
  var plan6 = document.querySelector("#plan6").value;
  var plan7 = document.querySelector("#plan7").value;
  var plan8 = document.querySelector("#plan8").value;
  var plan9 = document.querySelector("#plan9").value;
  var plan10 = document.querySelector("#plan10").value;
  var plan11 = document.querySelector("#plan11").value;

  var plantotal =
    parseInt(plan1) +
    parseInt(plan2) +
    parseInt(plan3) +
    parseInt(plan4) +
    parseInt(plan5) +
    parseInt(plan6) +
    parseInt(plan7) +
    parseInt(plan8) +
    parseInt(plan9) +
    parseInt(plan10) +
    parseInt(plan11);

  document.querySelector(".plan-total").innerHTML = plantotal;

  var savings = parseInt(salary) - parseInt(plantotal);
  document.querySelector(".savings").innerHTML = savings;
}
