import { Chart } from "@/components/ui/chart"
// Datos de ejemplo para empleados
const empleados = [
  {
    id: 1,
    nombre: "Juan Pérez",
    identificacion: "12345678",
    nacimiento: "1985-05-15",
    direccion: "Calle Principal 123",
    telefono: "555-1234",
    email: "juan.perez@ejemplo.com",
    departamento: "recepcion",
    puesto: "Recepcionista",
    ingreso: "2020-03-10",
    estado: "activo",
    salario: 12000,
    jornada: "completa",
    observaciones: "Empleado del mes en Junio 2023",
  },
  {
    id: 2,
    nombre: "María López",
    identificacion: "87654321",
    nacimiento: "1990-08-22",
    direccion: "Avenida Central 456",
    telefono: "555-5678",
    email: "maria.lopez@ejemplo.com",
    departamento: "housekeeping",
    puesto: "Supervisora de Limpieza",
    ingreso: "2019-11-15",
    estado: "activo",
    salario: 15000,
    jornada: "completa",
    observaciones: "",
  },
  {
    id: 3,
    nombre: "Carlos Rodríguez",
    identificacion: "23456789",
    nacimiento: "1988-12-03",
    direccion: "Calle Secundaria 789",
    telefono: "555-9012",
    email: "carlos.rodriguez@ejemplo.com",
    departamento: "restaurante",
    puesto: "Chef",
    ingreso: "2021-01-20",
    estado: "activo",
    salario: 18000,
    jornada: "completa",
    observaciones: "Especialista en cocina internacional",
  },
  {
    id: 4,
    nombre: "Ana Martínez",
    identificacion: "34567890",
    nacimiento: "1992-04-18",
    direccion: "Avenida Norte 321",
    telefono: "555-3456",
    email: "ana.martinez@ejemplo.com",
    departamento: "administracion",
    puesto: "Contadora",
    ingreso: "2022-02-05",
    estado: "activo",
    salario: 20000,
    jornada: "completa",
    observaciones: "",
  },
  {
    id: 5,
    nombre: "Roberto Gómez",
    identificacion: "45678901",
    nacimiento: "1987-09-30",
    direccion: "Calle Este 654",
    telefono: "555-7890",
    email: "roberto.gomez@ejemplo.com",
    departamento: "mantenimiento",
    puesto: "Técnico de Mantenimiento",
    ingreso: "2020-07-12",
    estado: "vacaciones",
    salario: 14000,
    jornada: "completa",
    observaciones: "Vacaciones del 15 al 30 de noviembre 2023",
  },
]

// Datos de ejemplo para asistencias
const asistencias = [
  {
    id: 1,
    fecha: "2023-11-01",
    empleadoId: 1,
    tipo: "asistencia",
    horaEntrada: "08:00",
    horaSalida: "17:00",
    observaciones: "",
  },
  {
    id: 2,
    fecha: "2023-11-01",
    empleadoId: 2,
    tipo: "asistencia",
    horaEntrada: "08:05",
    horaSalida: "17:00",
    observaciones: "",
  },
  {
    id: 3,
    fecha: "2023-11-01",
    empleadoId: 3,
    tipo: "asistencia",
    horaEntrada: "07:55",
    horaSalida: "17:00",
    observaciones: "",
  },
  {
    id: 4,
    fecha: "2023-11-01",
    empleadoId: 4,
    tipo: "asistencia",
    horaEntrada: "08:00",
    horaSalida: "17:00",
    observaciones: "",
  },
  {
    id: 5,
    fecha: "2023-11-01",
    empleadoId: 5,
    tipo: "falta",
    horaEntrada: "",
    horaSalida: "",
    observaciones: "Permiso por enfermedad",
  },
  {
    id: 6,
    fecha: "2023-11-02",
    empleadoId: 1,
    tipo: "asistencia",
    horaEntrada: "08:00",
    horaSalida: "17:00",
    observaciones: "",
  },
  {
    id: 7,
    fecha: "2023-11-02",
    empleadoId: 2,
    tipo: "asistencia",
    horaEntrada: "08:00",
    horaSalida: "17:00",
    observaciones: "",
  },
  {
    id: 8,
    fecha: "2023-11-02",
    empleadoId: 3,
    tipo: "retardo",
    horaEntrada: "08:30",
    horaSalida: "17:00",
    observaciones: "Tráfico intenso",
  },
  {
    id: 9,
    fecha: "2023-11-02",
    empleadoId: 4,
    tipo: "asistencia",
    horaEntrada: "08:00",
    horaSalida: "17:00",
    observaciones: "",
  },
  {
    id: 10,
    fecha: "2023-11-02",
    empleadoId: 5,
    tipo: "falta",
    horaEntrada: "",
    horaSalida: "",
    observaciones: "Permiso por enfermedad",
  },
]

// Datos de ejemplo para nómina
const nominas = [
  {
    id: 1,
    fecha: "2023-10-30",
    empleadoId: 1,
    periodo: "Octubre 2023",
    percepciones: 12000,
    deducciones: 500,
    pagoNeto: 11500,
    estado: "completado",
    observaciones: "",
  },
  {
    id: 2,
    fecha: "2023-10-30",
    empleadoId: 2,
    periodo: "Octubre 2023",
    percepciones: 15000,
    deducciones: 0,
    pagoNeto: 15000,
    estado: "completado",
    observaciones: "",
  },
  {
    id: 3,
    fecha: "2023-10-30",
    empleadoId: 3,
    periodo: "Octubre 2023",
    percepciones: 18000,
    deducciones: 1000,
    pagoNeto: 17000,
    estado: "completado",
    observaciones: "Descuento por 2 retardos",
  },
  {
    id: 4,
    fecha: "2023-10-30",
    empleadoId: 4,
    periodo: "Octubre 2023",
    percepciones: 20000,
    deducciones: 0,
    pagoNeto: 20000,
    estado: "completado",
    observaciones: "",
  },
  {
    id: 5,
    fecha: "2023-10-30",
    empleadoId: 5,
    periodo: "Octubre 2023",
    percepciones: 14000,
    deducciones: 700,
    pagoNeto: 13300,
    estado: "completado",
    observaciones: "Descuento por 1 falta",
  },
]

// Inicialización
document.addEventListener("DOMContentLoaded", () => {
  // Mostrar fecha actual
  const fechaActual = new Date()
  document.getElementById("current-date").textContent = fechaActual.toLocaleDateString()

  // Establecer fecha actual en los campos de fecha
  const hoy = fechaActual.toISOString().split("T")[0]
  document.getElementById("asistencia-fecha").value = hoy

  // Establecer mes y año actual en los filtros
  const mesActual = fechaActual.getMonth() + 1
  const anioActual = fechaActual.getFullYear()

  if (document.getElementById("filtro-mes-resumen")) {
    document.getElementById("filtro-mes-resumen").value = mesActual
  }

  if (document.getElementById("filtro-anio-resumen")) {
    document.getElementById("filtro-anio-resumen").value = anioActual
  }

  if (document.getElementById("nomina-mes")) {
    document.getElementById("nomina-mes").value = mesActual
  }

  if (document.getElementById("nomina-anio")) {
    document.getElementById("nomina-anio").value = anioActual
  }

  // Inicializar navegación
  initNavigation()

  // Cargar datos iniciales
  cargarDashboard()
  cargarTablaEmpleados()
  cargarTablaAsistencias()
  cargarHistorialNomina()

  // Llenar selectores de empleados
  llenarSelectoresEmpleados()

  // Inicializar gráficos
  inicializarGraficos()

  // Configurar evento para mostrar/ocultar campos de fecha personalizada
  if (document.getElementById("reporte-periodo")) {
    document.getElementById("reporte-periodo").addEventListener("change", function () {
      if (this.value === "personalizado") {
        document.getElementById("periodo-personalizado").classList.remove("hidden")
      } else {
        document.getElementById("periodo-personalizado").classList.add("hidden")
      }
    })
  }
})

// Navegación
function initNavigation() {
  const navItems = document.querySelectorAll(".nav-item")

  navItems.forEach((item) => {
    item.addEventListener("click", function () {
      // Remover clase active de todos los items
      navItems.forEach((i) => i.classList.remove("active"))

      // Agregar clase active al item seleccionado
      this.classList.add("active")

      // Obtener sección a mostrar
      const sectionId = this.getAttribute("data-section")

      // Ocultar todas las secciones
      document.querySelectorAll(".content-section").forEach((section) => {
        section.classList.remove("active")
      })

      // Mostrar sección seleccionada
      document.getElementById(sectionId).classList.add("active")
    })
  })
}

