let nombres = [];

function agregarAmigo() {
  // 1. Capturar el valor del input
  let nombre = document.getElementById("amigo").value.trim();

  // 2. Validar que no esté vacío
  if (nombre === "") {
    alert("Debes ingresar un nombre");
    return;
  }

  // 3. Agregar al array
  nombres.push(nombre);

  // 4. Actualizar la lista visual
  actualizarLista();

  // 5. Limpiar el campo de entrada
  document.getElementById("amigo").value = "";
}

function actualizarLista() {
  // Obtener la <ul>
  let lista = document.getElementById("listaAmigos");

  // Limpiar la lista antes de agregar nuevos <li>
  lista.innerHTML = "";

  // Recorrer el array y agregar cada amigo
  for (let i = 0; i < nombres.length; i++) {
    let li = document.createElement("li");
    li.textContent = nombres[i];
    lista.appendChild(li);
  }
}

function sortearAmigo() {
  // 1. Validar que haya amigos en el array
  if (nombres.length === 0) {
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "<li>No hay amigos para sortear.</li>";
    return;
  }

  // 2. Generar un índice aleatorio
  let indiceAleatorio = Math.floor(Math.random() * nombres.length);

  // 3. Obtener el nombre sorteado
  let amigoSorteado = nombres[indiceAleatorio];

  // 4. Mostrar el resultado
  let resultado = document.getElementById("resultado");
  resultado.innerHTML = ""; // limpiar lista anterior
  let li = document.createElement("li");
  li.textContent = `🎉❤️ Amigo sorteado: ${amigoSorteado}`;
  resultado.appendChild(li);
}

function animarBoton(id) {
  let boton = document.getElementById(id);
  boton.classList.add("clickeado");
  setTimeout(() => boton.classList.remove("clickeado"), 300);
}
