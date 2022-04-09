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
    this.preco = preco.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
    this.alturaCacamba = alturaCacamba;
    this.alturaVeiculo = alturaVeiculo;
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

function UpdateCompareTable() {
  /****************** ADDED CODE 3 ******************/
  /* Order in which info is shown in table */
  const tableOrder = [
    "image",
    "nome",
    "alturaCacamba",
    "alturaVeiculo",
    "alturaSolo",
    "capacidadeCarga",
    "motor",
    "potencia",
    "volumeCacamba",
    "roda",
    "preco",
  ];

  /* Starts logic for adding object info in corresponding table row/cell */
  const rows = document.querySelector("table").rows;

  /* Fills first row with car images */
  carArr.forEach((car, carIndex) => {
    /* Stores image cell of first row (rows[0]) */
    const imgCell = rows[0].cells[carIndex + 1]; // +1 to skip empty cell[0]
    /* Creates img element */
    const img = document.createElement("img");
    img.src = car.image;
    img.style = "width: 100%"; // fits image in table cell
    /* Replace previous image, if there's any */
    imgCell.replaceChildren(img);
  });

  /* Fills table content after image (i = 1) */
  for (let i = 1; i < rows.length; i++) {
    /* Middle column [1] receives first car info [0] */
    rows[i].cells[1].textContent = carArr[0][tableOrder[i]];
    /* Last column [2] receives second car info [1] */
    rows[i].cells[2].textContent = carArr[1][tableOrder[i]];
  }
  /*************** END OF ADDED CODE 3 ***************/
}