// Dashboard
function cargarDashboard() {
  // Calcular estadísticas
  const totalEmpleados = empleados.filter((e) => e.estado === "activo").length

  // Calcular ausencias del mes actual
  const fechaActual = new Date()
  const primerDiaMes = new Date(fechaActual.getFullYear(), fechaActual.getMonth(), 1)

  const ausenciasMes = asistencias.filter((a) => {
    const fechaAsistencia = new Date(a.fecha)
    return (
      fechaAsistencia >= primerDiaMes && fechaAsistencia <= fechaActual && (a.tipo === "falta" || a.tipo === "permiso")
    )
  }).length

  // Calcular nómina mensual estimada
  const nominaMensual = empleados.reduce((total, empleado) => {
    if (empleado.estado === "activo") {
      return total + empleado.salario
    }
    return total
  }, 0)

  // Calcular porcentaje de asistencia
  const totalRegistros = asistencias.filter((a) => {
    const fechaAsistencia = new Date(a.fecha)
    return fechaAsistencia >= primerDiaMes && fechaAsistencia <= fechaActual
  }).length

  const asistenciasCorrectas = asistencias.filter((a) => {
    const fechaAsistencia = new Date(a.fecha)
    return fechaAsistencia >= primerDiaMes && fechaAsistencia <= fechaActual && a.tipo === "asistencia"
  }).length

  const porcentajeAsistencia = totalRegistros > 0 ? Math.round((asistenciasCorrectas / totalRegistros) * 100) : 0

  // Actualizar estadísticas en el dashboard
  document.getElementById("total-empleados").textContent = totalEmpleados
  document.getElementById("total-ausencias").textContent = ausenciasMes
  document.getElementById("total-nomina").textContent = formatCurrency(nominaMensual)
  document.getElementById("porcentaje-asistencia").textContent = `${porcentajeAsistencia}%`

  // Cargar empleados recientes
  cargarEmpleadosRecientes()

  // Cargar próximos pagos
  cargarProximosPagos()

  // Actualizar gráficos
  actualizarGraficos()
}

function cargarEmpleadosRecientes() {
  const tablaBody = document.getElementById("recent-employees-table")
  tablaBody.innerHTML = ""

  // Ordenar empleados por fecha de ingreso (más recientes primero)
  const empleadosRecientes = [...empleados].sort((a, b) => new Date(b.ingreso) - new Date(a.ingreso)).slice(0, 5)

  empleadosRecientes.forEach((empleado) => {
    const tr = document.createElement("tr")
    tr.innerHTML = `
      <td>${empleado.nombre}</td>
      <td>${formatDepartamento(empleado.departamento)}</td>
      <td>${empleado.puesto}</td>
      <td>${formatDate(empleado.ingreso)}</td>
      <td><span class="status-badge ${empleado.estado}">${formatEstado(empleado.estado)}</span></td>
    `

    tablaBody.appendChild(tr)
  })
}

function cargarProximosPagos() {
  const tablaBody = document.getElementById("upcoming-payments-table")
  tablaBody.innerHTML = ""

  // Simular próximos pagos (fin de mes actual)
  const fechaActual = new Date()
  const ultimoDiaMes = new Date(fechaActual.getFullYear(), fechaActual.getMonth() + 1, 0)
  const proximoPago = ultimoDiaMes.toISOString().split("T")[0]

  // Mostrar solo empleados activos
  const empleadosActivos = empleados.filter((e) => e.estado === "activo").slice(0, 5)

  empleadosActivos.forEach((empleado) => {
    const tr = document.createElement("tr")
    tr.innerHTML = `
      <td>${empleado.nombre}</td>
      <td>${formatDate(proximoPago)}</td>
      <td>${formatCurrency(empleado.salario)}</td>
      <td><span class="status-badge pendiente">Pendiente</span></td>
    `

    tablaBody.appendChild(tr)
  })
}

// Gráficos
function inicializarGraficos() {
  // Crear gráficos vacíos que se actualizarán después
  const ctxDepartamentos = document.getElementById("departamentos-chart").getContext("2d")
  const ctxAsistencia = document.getElementById("asistencia-chart").getContext("2d")

  // Gráfico de distribución por departamento
  window.departamentosChart = new Chart(ctxDepartamentos, {
    type: "pie",
    data: {
      labels: [],
      datasets: [
        {
          data: [],
          backgroundColor: ["#4CAF50", "#2196F3", "#FFC107", "#9C27B0", "#FF5722", "#607D8B"],
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: "right",
        },
      },
    },
  })

  // Gráfico de asistencia mensual
  window.asistenciaChart = new Chart(ctxAsistencia, {
    type: "bar",
    data: {
      labels: [],
      datasets: [
        {
          label: "Asistencias",
          backgroundColor: "#4CAF50",
          data: [],
        },
        {
          label: "Faltas",
          backgroundColor: "#F44336",
          data: [],
        },
        {
          label: "Retardos",
          backgroundColor: "#FFC107",
          data: [],
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            precision: 0,
          },
        },
      },
    },
  })
}

function actualizarGraficos() {
  // Actualizar gráfico de distribución por departamento
  const departamentos = {}

  // Contar empleados por departamento
  empleados.forEach((empleado) => {
    if (empleado.estado === "activo") {
      if (!departamentos[empleado.departamento]) {
        departamentos[empleado.departamento] = 0
      }
      departamentos[empleado.departamento]++
    }
  })

  // Preparar datos para el gráfico
  const departamentosLabels = Object.keys(departamentos).map((dep) => formatDepartamento(dep))
  const departamentosData = Object.values(departamentos)

  // Actualizar gráfico de departamentos
  window.departamentosChart.data.labels = departamentosLabels
  window.departamentosChart.data.datasets[0].data = departamentosData
  window.departamentosChart.update()

  // Actualizar gráfico de asistencia mensual
  // Obtener los últimos 7 días
  const fechas = []
  const asistenciasData = []
  const faltasData = []
  const retardosData = []

  for (let i = 6; i >= 0; i--) {
    const fecha = new Date()
    fecha.setDate(fecha.getDate() - i)
    const fechaStr = fecha.toISOString().split("T")[0]
    fechas.push(fechaStr)

    // Contar asistencias, faltas y retardos para esta fecha
    const asistenciasDia = asistencias.filter((a) => a.fecha === fechaStr && a.tipo === "asistencia").length
    const faltasDia = asistencias.filter(
      (a) => a.fecha === fechaStr && (a.tipo === "falta" || a.tipo === "permiso"),
    ).length
    const retardosDia = asistencias.filter((a) => a.fecha === fechaStr && a.tipo === "retardo").length

    asistenciasData.push(asistenciasDia)
    faltasData.push(faltasDia)
    retardosData.push(retardosDia)
  }

  // Formatear fechas para mostrar solo día y mes
  const fechasFormateadas = fechas.map((f) => {
    const fecha = new Date(f)
    return `${fecha.getDate()}/${fecha.getMonth() + 1}`
  })

  // Actualizar gráfico de asistencia
  window.asistenciaChart.data.labels = fechasFormateadas
  window.asistenciaChart.data.datasets[0].data = asistenciasData
  window.asistenciaChart.data.datasets[1].data = faltasData
  window.asistenciaChart.data.datasets[2].data = retardosData
  window.asistenciaChart.update()
}

// Funciones para Empleados
function cargarTablaEmpleados() {
  const tablaBody = document.querySelector("#tabla-empleados tbody")
  tablaBody.innerHTML = ""

  // Ordenar empleados por departamento y nombre
  const empleadosOrdenados = [...empleados].sort((a, b) => {
    if (a.departamento !== b.departamento) {
      return a.departamento.localeCompare(b.departamento)
    }
    return a.nombre.localeCompare(b.nombre)
  })

  empleadosOrdenados.forEach((empleado) => {
    const tr = document.createElement("tr")
    tr.innerHTML = `
      <td>${empleado.id}</td>
      <td>${empleado.nombre}</td>
      <td>${formatDepartamento(empleado.departamento)}</td>
      <td>${empleado.puesto}</td>
      <td>${formatDate(empleado.ingreso)}</td>
      <td>${formatCurrency(empleado.salario)}</td>
      <td><span class="status-badge ${empleado.estado}">${formatEstado(empleado.estado)}</span></td>
      <td>
        <button type="button" class="btn-secondary" onclick="verEmpleado(${empleado.id})">
          <span class="material-symbols-outlined">visibility</span>
        </button>
        <button type="button" class="btn-secondary" onclick="editarEmpleado(${empleado.id})">
          <span class="material-symbols-outlined">edit</span>
        </button>
      </td>
    `

    tablaBody.appendChild(tr)
  })
}

