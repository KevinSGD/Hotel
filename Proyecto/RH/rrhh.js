// ==========================
// MÓDULO RECURSOS HUMANOS JS
// ==========================

let empleados = []
let asistencias = []

// ===== NAVEGACIÓN ENTRE SECCIONES =====
document.querySelectorAll(".nav-item").forEach(item => {
  item.addEventListener("click", () => {
    document.querySelectorAll(".nav-item").forEach(i => i.classList.remove("active"))
    item.classList.add("active")
    const section = item.dataset.section
    document.querySelectorAll(".content-section").forEach(sec => {
      sec.classList.remove("active")
      if (sec.id === section) sec.classList.add("active")
    })
  })
})

// ===== MODALES Y TABS =====
function cerrarModal(id) {
  document.getElementById(id).style.display = "none"
}

function abrirModalNuevoEmpleado() {
  document.getElementById("form-empleado").reset()
  document.getElementById("empleado-id").value = ""
  document.getElementById("modal-empleado").style.display = "block"
}

document.querySelectorAll(".tab-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"))
    document.querySelectorAll(".tab-content").forEach(c => c.classList.remove("active"))
    btn.classList.add("active")
    document.getElementById(btn.dataset.tab).classList.add("active")
  })
})

// ===== EMPLEADOS =====
function guardarEmpleado() {
  const id = document.getElementById("empleado-id").value || Date.now().toString()
  const empleado = {
    id,
    nombre: document.getElementById("empleado-nombre").value,
    apellidos: document.getElementById("empleado-apellidos").value,
    departamento: document.getElementById("empleado-departamento").value,
    puesto: document.getElementById("empleado-puesto").value,
    fechaIngreso: document.getElementById("empleado-fecha-ingreso").value,
    sueldo: parseFloat(document.getElementById("empleado-sueldo").value || 0),
    estado: document.getElementById("empleado-estado").value
  }
  const index = empleados.findIndex(e => e.id === id)
  index >= 0 ? empleados[index] = empleado : empleados.push(empleado)
  cerrarModal("modal-empleado")
  renderizarEmpleados()
  actualizarDashboard()
}

function editarEmpleado(id) {
  const e = empleados.find(emp => emp.id === id)
  if (!e) return
  document.getElementById("empleado-id").value = e.id
  document.getElementById("empleado-nombre").value = e.nombre
  document.getElementById("empleado-apellidos").value = e.apellidos
  document.getElementById("empleado-departamento").value = e.departamento
  document.getElementById("empleado-puesto").value = e.puesto
  document.getElementById("empleado-fecha-ingreso").value = e.fechaIngreso
  document.getElementById("empleado-sueldo").value = e.sueldo
  document.getElementById("empleado-estado").value = e.estado
  document.getElementById("modal-empleado").style.display = "block"
}

function eliminarEmpleado(id) {
  if (confirm("¿Estás seguro de eliminar este empleado?")) {
    empleados = empleados.filter(e => e.id !== id)
    renderizarEmpleados()
    actualizarDashboard()
  }
}

function renderizarEmpleados() {
  const tbody = document.querySelector("#tabla-empleados tbody")
  tbody.innerHTML = ""
  empleados.forEach(e => {
    const row = document.createElement("tr")
    row.innerHTML = `
      <td>${e.id}</td>
      <td>${e.nombre} ${e.apellidos}</td>
      <td>${e.departamento}</td>
      <td>${e.puesto}</td>
      <td>-</td>
      <td>${e.fechaIngreso}</td>
      <td>$${e.sueldo.toFixed(2)}</td>
      <td><span class="status-badge ${e.estado}">${e.estado}</span></td>
      <td>
        <button onclick="abrirModalAsistencia('${e.id}')">🕒</button>
        <button onclick="editarEmpleado('${e.id}')">✏️</button>
        <button onclick="eliminarEmpleado('${e.id}')">🗑️</button>
      </td>
    `
    tbody.appendChild(row)
  })
}

function verHistorialEmpleado(id) {
  const empleado = empleados.find(e => e.id === id)
  const registros = asistencias.filter(a => a.id === id)
  let historialHTML = `<h3>Historial de ${empleado.nombre} ${empleado.apellidos}</h3>`
  historialHTML += `<ul>`
  registros.forEach(r => {
    historialHTML += `<li>${r.fecha} - Estado: ${r.estado}, Entrada: ${r.entrada || '-'}, Salida: ${r.salida || '-'}${r.observaciones ? ', Obs: ' + r.observaciones : ''}</li>`
  })
  historialHTML += `</ul>`
  document.getElementById("modal-historial-body").innerHTML = historialHTML
  document.getElementById("modal-historial").style.display = "block"
}

