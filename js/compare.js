//car
let carArr = [];

class Car {
  constructor(
    nome,
    preco,
    alturaCacamba,
    alturaVeiculo,
    alturaSolo,
    capacidadeCarga,
    motor,
    potencia,
    volumeCacamba,
    roda,
    image
  ) {
    /****************** ADDED CODE 1 ******************/
    /* Populates class variables */
    this.nome = nome;
    this.preco = preco;
    this.alturaCacamba = alturaCacamba;
    this.atluraVeiculo = alturaVeiculo;
    this.alturaSolo = alturaSolo;
    this.capacidadeCarga = capacidadeCarga;
    this.motor = motor;
    this.potencia = potencia;
    this.volumeCacamba = volumeCacamba;
    this.roda = roda;
    this.image = image;
    /*************** END OF ADDED CODE 1 ***************/
  }
}

// search on array if exist carClass returning 1 if not return -1
function GetCarArrPosition(arr, carClass) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].nome === carClass.nome) return i;
  }
  return -1;
}

function SetCarToCompare(el, carClass) {
  /****************** ADDED CODE 2 ******************/
  /* Reorganized logic to use less if-else statements */
  if (!(carClass instanceof Car)) throw "You need set a Car Class";

  /* Adds or removes a car in the array */
  const carArrPosition = GetCarArrPosition(carArr, carClass);
  if (el.checked) carArr.push(carClass);
  else if (carArrPosition > -1) carArr.splice(carArrPosition, 1);

  /* Adds logic to disable third checkbox when the other two are selected */
  const carOptions = document.querySelectorAll(".checkbox");
  carOptions.forEach((carOption) => {
    carOption.disabled = false; // default is enabled
    if (!carOption.checked && carArr.length >= 2) carOption.disabled = true; // disables the unchecked when two are already checked
  });
  /*************** END OF ADDED CODE 2 ***************/
}

function ShowCompare() {
  if (carArr.length < 2) {
    alert("Precisa marcar 2 carros para apresentar a comparação");
    return;
  }

  UpdateCompareTable();
  document.getElementById("compare").style.display = "block";
}

function HideCompare() {
  document.getElementById("compare").style.display = "none";
}

function UpdateCompareTable() {}