function filtrarEmpleados() {
  const departamento = document.getElementById("filtro-departamento").value
  const estado = document.getElementById("filtro-estado").value
  const busqueda = document.getElementById("buscar-empleado").value.toLowerCase()

  const tablaBody = document.querySelector("#tabla-empleados tbody")
  tablaBody.innerHTML = ""

  // Filtrar empleados
  let empleadosFiltrados = [...empleados]

  if (departamento !== "todos") {
    empleadosFiltrados = empleadosFiltrados.filter((e) => e.departamento === departamento)
  }

  if (estado !== "todos") {
    empleadosFiltrados = empleadosFiltrados.filter((e) => e.estado === estado)
  }

  if (busqueda) {
    empleadosFiltrados = empleadosFiltrados.filter(
      (e) => e.nombre.toLowerCase().includes(busqueda) || e.id.toString().includes(busqueda),
    )
  }

  // Ordenar empleados por departamento y nombre
  empleadosFiltrados.sort((a, b) => {
    if (a.departamento !== b.departamento) {
      return a.departamento.localeCompare(b.departamento)
    }
    return a.nombre.localeCompare(b.nombre)
  })

  empleadosFiltrados.forEach((empleado) => {
    const tr = document.createElement("tr")
    tr.innerHTML = `
      <td>${empleado.id}</td>
      <td>${empleado.nombre}</td>
      <td>${formatDepartamento(empleado.departamento)}</td>
      <td>${empleado.puesto}</td>
      <td>${formatDate(empleado.ingreso)}</td>
      <td>${formatCurrency(empleado.salario)}</td>
      <td><span class="status-badge ${empleado.estado}">${formatEstado(empleado.estado)}</span></td>
      <td>
        <button type="button" class="btn-secondary" onclick="verEmpleado(${empleado.id})">
          <span class="material-symbols-outlined">visibility</span>
        </button>
        <button type="button" class="btn-secondary" onclick="editarEmpleado(${empleado.id})">
          <span class="material-symbols-outlined">edit</span>
        </button>
      </td>
    `

    tablaBody.appendChild(tr)
  })
}

function abrirModalNuevoEmpleado() {
  // Limpiar formulario
  document.getElementById("empleado-form").reset()
  document.getElementById("empleado-id").value = ""

  // Establecer fecha actual en el campo de ingreso
  document.getElementById("empleado-ingreso").value = new Date().toISOString().split("T")[0]

  // Cambiar título del modal
  document.getElementById("modal-empleado-titulo").textContent = "Nuevo Empleado"

  // Cambiar texto del botón
  document.getElementById("btn-guardar-empleado").textContent = "Guardar Empleado"

  // Abrir modal
  document.getElementById("modal-empleado").style.display = "block"
}

function editarEmpleado(id) {
  // Buscar empleado por ID
  const empleado = empleados.find((e) => e.id === id)

  if (empleado) {
    // Llenar formulario con datos del empleado
    document.getElementById("empleado-id").value = empleado.id
    document.getElementById("empleado-nombre").value = empleado.nombre
    document.getElementById("empleado-identificacion").value = empleado.identificacion
    document.getElementById("empleado-nacimiento").value = empleado.nacimiento
    document.getElementById("empleado-direccion").value = empleado.direccion
    document.getElementById("empleado-telefono").value = empleado.telefono
    document.getElementById("empleado-email").value = empleado.email
    document.getElementById("empleado-departamento").value = empleado.departamento
    document.getElementById("empleado-puesto").value = empleado.puesto
    document.getElementById("empleado-ingreso").value = empleado.ingreso
    document.getElementById("empleado-estado").value = empleado.estado
    document.getElementById("empleado-salario").value = empleado.salario
    document.getElementById("empleado-jornada").value = empleado.jornada
    document.getElementById("empleado-observaciones").value = empleado.observaciones

    // Cambiar título del modal
    document.getElementById("modal-empleado-titulo").textContent = "Editar Empleado"

    // Cambiar texto del botón
    document.getElementById("btn-guardar-empleado").textContent = "Guardar Cambios"

    // Abrir modal
    document.getElementById("modal-empleado").style.display = "block"
  }
}

function verEmpleado(id) {
  // En una implementación real, aquí se mostraría un modal con los detalles del empleado
  // Para simplificar, usamos el mismo modal de edición pero deshabilitando los campos
  editarEmpleado(id)
}

function guardarEmpleado() {
  // Obtener datos del formulario
  const id = document.getElementById("empleado-id").value
  const nombre = document.getElementById("empleado-nombre").value
  const identificacion = document.getElementById("empleado-identificacion").value
  const nacimiento = document.getElementById("empleado-nacimiento").value
  const direccion = document.getElementById("empleado-direccion").value
  const telefono = document.getElementById("empleado-telefono").value
  const email = document.getElementById("empleado-email").value
  const departamento = document.getElementById("empleado-departamento").value
  const puesto = document.getElementById("empleado-puesto").value
  const ingreso = document.getElementById("empleado-ingreso").value
  const estado = document.getElementById("empleado-estado").value
  const salario = Number.parseFloat(document.getElementById("empleado-salario").value)
  const jornada = document.getElementById("empleado-jornada").value
  const observaciones = document.getElementById("empleado-observaciones").value

  // Validar datos
  if (
    !nombre ||
    !identificacion ||
    !nacimiento ||
    !direccion ||
    !telefono ||
    !email ||
    !departamento ||
    !puesto ||
    !ingreso ||
    !estado ||
    isNaN(salario) ||
    !jornada
  ) {
    alert("Por favor complete todos los campos obligatorios")
    return
  }

  if (id) {
    // Actualizar empleado existente
    const index = empleados.findIndex((e) => e.id === Number.parseInt(id))
    if (index !== -1) {
      empleados[index] = {
        id: Number.parseInt(id),
        nombre,
        identificacion,
        nacimiento,
        direccion,
        telefono,
        email,
        departamento,
        puesto,
        ingreso,
        estado,
        salario,
        jornada,
        observaciones,
      }

      alert("Empleado actualizado correctamente")
    }
  } else {
    // Crear nuevo empleado
    const nuevoId = empleados.length > 0 ? Math.max(...empleados.map((e) => e.id)) + 1 : 1

    const nuevoEmpleado = {
      id: nuevoId,
      nombre,
      identificacion,
      nacimiento,
      direccion,
      telefono,
      email,
      departamento,
      puesto,
      ingreso,
      estado,
      salario,
      jornada,
      observaciones,
    }

    empleados.push(nuevoEmpleado)
    alert("Empleado registrado correctamente")
  }

  // Cerrar modal
  cerrarModal("modal-empleado")

  // Actualizar tabla y dashboard
  cargarTablaEmpleados()
  cargarDashboard()

  // Actualizar selectores de empleados
  llenarSelectoresEmpleados()
}

// Funciones para Asistencias
function cargarTablaAsistencias() {
  const tablaBody = document.querySelector("#tabla-asistencias tbody")
  tablaBody.innerHTML = ""

  // Ordenar asistencias por fecha (más recientes primero)
  const asistenciasOrdenadas = [...asistencias].sort((a, b) => new Date(b.fecha) - new Date(a.fecha))

  asistenciasOrdenadas.forEach((asistencia) => {
    const empleado = empleados.find((e) => e.id === asistencia.empleadoId)
    if (!empleado) return

    const tr = document.createElement("tr")
    tr.innerHTML = `
      <td>${formatDate(asistencia.fecha)}</td>
      <td>${empleado.nombre}</td>
      <td>${formatDepartamento(empleado.departamento)}</td>
      <td><span class="status-badge ${asistencia.tipo}">${formatTipoAsistencia(asistencia.tipo)}</span></td>
      <td>${asistencia.horaEntrada || "-"}</td>
      <td>${asistencia.horaSalida || "-"}</td>
      <td>${asistencia.observaciones || "-"}</td>
      <td>
        <button type="button" class="btn-secondary" onclick="editarAsistencia(${asistencia.id})">
          <span class="material-symbols-outlined">edit</span>
        </button>
      </td>
    `

    tablaBody.appendChild(tr)
  })

  // Actualizar resumen de asistencias
  actualizarResumenAsistencias()
}