// ===== DASHBOARD =====
function actualizarDashboard() {
  const hoy = new Date().toISOString().split("T")[0]
  const presentes = asistencias.filter(a => a.fecha === hoy && a.estado === "presente").length
  const porcentaje = empleados.length > 0 ? (presentes / empleados.length) * 100 : 0
  document.getElementById("total-empleados").textContent = empleados.length
  document.getElementById("asistencia-hoy").textContent = porcentaje.toFixed(0) + "%"
  document.getElementById("nomina-mensual").textContent = "$" + calcularNominaMensual().toFixed(2)
  document.getElementById("total-ausencias").textContent = contarAusenciasDelMes()
}

// ===== ASISTENCIA =====
function abrirModalAsistencia(id) {
  const empleado = empleados.find(e => e.id === id)
  if (!empleado) return
  document.getElementById("asistencia-empleado-id").value = empleado.id
  document.getElementById("asistencia-empleado-nombre").value = `${empleado.nombre} ${empleado.apellidos}`
  document.getElementById("asistencia-fecha").value = new Date().toISOString().split("T")[0]
  document.getElementById("asistencia-entrada").value = ""
  document.getElementById("asistencia-salida").value = ""
  document.getElementById("asistencia-observaciones").value = ""
  document.getElementById("modal-asistencia").style.display = "block"
}

function guardarAsistencia() {
  const asistencia = {
    id: document.getElementById("asistencia-empleado-id").value,
    fecha: document.getElementById("asistencia-fecha").value,
    entrada: document.getElementById("asistencia-entrada").value,
    salida: document.getElementById("asistencia-salida").value,
    estado: document.getElementById("asistencia-estado").value,
    observaciones: document.getElementById("asistencia-observaciones").value
  }
  asistencias.push(asistencia)
  cerrarModal("modal-asistencia")
  cargarAsistenciasPorFecha()
  actualizarDashboard()
}

function cargarAsistenciasPorFecha() {
  const fecha = document.getElementById("fecha-asistencia").value || new Date().toISOString().split("T")[0]
  const tbody = document.querySelector("#tabla-registro-asistencia tbody")
  tbody.innerHTML = ""
  asistencias.filter(a => a.fecha === fecha).forEach(a => {
    const emp = empleados.find(e => e.id === a.id) || {}
    const row = document.createElement("tr")
    row.innerHTML = `
      <td>${a.id}</td>
      <td>${emp.nombre || ""} ${emp.apellidos || ""}</td>
      <td>${emp.departamento || ""}</td>
      <td>${a.entrada}</td>
      <td>${a.salida}</td>
      <td><span class="status-badge ${a.estado}">${a.estado}</span></td>
      <td>${a.observaciones}</td>
      <td>-</td>
    `
    tbody.appendChild(row)
  })
}

// ===== NÓMINA =====
function calcularNomina() {
  const tbody = document.querySelector("#tabla-nomina tbody")
  tbody.innerHTML = ""
  let totalSueldos = 0

  empleados.forEach(e => {
    const asistenciasEmpleado = asistencias.filter(a => a.id === e.id)
    const diasPresente = asistenciasEmpleado.filter(a => a.estado === "presente").length
    const diasFaltas = asistenciasEmpleado.filter(a => a.estado === "ausente").length
    const bono = diasPresente >= 20 ? 200 : 0
    const descuento = diasFaltas * 10
    const total = e.sueldo + bono - descuento
    totalSueldos += total

    const row = document.createElement("tr")
    row.innerHTML = `
      <td>${e.id}</td>
      <td>${e.nombre} ${e.apellidos}</td>
      <td>${e.departamento}</td>
      <td>$${e.sueldo.toFixed(2)}</td>
      <td>${diasPresente}</td>
      <td>$${bono.toFixed(2)}</td>
      <td>$${descuento.toFixed(2)}</td>
      <td>$${total.toFixed(2)}</td>
      <td><button onclick="verHistorialEmpleado('${e.id}')">📄</button></td>
    `
    tbody.appendChild(row)
  })

  document.getElementById("total-sueldos").textContent = "$" + totalSueldos.toFixed(2)
  document.getElementById("total-nomina").textContent = "$" + totalSueldos.toFixed(2)
  document.getElementById("resultado-nomina").classList.remove("hidden")
}

function calcularNominaMensual() {
  return empleados.reduce((acc, e) => acc + e.sueldo, 0)
}

function contarAusenciasDelMes() {
  const mes = new Date().getMonth() + 1
  return asistencias.filter(a => a.estado === "ausente" && new Date(a.fecha).getMonth() + 1 === mes).length
}

// ===== UTILIDADES =====
function cerrarSesion() {
  alert("Sesión cerrada.")
}

actualizarDashboard()
document.getElementById("fecha-asistencia").value = new Date().toISOString().split("T")[0]
cargarAsistenciasPorFecha()
