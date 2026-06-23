// =============================
// Gráfico financiero con Chart.js
// =============================
const ctx = document.getElementById('finanzasChart');
if (ctx) {
  const finanzasChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Año 1', 'Año 3', 'Año 5', 'Año 8'],
      datasets: [{
        label: 'Ingresos estimados (S/)',
        data: [72000, 240000, 480000, 1000000],
        borderColor: '#FFD700',
        backgroundColor: 'rgba(255,215,0,0.3)',
        fill: true,
        tension: 0.3
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          labels: { color: '#FFD700' }
        }
      },
      scales: {
        x: { ticks: { color: '#FFD700' } },
        y: { ticks: { color: '#FFD700' } }
      }
    }
  });
}

// =============================
// Cronograma Gantt interactivo
// =============================
const fases = document.querySelectorAll('.fase');
fases.forEach(fase => {
  fase.addEventListener('mouseenter', () => {
    const detalle = document.createElement('div');
    detalle.classList.add('detalle-fase');
    detalle.innerText = obtenerDetalleFase(fase.innerText);
    fase.appendChild(detalle);
  });
  fase.addEventListener('mouseleave', () => {
    const detalle = fase.querySelector('.detalle-fase');
    if (detalle) detalle.remove();
  });
});

function obtenerDetalleFase(nombre) {
  switch (nombre) {
    case 'Creación de la SAC':
      return 'Formalización legal, servicios básicos de diagnóstico y mantenimiento inicial.';
    case 'Taller propio':
      return 'Alquiler de local, incorporación de soldadura, hidráulica y reparación de motores.';
    case 'Expansión de servicios':
      return 'Instalación de sensores IoT en maquinaria pesada para monitoreo remoto.';
    case 'Plataforma propia':
      return 'Desarrollo de software de IA predictiva con modelo de suscripción mensual.';
    default:
      return 'Detalle no disponible.';
  }
}

// =============================
// Formulario con EmailJS
// =============================
const form = document.getElementById("contactForm");
if (form) {
  form.addEventListener("submit", function(event) {
    event.preventDefault();
    emailjs.sendForm("TU_SERVICE_ID", "TU_TEMPLATE_ID", this)
      .then(() => {
        alert("Mensaje enviado correctamente ✅");
        form.reset();
      }, (err) => {
        alert("Error al enviar ❌: " + JSON.stringify(err));
      });
  });
}