function filtrarAsistencias() {
  const empleadoId = document.getElementById("filtro-empleado-asistencia").value
  const tipo = document.getElementById("filtro-tipo-asistencia").value
  const fechaInicio = document.getElementById("filtro-fecha-inicio-asistencia").value
  const fechaFin = document.getElementById("filtro-fecha-fin-asistencia").value

  const tablaBody = document.querySelector("#tabla-asistencias tbody")
  tablaBody.innerHTML = ""

  // Filtrar asistencias
  let asistenciasFiltradas = [...asistencias]

  if (empleadoId !== "todos") {
    asistenciasFiltradas = asistenciasFiltradas.filter((a) => a.empleadoId === Number.parseInt(empleadoId))
  }

  if (tipo !== "todos") {
    asistenciasFiltradas = asistenciasFiltradas.filter((a) => a.tipo === tipo)
  }

  if (fechaInicio) {
    asistenciasFiltradas = asistenciasFiltradas.filter((a) => a.fecha >= fechaInicio)
  }

  if (fechaFin) {
    asistenciasFiltradas = asistenciasFiltradas.filter((a) => a.fecha <= fechaFin)
  }

  // Ordenar asistencias por fecha (más recientes primero)
  asistenciasFiltradas.sort((a, b) => new Date(b.fecha) - new Date(a.fecha))

  asistenciasFiltradas.forEach((asistencia) => {
    const empleado = empleados.find((e) => e.id === asistencia.empleadoId)
    if (!empleado) return

    const tr = document.createElement("tr")
    tr.innerHTML = `
      <td>${formatDate(asistencia.fecha)}</td>
      <td>${empleado.nombre}</td>
      <td>${formatDepartamento(empleado.departamento)}</td>
      <td><span class="status-badge ${asistencia.tipo}">${formatTipoAsistencia(asistencia.tipo)}</span></td>
      <td>${asistencia.horaEntrada || "-"}</td>
      <td>${asistencia.horaSalida || "-"}</td>
      <td>${asistencia.observaciones || "-"}</td>
      <td>
        <button type="button" class="btn-secondary" onclick="editarAsistencia(${asistencia.id})">
          <span class="material-symbols-outlined">edit</span>
        </button>
      </td>
    `

    tablaBody.appendChild(tr)
  })
}

function actualizarResumenAsistencias() {
  const mes = Number.parseInt(document.getElementById("filtro-mes-resumen").value)
  const anio = Number.parseInt(document.getElementById("filtro-anio-resumen").value)

  // Filtrar asistencias del mes y año seleccionados
  const primerDiaMes = new Date(anio, mes - 1, 1)
  const ultimoDiaMes = new Date(anio, mes, 0)

  const asistenciasMes = asistencias.filter((a) => {
    const fechaAsistencia = new Date(a.fecha)
    return fechaAsistencia >= primerDiaMes && fechaAsistencia <= ultimoDiaMes
  })

  // Contar por tipo
  const totalAsistencias = asistenciasMes.filter((a) => a.tipo === "asistencia").length
  const totalFaltas = asistenciasMes.filter((a) => a.tipo === "falta").length
  const totalRetardos = asistenciasMes.filter((a) => a.tipo === "retardo").length

  // Calcular porcentaje
  const totalRegistros = asistenciasMes.length
  const porcentajeAsistencia = totalRegistros > 0 ? Math.round((totalAsistencias / totalRegistros) * 100) : 0

  // Actualizar resumen
  document.getElementById("resumen-asistencias").textContent = totalAsistencias
  document.getElementById("resumen-faltas").textContent = totalFaltas
  document.getElementById("resumen-retardos").textContent = totalRetardos
  document.getElementById("resumen-porcentaje").textContent = `${porcentajeAsistencia}%`
}

function abrirModalNuevaAsistencia() {
  // Limpiar formulario
  document.getElementById("asistencia-form").reset()

  // Establecer fecha actual
  document.getElementById("asistencia-fecha").value = new Date().toISOString().split("T")[0]

  // Abrir modal
  document.getElementById("modal-asistencia").style.display = "block"
}

function editarAsistencia(id) {
  // Buscar asistencia por ID
  const asistencia = asistencias.find((a) => a.id === id)

  if (asistencia) {
    // Llenar formulario con datos de la asistencia
    document.getElementById("asistencia-fecha").value = asistencia.fecha
    document.getElementById("asistencia-empleado").value = asistencia.empleadoId
    document.getElementById("asistencia-tipo").value = asistencia.tipo
    document.getElementById("asistencia-hora-entrada").value = asistencia.horaEntrada
    document.getElementById("asistencia-hora-salida").value = asistencia.horaSalida
    document.getElementById("asistencia-observaciones").value = asistencia.observaciones

    // Abrir modal
    document.getElementById("modal-asistencia").style.display = "block"
  }
}

function guardarAsistencia() {
  // Obtener datos del formulario
  const fecha = document.getElementById("asistencia-fecha").value
  const empleadoId = Number.parseInt(document.getElementById("asistencia-empleado").value)
  const tipo = document.getElementById("asistencia-tipo").value
  const horaEntrada = document.getElementById("asistencia-hora-entrada").value
  const horaSalida = document.getElementById("asistencia-hora-salida").value
  const observaciones = document.getElementById("asistencia-observaciones").value

  // Validar datos
  if (!fecha || !empleadoId || !tipo) {
    alert("Por favor complete todos los campos obligatorios")
    return
  }

  // Verificar si ya existe una asistencia para este empleado en esta fecha
  const asistenciaExistente = asistencias.find((a) => a.empleadoId === empleadoId && a.fecha === fecha)

  if (asistenciaExistente) {
    // Actualizar asistencia existente
    asistenciaExistente.tipo = tipo
    asistenciaExistente.horaEntrada = horaEntrada
    asistenciaExistente.horaSalida = horaSalida
    asistenciaExistente.observaciones = observaciones

    alert("Asistencia actualizada correctamente")
  } else {
    // Crear nueva asistencia
    const nuevoId = asistencias.length > 0 ? Math.max(...asistencias.map((a) => a.id)) + 1 : 1

    const nuevaAsistencia = {
      id: nuevoId,
      fecha,
      empleadoId,
      tipo,
      horaEntrada,
      horaSalida,
      observaciones,
    }

    asistencias.push(nuevaAsistencia)
    alert("Asistencia registrada correctamente")
  }

  // Cerrar modal
  cerrarModal("modal-asistencia")

  // Actualizar tabla y dashboard
  cargarTablaAsistencias()
  cargarDashboard()
}

// Funciones para Nómina
function cargarHistorialNomina() {
  const tablaBody = document.querySelector("#tabla-historial-nomina tbody")
  tablaBody.innerHTML = ""

  // Ordenar nóminas por fecha (más recientes primero)
  const nominasOrdenadas = [...nominas].sort((a, b) => new Date(b.fecha) - new Date(a.fecha))

  nominasOrdenadas.forEach((nomina) => {
    const empleado = empleados.find((e) => e.id === nomina.empleadoId)
    if (!empleado) return

    const tr = document.createElement("tr")
    tr.innerHTML = `
      <td>${formatDate(nomina.fecha)}</td>
      <td>${empleado.nombre}</td>
      <td>${nomina.periodo}</td>
      <td>${formatCurrency(nomina.percepciones)}</td>
      <td>${formatCurrency(nomina.deducciones)}</td>
      <td>${formatCurrency(nomina.pagoNeto)}</td>
      <td><span class="status-badge ${nomina.estado}">${formatEstadoNomina(nomina.estado)}</span></td>
      <td>
        <button type="button" class="btn-secondary" onclick="verNomina(${nomina.id})">
          <span class="material-symbols-outlined">visibility</span>
        </button>
      </td>
    `

    tablaBody.appendChild(tr)
  })
}

