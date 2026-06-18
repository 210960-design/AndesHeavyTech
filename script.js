const maquinas = [
  { nombre: "CAT 320D", temp: 86, estado: "🟢 OK" },
  { nombre: "Komatsu WA380", temp: 101, estado: "🟡 Warning" },
  { nombre: "Volvo EC210", temp: 114, estado: "🔴 Alert" }
];

function actualizarTabla() {
  const tabla = document.getElementById("tablaMaquinas");
  tabla.innerHTML = "<tr><th>Máquina</th><th>Temperatura</th><th>Estado</th></tr>";
  maquinas.forEach(m => {
    tabla.innerHTML += `<tr><td>${m.nombre}</td><td>${m.temp}°C</td><td>${m.estado}</td></tr>`;
  });
}

setInterval(actualizarTabla, 2000);
actualizarTabla();
