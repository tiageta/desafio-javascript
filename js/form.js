//class contato

class contato {
  /****************** ADDED CODE 1 ******************/
  constructor(nome, sobrenome, email, cpf, telefone, contato) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.email = email;
    this.cpf = cpf;
    this.telefone = telefone;
    this.contato = contato;
  }
  /*************** END OF ADDED CODE 1 ***************/
}

function Post(form) {
  let data = new contato(
    form.elements.namedItem("nome")?.value,
    form.elements.namedItem("sobrenome")?.value,
    form.elements.namedItem("email")?.value,
    form.elements.namedItem("cpf")?.value,
    form.elements.namedItem("telefone")?.value,
    form.elements.namedItem("contato")?.value
  );

  /****************** ADDED CODE 2 ******************/
  /* Converts stored date object into JSON, used in Post requests */
  const dataToSend = JSON.stringify(data);
  /* Prints JSON in console, simulating a Post request */
  console.log(dataToSend);

  /* Adds neccessary id used in Enviar() */
  form.elements.namedItem("nome")?.setAttribute("id", "nomeid");
  /* Calls function to alert user that their data was successfully sent */
  Enviar();
  /****************** ADDED CODE 2 ******************/
}

function Enviar() {
  var nome = document.getElementById("nomeid");

  if (nome?.value != "") {
    alert(
      "Obrigado sr(a) " +
        nome?.value +
        " os seus dados foram encaminhados com sucesso"
    );
  }
}