function filtrarHistorialNomina() {
  const empleadoId = document.getElementById("filtro-empleado-nomina").value

  const tablaBody = document.querySelector("#tabla-historial-nomina tbody")
  tablaBody.innerHTML = ""

  // Filtrar nóminas
  let nominasFiltradas = [...nominas]

  if (empleadoId !== "todos") {
    nominasFiltradas = nominasFiltradas.filter((n) => n.empleadoId === Number.parseInt(empleadoId))
  }

  // Ordenar nóminas por fecha (más recientes primero)
  nominasFiltradas.sort((a, b) => new Date(b.fecha) - new Date(a.fecha))

  nominasFiltradas.forEach((nomina) => {
    const empleado = empleados.find((e) => e.id === nomina.empleadoId)
    if (!empleado) return

    const tr = document.createElement("tr")
    tr.innerHTML = `
      <td>${formatDate(nomina.fecha)}</td>
      <td>${empleado.nombre}</td>
      <td>${nomina.periodo}</td>
      <td>${formatCurrency(nomina.percepciones)}</td>
      <td>${formatCurrency(nomina.deducciones)}</td>
      <td>${formatCurrency(nomina.pagoNeto)}</td>
      <td><span class="status-badge ${nomina.estado}">${formatEstadoNomina(nomina.estado)}</span></td>
      <td>
        <button type="button" class="btn-secondary" onclick="verNomina(${nomina.id})">
          <span class="material-symbols-outlined">visibility</span>
        </button>
      </td>
    `

    tablaBody.appendChild(tr)
  })
}

function calcularNomina() {
  // Obtener datos del formulario
  const empleadoId = Number.parseInt(document.getElementById("nomina-empleado").value)
  const mes = Number.parseInt(document.getElementById("nomina-mes").value)
  const anio = Number.parseInt(document.getElementById("nomina-anio").value)
  const bonoAdicional = Number.parseFloat(document.getElementById("nomina-bono").value) || 0
  const descuentoAdicional = Number.parseFloat(document.getElementById("nomina-descuento").value) || 0
  const observaciones = document.getElementById("nomina-observaciones").value

  // Validar datos
  if (!empleadoId || isNaN(mes) || isNaN(anio)) {
    alert("Por favor seleccione un empleado y un periodo")
    return
  }

  // Buscar empleado
  const empleado = empleados.find((e) => e.id === empleadoId)
  if (!empleado) {
    alert("Empleado no encontrado")
    return
  }

  // Calcular periodo
  const nombresMeses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ]
  const periodo = `${nombresMeses[mes - 1]} ${anio}`

  // Filtrar asistencias del mes y año seleccionados
  const primerDiaMes = new Date(anio, mes - 1, 1)
  const ultimoDiaMes = new Date(anio, mes, 0)

  const asistenciasMes = asistencias.filter((a) => {
    const fechaAsistencia = new Date(a.fecha)
    return fechaAsistencia >= primerDiaMes && fechaAsistencia <= ultimoDiaMes && a.empleadoId === empleadoId
  })

  // Contar faltas y retardos
  const faltas = asistenciasMes.filter((a) => a.tipo === "falta").length
  const retardos = asistenciasMes.filter((a) => a.tipo === "retardo").length

  // Calcular descuentos
  const descuentoPorFalta = (empleado.salario / 30) * faltas // Asumiendo 30 días por mes
  const descuentoPorRetardo = (empleado.salario / 30 / 3) * retardos // Un retardo equivale a 1/3 de día

  // Calcular percepciones y deducciones
  const salarioBase = empleado.salario
  const totalPercepciones = salarioBase + bonoAdicional
  const totalDeducciones = descuentoPorFalta + descuentoPorRetardo + descuentoAdicional
  const pagoNeto = totalPercepciones - totalDeducciones

  // Mostrar resultado
  document.getElementById("nomina-nombre-empleado").textContent = empleado.nombre
  document.getElementById("nomina-puesto-empleado").textContent =
    `${empleado.puesto} - ${formatDepartamento(empleado.departamento)}`
  document.getElementById("nomina-id-empleado").textContent = `ID: ${empleado.id}`

  document.getElementById("nomina-periodo").textContent = `Periodo: ${periodo}`
  document.getElementById("nomina-fecha-calculo").textContent = `Fecha de cálculo: ${new Date().toLocaleDateString()}`

  document.getElementById("nomina-salario-base").textContent = formatCurrency(salarioBase)
  document.getElementById("nomina-bonos").textContent = formatCurrency(bonoAdicional)
  document.getElementById("nomina-total-percepciones").textContent = formatCurrency(totalPercepciones)

  document.getElementById("nomina-faltas").textContent = formatCurrency(descuentoPorFalta)
  document.getElementById("nomina-retardos").textContent = formatCurrency(descuentoPorRetardo)
  document.getElementById("nomina-descuentos").textContent = formatCurrency(descuentoAdicional)
  document.getElementById("nomina-total-deducciones").textContent = formatCurrency(totalDeducciones)

  document.getElementById("nomina-pago-neto").textContent = formatCurrency(pagoNeto)
  document.getElementById("nomina-observaciones-resultado").textContent = observaciones

  // Mostrar resultado
  document.getElementById("resultado-nomina").classList.remove("hidden")
}

function guardarNomina() {
  // Obtener datos del cálculo
  const empleadoId = Number.parseInt(document.getElementById("nomina-empleado").value)
  const mes = Number.parseInt(document.getElementById("nomina-mes").value)
  const anio = Number.parseInt(document.getElementById("nomina-anio").value)

  // Calcular periodo
  const nombresMeses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ]
  const periodo = `${nombresMeses[mes - 1]} ${anio}`

  // Obtener montos
  const percepciones = Number.parseFloat(
    document.getElementById("nomina-total-percepciones").textContent.replace("$", "").replace(",", ""),
  )
  const deducciones = Number.parseFloat(
    document.getElementById("nomina-total-deducciones").textContent.replace("$", "").replace(",", ""),
  )
  const pagoNeto = Number.parseFloat(
    document.getElementById("nomina-pago-neto").textContent.replace("$", "").replace(",", ""),
  )
  const observaciones = document.getElementById("nomina-observaciones-resultado").textContent

  // Verificar si ya existe una nómina para este empleado en este periodo
  const nominaExistente = nominas.find((n) => n.empleadoId === empleadoId && n.periodo === periodo)

  if (nominaExistente) {
    // Actualizar nómina existente
    nominaExistente.fecha = new Date().toISOString().split("T")[0]
    nominaExistente.percepciones = percepciones
    nominaExistente.deducciones = deducciones
    nominaExistente.pagoNeto = pagoNeto
    nominaExistente.observaciones = observaciones

    alert("Nómina actualizada correctamente")
  } else {
    // Crear nueva nómina
    const nuevoId = nominas.length > 0 ? Math.max(...nominas.map((n) => n.id)) + 1 : 1

    const nuevaNomina = {
      id: nuevoId,
      fecha: new Date().toISOString().split("T")[0],
      empleadoId,
      periodo,
      percepciones,
      deducciones,
      pagoNeto,
      estado: "completado",
      observaciones,
    }

    nominas.push(nuevaNomina)
    alert("Nómina guardada correctamente")
  }

  // Ocultar resultado
  document.getElementById("resultado-nomina").classList.add("hidden")

  // Limpiar formulario
  limpiarFormulario("nomina-form")

  // Actualizar historial
  cargarHistorialNomina()
}

function verNomina(id) {
  // Buscar nómina por ID
  const nomina = nominas.find((n) => n.id === id)

  if (nomina) {
    // Buscar empleado
    const empleado = empleados.find((e) => e.id === nomina.empleadoId)
    if (!empleado) return

    // Crear contenido del detalle
    const detalleNomina = document.getElementById("nomina-detalle")

    detalleNomina.innerHTML = `
      <div class="nomina-header">
        <div class="nomina-employee-info">
          <h4>${empleado.nombre}</h4>
          <p>${empleado.puesto} - ${formatDepartamento(empleado.departamento)}</p>
          <p>ID: ${empleado.id}</p>
        </div>
        <div class="nomina-period-info">
          <h4>Periodo: ${nomina.periodo}</h4>
          <p>Fecha de pago: ${formatDate(nomina.fecha)}</p>
        </div>
      </div>
      
      <div class="nomina-details">
        <div class="nomina-section">
          <h5>Percepciones</h5>
          <div class="nomina-item">
            <span class="nomina-concept">Total Percepciones:</span>
            <span class="nomina-amount">${formatCurrency(nomina.percepciones)}</span>
          </div>
        </div>
        
        <div class="nomina-section">
          <h5>Deducciones</h5>
          <div class="nomina-item">
            <span class="nomina-concept">Total Deducciones:</span>
            <span class="nomina-amount">${formatCurrency(nomina.deducciones)}</span>
          </div>
        </div>
      </div>
      
      <div class="nomina-total">
        <span class="nomina-concept">Pago Neto:</span>
        <span class="nomina-amount">${formatCurrency(nomina.pagoNeto)}</span>
      </div>
      
      <div class="nomina-observations">
        <h5>Observaciones:</h5>
        <p>${nomina.observaciones || "Sin observaciones"}</p>
      </div>
    `

    // Abrir modal
    document.getElementById("modal-ver-nomina").style.display = "block"
  }
}

// Funciones para Reportes
function generarReporte() {
  const tipoReporte = document.getElementById("reporte-tipo").value
  const periodoReporte = document.getElementById("reporte-periodo").value

  // Calcular fechas según el periodo seleccionado
  const fechaActual = new Date()
  let fechaInicio = new Date()
  let fechaFin = new Date()
  let tituloReporte = ""

  if (periodoReporte === "mensual") {
    fechaInicio = new Date(fechaActual.getFullYear(), fechaActual.getMonth(), 1)
    tituloReporte = `Reporte Mensual - ${fechaInicio.toLocaleDateString(undefined, { month: "long", year: "numeric" })}`
  } else if (periodoReporte === "trimestral") {
    const trimestre = Math.floor(fechaActual.getMonth() / 3)
    fechaInicio = new Date(fechaActual.getFullYear(), trimestre * 3, 1)
    fechaFin = new Date(fechaActual.getFullYear(), trimestre * 3 + 3, 0)
    tituloReporte = `Reporte Trimestral - ${fechaInicio.toLocaleDateString(undefined, { month: "long" })} a ${fechaFin.toLocaleDateString(undefined, { month: "long", year: "numeric" })}`
  } else if (periodoReporte === "anual") {
    fechaInicio = new Date(fechaActual.getFullYear(), 0, 1)
    tituloReporte = `Reporte Anual - ${fechaActual.getFullYear()}`
  } else if (periodoReporte === "personalizado") {
    fechaInicio = new Date(document.getElementById("reporte-fecha-inicio").value)
    fechaFin = new Date(document.getElementById("reporte-fecha-fin").value)
    tituloReporte = `Reporte Personalizado - ${formatDate(fechaInicio.toISOString().split("T")[0])} al ${formatDate(fechaFin.toISOString().split("T")[0])}`
  }

  // Mostrar sección de reporte
  document.getElementById("reporte-generado").classList.remove("hidden")

  // Generar contenido según el tipo de reporte
  if (tipoReporte === "empleados") {
    generarReporteEmpleados(tituloReporte)
  } else if (tipoReporte === "asistencias") {
    generarReporteAsistencias(fechaInicio, fechaFin, tituloReporte)
  } else if (tipoReporte === "nomina") {
    generarReporteNomina(fechaInicio, fechaFin, tituloReporte)
  } else if (tipoReporte === "rotacion") {
    generarReporteRotacion(fechaInicio, fechaFin, tituloReporte)
  }
}

function generarReporteEmpleados(titulo) {
  document.getElementById("reporte-titulo").textContent = `Listado de Empleados - ${titulo}`

  const contenidoReporte = document.getElementById("reporte-contenido")

  // Crear HTML del reporte
  let html = `
    <div class="report-header">
      <div class="report-meta">
        <p><strong>Fecha de generación:</strong> ${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}</p>
        <p><strong>Generado por:</strong> Admin</p>
      </div>
      <div class="report-summary">
        <div class="summary-stats">
          <div class="stat-item">
            <span class="stat-label">Total Empleados:</span>
            <span class="stat-value">${empleados.length}</span>
          </div>
          <div class="stat-item">
            <span class="stat-label">Empleados Activos:</span>
            <span class="stat-value">${empleados.filter((e) => e.estado === "activo").length}</span>
          </div>
        </div>
      </div>
    </div>
    
    <h4>Listado de Empleados</h4>
    <div class="table-container">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Departamento</th>
            <th>Puesto</th>
            <th>Fecha Ingreso</th>
            <th>Salario Base</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
  `

  // Ordenar empleados por departamento y nombre
  const empleadosOrdenados = [...empleados].sort((a, b) => {
    if (a.departamento !== b.departamento) {
      return a.departamento.localeCompare(b.departamento)
    }
    return a.nombre.localeCompare(b.nombre)
  })

  // Agregar filas de empleados
  empleadosOrdenados.forEach((empleado) => {
    html += `
      <tr>
        <td>${empleado.id}</td>
        <td>${empleado.nombre}</td>
        <td>${formatDepartamento(empleado.departamento)}</td>
        <td>${empleado.puesto}</td>
        <td>${formatDate(empleado.ingreso)}</td>
        <td>${formatCurrency(empleado.salario)}</td>
        <td>${formatEstado(empleado.estado)}</td>
      </tr>
    `
  })

  html += `
        </tbody>
      </table>
    </div>
  `

  contenidoReporte.innerHTML = html
}

function generarReporteAsistencias(fechaInicio, fechaFin, titulo) {
  document.getElementById("reporte-titulo").textContent = `Reporte de Asistencias - ${titulo}`

  const contenidoReporte = document.getElementById("reporte-contenido")

  // Filtrar asistencias por periodo
  const asistenciasPeriodo = asistencias.filter((a) => {
    const fechaAsistencia = new Date(a.fecha)
    return fechaAsistencia >= fechaInicio && fechaAsistencia <= fechaFin
  })

  // Contar por tipo
  const totalAsistencias = asistenciasPeriodo.filter((a) => a.tipo === "asistencia").length
  const totalFaltas = asistenciasPeriodo.filter((a) => a.tipo === "falta").length
  const totalRetardos = asistenciasPeriodo.filter((a) => a.tipo === "retardo").length
  const totalPermisos = asistenciasPeriodo.filter((a) => a.tipo === "permiso").length
  const totalVacaciones = asistenciasPeriodo.filter((a) => a.tipo === "vacaciones").length

  // Calcular porcentaje
  const totalRegistros = asistenciasPeriodo.length
  const porcentajeAsistencia = totalRegistros > 0 ? Math.round((totalAsistencias / totalRegistros) * 100) : 0

  // Crear HTML del reporte
  let html = `
    <div class="report-header">
      <div class="report-meta">
        <p><strong>Fecha de generación:</strong> ${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}</p>
        <p><strong>Generado por:</strong> Admin</p>
      </div>
      <div class="report-summary">
        <div class="summary-stats">
          <div class="stat-item">
            <span class="stat-label">Total Registros:</span>
            <span class="stat-value">${totalRegistros}</span>
          </div>
          <div class="stat-item">
            <span class="stat-label">Asistencias:</span>
            <span class="stat-value">${totalAsistencias} (${porcentajeAsistencia}%)</span>
          </div>
          <div class="stat-item">
            <span class="stat-label">Faltas:</span>
            <span class="stat-value">${totalFaltas}</span>
          </div>
          <div class="stat-item">
            <span class="stat-label">Retardos:</span>
            <span class="stat-value">${totalRetardos}</span>
          </div>
        </div>
      </div>
    </div>
    
    <h4>Detalle de Asistencias</h4>
    <div class="table-container">
      <table>
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Empleado</th>
            <th>Departamento</th>
            <th>Tipo</th>
            <th>Hora Entrada</th>
            <th>Hora Salida</th>
            <th>Observaciones</th>
          </tr>
        </thead>
        <tbody>
  `

  // Ordenar asistencias por fecha
  const asistenciasOrdenadas = [...asistenciasPeriodo].sort((a, b) => new Date(a.fecha) - new Date(b.fecha))

  // Agregar filas de asistencias
  asistenciasOrdenadas.forEach((asistencia) => {
    const empleado = empleados.find((e) => e.id === asistencia.empleadoId)
    if (!empleado) return

    html += `
      <tr>
        <td>${formatDate(asistencia.fecha)}</td>
        <td>${empleado.nombre}</td>
        <td>${formatDepartamento(empleado.departamento)}</td>
        <td>${formatTipoAsistencia(asistencia.tipo)}</td>
        <td>${asistencia.horaEntrada || "-"}</td>
        <td>${asistencia.horaSalida || "-"}</td>
        <td>${asistencia.observaciones || "-"}</td>
      </tr>
    `
  })

  html += `
        </tbody>
      </table>
    </div>
    
    <h4>Resumen por Empleado</h4>
    <div class="table-container">
      <table>
        <thead>
          <tr>
            <th>Empleado</th>
            <th>Departamento</th>
            <th>Asistencias</th>
            <th>Faltas</th>
            <th>Retardos</th>
            <th>% Asistencia</th>
          </tr>
        </thead>
        <tbody>
  `

  // Agrupar asistencias por empleado
  const asistenciasPorEmpleado = {}

  asistenciasPeriodo.forEach((asistencia) => {
    if (!asistenciasPorEmpleado[asistencia.empleadoId]) {
      asistenciasPorEmpleado[asistencia.empleadoId] = {
        asistencias: 0,
        faltas: 0,
        retardos: 0,
        total: 0,
      }
    }

    asistenciasPorEmpleado[asistencia.empleadoId].total++

    if (asistencia.tipo === "asistencia") {
      asistenciasPorEmpleado[asistencia.empleadoId].asistencias++
    } else if (asistencia.tipo === "falta" || asistencia.tipo === "permiso" || asistencia.tipo === "vacaciones") {
      asistenciasPorEmpleado[asistencia.empleadoId].faltas++
    } else if (asistencia.tipo === "retardo") {
      asistenciasPorEmpleado[asistencia.empleadoId].retardos++
    }
  })

  // Agregar filas de resumen por empleado
  Object.entries(asistenciasPorEmpleado).forEach(([empleadoId, datos]) => {
    const empleado = empleados.find((e) => e.id === Number.parseInt(empleadoId))
    if (!empleado) return

    const porcentajeAsistencia = datos.total > 0 ? Math.round((datos.asistencias / datos.total) * 100) : 0

    html += `
      <tr>
        <td>${empleado.nombre}</td>
        <td>${formatDepartamento(empleado.departamento)}</td>
        <td>${datos.asistencias}</td>
        <td>${datos.faltas}</td>
        <td>${datos.retardos}</td>
        <td>${porcentajeAsistencia}%</td>
      </tr>
    `
  })

  html += `
        </tbody>
      </table>
    </div>
  `

  contenidoReporte.innerHTML = html
}

function generarReporteNomina(fechaInicio, fechaFin, titulo) {
  document.getElementById("reporte-titulo").textContent = `Reporte de Nómina - ${titulo}`

  const contenidoReporte = document.getElementById("reporte-contenido")

  // Filtrar nóminas por periodo
  const nominasPeriodo = nominas.filter((n) => {
    const fechaNomina = new Date(n.fecha)
    return fechaNomina >= fechaInicio && fechaNomina <= fechaFin
  })

  // Calcular totales
  const totalPercepciones = nominasPeriodo.reduce((total, n) => total + n.percepciones, 0)
  const totalDeducciones = nominasPeriodo.reduce((total, n) => total + n.deducciones, 0)
  const totalPagoNeto = nominasPeriodo.reduce((total, n) => total + n.pagoNeto, 0)

  // Crear HTML del reporte
  let html = `
    <div class="report-header">
      <div class="report-meta">
        <p><strong>Fecha de generación:</strong> ${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}</p>
        <p><strong>Generado por:</strong> Admin</p>
      </div>
      <div class="report-summary">
        <div class="summary-stats">
          <div class="stat-item">
            <span class="stat-label">Total Percepciones:</span>
            <span class="stat-value">${formatCurrency(totalPercepciones)}</span>
          </div>
          <div class="stat-item">
            <span class="stat-label">Total Deducciones:</span>
            <span class="stat-value">${formatCurrency(totalDeducciones)}</span>
          </div>
          <div class="stat-item">
            <span class="stat-label">Total Pago Neto:</span>
            <span class="stat-value">${formatCurrency(totalPagoNeto)}</span>
          </div>
        </div>
      </div>
    </div>
    
    <h4>Detalle de Nómina</h4>
    <div class="table-container">
      <table>
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Empleado</th>
            <th>Departamento</th>
            <th>Periodo</th>
            <th>Percepciones</th>
            <th>Deducciones</th>
            <th>Pago Neto</th>
          </tr>
        </thead>
        <tbody>
  `

  // Ordenar nóminas por fecha
  const nominasOrdenadas = [...nominasPeriodo].sort((a, b) => new Date(a.fecha) - new Date(b.fecha))

  // Agregar filas de nóminas
  nominasOrdenadas.forEach((nomina) => {
    const empleado = empleados.find((e) => e.id === nomina.empleadoId)
    if (!empleado) return

    html += `
      <tr>
        <td>${formatDate(nomina.fecha)}</td>
        <td>${empleado.nombre}</td>
        <td>${formatDepartamento(empleado.departamento)}</td>
        <td>${nomina.periodo}</td>
        <td>${formatCurrency(nomina.percepciones)}</td>
        <td>${formatCurrency(nomina.deducciones)}</td>
        <td>${formatCurrency(nomina.pagoNeto)}</td>
      </tr>
    `
  })

  html += `
        </tbody>
      </table>
    </div>
    
    <h4>Resumen por Departamento</h4>
    <div class="table-container">
      <table>
        <thead>
          <tr>
            <th>Departamento</th>
            <th>Empleados</th>
            <th>Percepciones</th>
            <th>Deducciones</th>
            <th>Pago Neto</th>
          </tr>
        </thead>
        <tbody>
  `

  // Agrupar nóminas por departamento
  const nominasPorDepartamento = {}

  nominasPeriodo.forEach((nomina) => {
    const empleado = empleados.find((e) => e.id === nomina.empleadoId)
    if (!empleado) return

    const departamento = empleado.departamento

    if (!nominasPorDepartamento[departamento]) {
      nominasPorDepartamento[departamento] = {
        empleados: new Set(),
        percepciones: 0,
        deducciones: 0,
        pagoNeto: 0,
      }
    }

    nominasPorDepartamento[departamento].empleados.add(empleado.id)
    nominasPorDepartamento[departamento].percepciones += nomina.percepciones
    nominasPorDepartamento[departamento].deducciones += nomina.deducciones
    nominasPorDepartamento[departamento].pagoNeto += nomina.pagoNeto
  })

  // Agregar filas de resumen por departamento
  Object.entries(nominasPorDepartamento).forEach(([departamento, datos]) => {
    html += `
      <tr>
        <td>${formatDepartamento(departamento)}</td>
        <td>${datos.empleados.size}</td>
        <td>${formatCurrency(datos.percepciones)}</td>
        <td>${formatCurrency(datos.deducciones)}</td>
        <td>${formatCurrency(datos.pagoNeto)}</td>
      </tr>
    `
  })

  html += `
        </tbody>
      </table>
    </div>
  `

  contenidoReporte.innerHTML = html
}

function generarReporteRotacion(fechaInicio, fechaFin, titulo) {
  document.getElementById("reporte-titulo").textContent = `Rotación de Personal - ${titulo}`

  const contenidoReporte = document.getElementById("reporte-contenido")

  // Filtrar empleados por fecha de ingreso
  const empleadosIngreso = empleados.filter((e) => {
    const fechaIngreso = new Date(e.ingreso)
    return fechaIngreso >= fechaInicio && fechaIngreso <= fechaFin
  })

  // Simular empleados que salieron en el periodo
  // En una implementación real, esto vendría de una tabla de bajas de personal
  const empleadosSalida = [
    {
      id: 101,
      nombre: "Pedro Sánchez",
      departamento: "restaurante",
      puesto: "Mesero",
      ingreso: "2022-05-10",
      salida: "2023-10-15",
      motivo: "Renuncia voluntaria",
    },
    {
      id: 102,
      nombre: "Laura Jiménez",
      departamento: "recepcion",
      puesto: "Recepcionista",
      ingreso: "2021-08-20",
      salida: "2023-09-30",
      motivo: "Mejor oferta laboral",
    },
  ]

  // Calcular índice de rotación
  // Fórmula: ((Altas + Bajas) / 2) / Plantilla promedio * 100
  const totalIngresos = empleadosIngreso.length
  const totalSalidas = empleadosSalida.length
  const plantillaPromedio = empleados.length - totalIngresos / 2 + totalSalidas / 2
  const indiceRotacion = plantillaPromedio > 0 ? ((totalIngresos + totalSalidas) / 2 / plantillaPromedio) * 100 : 0

  // Crear HTML del reporte
  let html = `
    <div class="report-header">
      <div class="report-meta">
        <p><strong>Fecha de generación:</strong> ${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}</p>
        <p><strong>Generado por:</strong> Admin</p>
      </div>
      <div class="report-summary">
        <div class="summary-stats">
          <div class="stat-item">
            <span class="stat-label">Total Ingresos:</span>
            <span class="stat-value">${totalIngresos}</span>
          </div>
          <div class="stat-item">
            <span class="stat-label">Total Salidas:</span>
            <span class="stat-value">${totalSalidas}</span>
          </div>
          <div class="stat-item">
            <span class="stat-label">Índice de Rotación:</span>
            <span class="stat-value">${indiceRotacion.toFixed(2)}%</span>
          </div>
        </div>
      </div>
    </div>
    
    <h4>Ingresos de Personal</h4>
    <div class="table-container">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Departamento</th>
            <th>Puesto</th>
            <th>Fecha Ingreso</th>
          </tr>
        </thead>
        <tbody>
  `

  // Ordenar empleados por fecha de ingreso
  const empleadosIngresoOrdenados = [...empleadosIngreso].sort((a, b) => new Date(a.ingreso) - new Date(b.ingreso))

  // Agregar filas de ingresos
  empleadosIngresoOrdenados.forEach((empleado) => {
    html += `
      <tr>
        <td>${empleado.id}</td>
        <td>${empleado.nombre}</td>
        <td>${formatDepartamento(empleado.departamento)}</td>
        <td>${empleado.puesto}</td>
        <td>${formatDate(empleado.ingreso)}</td>
      </tr>
    `
  })

  html += `
        </tbody>
      </table>
    </div>
    
    <h4>Salidas de Personal</h4>
    <div class="table-container">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Departamento</th>
            <th>Puesto</th>
            <th>Fecha Ingreso</th>
            <th>Fecha Salida</th>
            <th>Motivo</th>
          </tr>
        </thead>
        <tbody>
  `

  // Ordenar empleados por fecha de salida
  const empleadosSalidaOrdenados = [...empleadosSalida].sort((a, b) => new Date(a.salida) - new Date(b.salida))

  // Agregar filas de salidas
  empleadosSalidaOrdenados.forEach((empleado) => {
    html += `
      <tr>
        <td>${empleado.id}</td>
        <td>${empleado.nombre}</td>
        <td>${formatDepartamento(empleado.departamento)}</td>
        <td>${empleado.puesto}</td>
        <td>${formatDate(empleado.ingreso)}</td>
        <td>${formatDate(empleado.salida)}</td>
        <td>${empleado.motivo}</td>
      </tr>
    `
  })

  html += `
        </tbody>
      </table>
    </div>
  `

  contenidoReporte.innerHTML = html
}

function generarReporteRapido(tipo) {
  // Establecer valores en el formulario
  document.getElementById("reporte-tipo").value = tipo
  document.getElementById("reporte-periodo").value = "mensual"
  document.getElementById("periodo-personalizado").classList.add("hidden")

  // Generar reporte
  generarReporte()
}

// Funciones para exportar
function exportarEmpleados() {
  alert("Exportando empleados a Excel...")
  // En una implementación real, se generaría un archivo Excel para descargar
}

function exportarAsistencias() {
  alert("Exportando asistencias a Excel...")
  // En una implementación real, se generaría un archivo Excel para descargar
}

function exportarHistorialNomina() {
  alert("Exportando historial de nómina a Excel...")
  // En una implementación real, se generaría un archivo Excel para descargar
}

function exportarReporteExcel() {
  alert("Exportando reporte a Excel...")
  // En una implementación real, se generaría un archivo Excel para descargar
}

function exportarReportePDF() {
  alert("Exportando reporte a PDF...")
  // En una implementación real, se generaría un archivo PDF para descargar
}

function imprimirReporte() {
  window.print()
}

function imprimirNomina() {
  // En una implementación real, se abriría una ventana de impresión con el contenido de la nómina
  window.print()
}

function imprimirDetalleNomina() {
  // En una implementación real, se abriría una ventana de impresión con el detalle de la nómina
  window.print()
}

// Funciones para modales
function cerrarModal(modalId) {
  document.getElementById(modalId).style.display = "none"
}

// Funciones para limpiar formularios
function limpiarFormulario(formId) {
  document.getElementById(formId).reset()
}

// Funciones para ver todos los empleados y próximos pagos
function verTodosEmpleados() {
  // Cambiar a la sección de empleados
  document.querySelectorAll(".nav-item").forEach((item) => {
    item.classList.remove("active")
  })

  document.querySelectorAll(".content-section").forEach((section) => {
    section.classList.remove("active")
  })

  // Activar sección de empleados
  document.querySelector('[data-section="empleados"]').classList.add("active")
  document.getElementById("empleados").classList.add("active")

  // Restablecer filtros
  document.getElementById("filtro-departamento").value = "todos"
  document.getElementById("filtro-estado").value = "todos"
  document.getElementById("buscar-empleado").value = ""

  // Cargar todos los empleados
  cargarTablaEmpleados()
}

function verTodosProximosPagos() {
  // Cambiar a la sección de nómina
  document.querySelectorAll(".nav-item").forEach((item) => {
    item.classList.remove("active")
  })

  document.querySelectorAll(".content-section").forEach((section) => {
    section.classList.remove("active")
  })

  // Activar sección de nómina
  document.querySelector('[data-section="nomina"]').classList.add("active")
  document.getElementById("nomina").classList.add("active")

  // Restablecer filtros
  document.getElementById("filtro-empleado-nomina").value = "todos"

  // Cargar historial de nómina
  cargarHistorialNomina()
}

// Función para llenar selectores de empleados
function llenarSelectoresEmpleados() {
  // Llenar selector de empleados para asistencias
  const selectorAsistencia = document.getElementById("asistencia-empleado")
  const selectorFiltroAsistencia = document.getElementById("filtro-empleado-asistencia")
  const selectorNomina = document.getElementById("nomina-empleado")
  const selectorFiltroNomina = document.getElementById("filtro-empleado-nomina")

  // Limpiar selectores
  if (selectorAsistencia) selectorAsistencia.innerHTML = '<option value="">Seleccionar empleado...</option>'
  if (selectorFiltroAsistencia) selectorFiltroAsistencia.innerHTML = '<option value="todos">Todos</option>'
  if (selectorNomina) selectorNomina.innerHTML = '<option value="">Seleccionar empleado...</option>'
  if (selectorFiltroNomina) selectorFiltroNomina.innerHTML = '<option value="todos">Todos los empleados</option>'

  // Ordenar empleados por nombre
  const empleadosOrdenados = [...empleados].sort((a, b) => a.nombre.localeCompare(b.nombre))

  // Agregar opciones a los selectores
  empleadosOrdenados.forEach((empleado) => {
    if (selectorAsistencia) {
      const option = document.createElement("option")
      option.value = empleado.id
      option.textContent = empleado.nombre
      selectorAsistencia.appendChild(option)
    }

    if (selectorFiltroAsistencia) {
      const option = document.createElement("option")
      option.value = empleado.id
      option.textContent = empleado.nombre
      selectorFiltroAsistencia.appendChild(option)
    }

    if (selectorNomina) {
      const option = document.createElement("option")
      option.value = empleado.id
      option.textContent = empleado.nombre
      selectorNomina.appendChild(option)
    }

    if (selectorFiltroNomina) {
      const option = document.createElement("option")
      option.value = empleado.id
      option.textContent = empleado.nombre
      selectorFiltroNomina.appendChild(option)
    }
  })
}

// Función para cerrar sesión
function cerrarSesion() {
  if (confirm("¿Está seguro que desea cerrar sesión?")) {
    alert("Sesión cerrada correctamente")
    // En una implementación real, aquí se redireccionaría a la página de login
    // window.location.href = "login.html";
  }
}

// Funciones de utilidad
function formatCurrency(amount) {
  return "$" + amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")
}

function formatDate(dateString) {
  const date = new Date(dateString)
  return date.toLocaleDateString()
}

function formatDepartamento(departamento) {
  const departamentos = {
    recepcion: "Recepción",
    housekeeping: "Housekeeping",
    restaurante: "Restaurante",
    mantenimiento: "Mantenimiento",
    administracion: "Administración",
  }

  return departamentos[departamento] || departamento
}

function formatEstado(estado) {
  const estados = {
    activo: "Activo",
    inactivo: "Inactivo",
    vacaciones: "Vacaciones",
    permiso: "Permiso",
  }

  return estados[estado] || estado
}

function formatTipoAsistencia(tipo) {
  const tipos = {
    asistencia: "Asistencia",
    falta: "Falta",
    retardo: "Retardo",
    permiso: "Permiso",
    vacaciones: "Vacaciones",
  }

  return tipos[tipo] || tipo
}

function formatEstadoNomina(estado) {
  const estados = {
    pendiente: "Pendiente",
    completado: "Completado",
  }

  return estados[estado] || estado
}
