
let departamentosCanvas
let asistenciaCanvas
let departamentosCtx
let asistenciaCtx
let departamentosData = []
let departamentosLabels = []
const asistenciaData = {
  labels: [],
  datasets: [
    { label: "Asistencias", color: "#4CAF50", data: [] },
    { label: "Faltas", color: "#F44336", data: [] },
    { label: "Retardos", color: "#FFC107", data: [] },
  ],
}

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

  // Inicializar el botón de agregar empleado
  inicializarBotonAgregarEmpleado()
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

// Gráficos - IMPLEMENTACIÓN SIN LIBRERÍAS
function inicializarGraficos() {
  // Obtener los elementos canvas
  departamentosCanvas = document.getElementById("departamentos-chart")
  asistenciaCanvas = document.getElementById("asistencia-chart")

  if (!departamentosCanvas || !asistenciaCanvas) {
    console.error("No se encontraron los elementos canvas para los gráficos.")
    return
  }

  // Obtener contextos 2D
  departamentosCtx = departamentosCanvas.getContext("2d")
  asistenciaCtx = asistenciaCanvas.getContext("2d")

  if (!departamentosCtx || !asistenciaCtx) {
    console.error("No se pudieron obtener los contextos 2D para los gráficos.")
    return
  }

  // Configurar tamaños de canvas
  ajustarTamanoCanvas()

  // Agregar listener para redimensionar los gráficos cuando cambie el tamaño de la ventana
  window.addEventListener("resize", () => {
    ajustarTamanoCanvas()
    actualizarGraficos()
  })

  // Inicializar eventos para interactividad
  inicializarEventosGraficos()

  // Actualizar los gráficos con datos iniciales
  actualizarGraficos()
}

function ajustarTamanoCanvas() {
  // Ajustar tamaño del canvas de departamentos
  const departamentosContainer = departamentosCanvas.parentElement
  departamentosCanvas.width = departamentosContainer.clientWidth
  departamentosCanvas.height = departamentosContainer.clientHeight

  // Ajustar tamaño del canvas de asistencia
  const asistenciaContainer = asistenciaCanvas.parentElement
  asistenciaCanvas.width = asistenciaContainer.clientWidth
  asistenciaCanvas.height = asistenciaContainer.clientHeight
}

function inicializarEventosGraficos() {
  // Evento para mostrar tooltips en el gráfico de departamentos
  departamentosCanvas.addEventListener("mousemove", (event) => {
    const rect = departamentosCanvas.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top

    // Verificar si el mouse está sobre alguna porción del gráfico
    const sector = obtenerSectorPieChart(x, y)

    if (sector !== -1) {
      // Mostrar tooltip
      mostrarTooltipDepartamento(event.clientX, event.clientY, sector)
    } else {
      // Ocultar tooltip
      ocultarTooltipDepartamento()
    }
  })

  // Evento para ocultar tooltip al salir del canvas
  departamentosCanvas.addEventListener("mouseout", () => {
    ocultarTooltipDepartamento()
  })

  // Evento para mostrar tooltips en el gráfico de asistencia
  asistenciaCanvas.addEventListener("mousemove", (event) => {
    const rect = asistenciaCanvas.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top

    // Verificar si el mouse está sobre alguna barra del gráfico
    const barra = obtenerBarraGrafico(x, y)

    if (barra.encontrada) {
      // Mostrar tooltip
      mostrarTooltipAsistencia(event.clientX, event.clientY, barra.dataset, barra.index)
    } else {
      // Ocultar tooltip
      ocultarTooltipAsistencia()
    }
  })

  // Evento para ocultar tooltip al salir del canvas
  asistenciaCanvas.addEventListener("mouseout", () => {
    ocultarTooltipAsistencia()
  })
}

// Variables para tooltips
let tooltipDepartamento = null
let tooltipAsistencia = null

function mostrarTooltipDepartamento(x, y, sectorIndex) {
  // Crear tooltip si no existe
  if (!tooltipDepartamento) {
    tooltipDepartamento = document.createElement("div")
    tooltipDepartamento.className = "grafico-tooltip"
    tooltipDepartamento.style.position = "absolute"
    tooltipDepartamento.style.backgroundColor = "rgba(0, 0, 0, 0.8)"
    tooltipDepartamento.style.color = "white"
    tooltipDepartamento.style.padding = "5px 10px"
    tooltipDepartamento.style.borderRadius = "4px"
    tooltipDepartamento.style.fontSize = "12px"
    tooltipDepartamento.style.pointerEvents = "none"
    tooltipDepartamento.style.zIndex = "1000"
    document.body.appendChild(tooltipDepartamento)
  }

  // Calcular el porcentaje
  const total = departamentosData.reduce((a, b) => a + b, 0)
  const porcentaje = Math.round((departamentosData[sectorIndex] / total) * 100)

  // Actualizar contenido y posición
  tooltipDepartamento.textContent = `${departamentosLabels[sectorIndex]}: ${departamentosData[sectorIndex]} (${porcentaje}%)`
  tooltipDepartamento.style.left = `${x + 10}px`
  tooltipDepartamento.style.top = `${y + 10}px`
  tooltipDepartamento.style.display = "block"
}

function ocultarTooltipDepartamento() {
  if (tooltipDepartamento) {
    tooltipDepartamento.style.display = "none"
  }
}

function mostrarTooltipAsistencia(x, y, datasetIndex, dataIndex) {
  // Crear tooltip si no existe
  if (!tooltipAsistencia) {
    tooltipAsistencia = document.createElement("div")
    tooltipAsistencia.className = "grafico-tooltip"
    tooltipAsistencia.style.position = "absolute"
    tooltipAsistencia.style.backgroundColor = "rgba(0, 0, 0, 0.8)"
    tooltipAsistencia.style.color = "white"
    tooltipAsistencia.style.padding = "5px 10px"
    tooltipAsistencia.style.borderRadius = "4px"
    tooltipAsistencia.style.fontSize = "12px"
    tooltipAsistencia.style.pointerEvents = "none"
    tooltipAsistencia.style.zIndex = "1000"
    document.body.appendChild(tooltipAsistencia)
  }

  // Actualizar contenido y posición
  const dataset = asistenciaData.datasets[datasetIndex]
  const label = dataset.label
  const value = dataset.data[dataIndex]
  const fecha = asistenciaData.labels[dataIndex]

  tooltipAsistencia.textContent = `${fecha} - ${label}: ${value}`
  tooltipAsistencia.style.left = `${x + 10}px`
  tooltipAsistencia.style.top = `${y + 10}px`
  tooltipAsistencia.style.display = "block"
}

function ocultarTooltipAsistencia() {
  if (tooltipAsistencia) {
    tooltipAsistencia.style.display = "none"
  }
}

function obtenerSectorPieChart(x, y) {
  // Calcular el centro del gráfico
  const centerX = departamentosCanvas.width / 2
  const centerY = departamentosCanvas.height / 2

  // Calcular la distancia desde el centro
  const dx = x - centerX
  const dy = y - centerY
  const distance = Math.sqrt(dx * dx + dy * dy)

  // Radio del gráfico (80% del menor entre ancho y alto)
  const radius = Math.min(departamentosCanvas.width, departamentosCanvas.height) * 0.4

  // Si está fuera del radio, no está sobre ningún sector
  if (distance > radius) {
    return -1
  }

  // Calcular el ángulo en radianes
  let angle = Math.atan2(dy, dx)
  if (angle < 0) {
    angle += 2 * Math.PI
  }

  // Calcular el sector correspondiente al ángulo
  const total = departamentosData.reduce((a, b) => a + b, 0)
  let acumulado = 0

  for (let i = 0; i < departamentosData.length; i++) {
    const porcentaje = departamentosData[i] / total
    const sectorAngle = porcentaje * 2 * Math.PI

    acumulado += sectorAngle

    if (angle <= acumulado) {
      return i
    }
  }

  return -1
}

function obtenerBarraGrafico(x, y) {
  // Calcular dimensiones del área de gráfico
  const chartArea = {
    left: asistenciaCanvas.width * 0.1,
    right: asistenciaCanvas.width * 0.9,
    top: asistenciaCanvas.height * 0.1,
    bottom: asistenciaCanvas.height * 0.8,
  }

  // Ancho del área de gráfico
  const chartWidth = chartArea.right - chartArea.left
  const chartHeight = chartArea.bottom - chartArea.top

  // Si está fuera del área del gráfico
  if (x < chartArea.left || x > chartArea.right || y < chartArea.top || y > chartArea.bottom) {
    return { encontrada: false }
  }

  // Número de grupos (fechas)
  const numGroups = asistenciaData.labels.length

  // Ancho de cada grupo
  const groupWidth = chartWidth / numGroups

  // Determinar el grupo (índice de fecha)
  const groupIndex = Math.floor((x - chartArea.left) / groupWidth)

  // Si el índice está fuera de rango
  if (groupIndex < 0 || groupIndex >= numGroups) {
    return { encontrada: false }
  }

  // Encontrar el valor máximo para escalar
  const maxValue = Math.max(...asistenciaData.datasets.map((dataset) => Math.max(...dataset.data)))

  // Ancho de cada barra dentro del grupo
  const numDatasets = asistenciaData.datasets.length
  const barWidth = groupWidth / (numDatasets + 1) // +1 para espacio entre grupos

  // Verificar cada dataset (tipo de asistencia)
  for (let i = 0; i < numDatasets; i++) {
    const dataset = asistenciaData.datasets[i]
    const value = dataset.data[groupIndex]

    // Calcular altura de la barra
    const barHeight = (value / maxValue) * chartHeight

    // Calcular posición X de la barra
    const barX = chartArea.left + groupIndex * groupWidth + (i + 0.5) * barWidth

    // Calcular posición Y de la barra (desde abajo)
    const barY = chartArea.bottom - barHeight

    // Verificar si el punto está dentro de la barra
    if (x >= barX && x <= barX + barWidth && y >= barY && y <= chartArea.bottom) {
      return {
        encontrada: true,
        dataset: i,
        index: groupIndex,
      }
    }
  }

  return { encontrada: false }
}

function actualizarGraficos() {
  // Verificar si los contextos están inicializados
  if (!departamentosCtx || !asistenciaCtx) {
    console.error("Los contextos de los gráficos no están inicializados.")
    return
  }

  // Actualizar datos para el gráfico de departamentos
  actualizarDatosDepartamentos()

  // Actualizar datos para el gráfico de asistencia
  actualizarDatosAsistencia()

  // Dibujar los gráficos
  dibujarGraficoDepartamentos()
  dibujarGraficoAsistencia()
}

function actualizarDatosDepartamentos() {
  // Contar empleados por departamento
  const departamentos = {}

  empleados.forEach((empleado) => {
    if (empleado.estado === "activo") {
      if (!departamentos[empleado.departamento]) {
        departamentos[empleado.departamento] = 0
      }
      departamentos[empleado.departamento]++
    }
  })

  // Preparar datos para el gráfico
  departamentosLabels = Object.keys(departamentos).map((dep) => formatDepartamento(dep))
  departamentosData = Object.values(departamentos)
}

function actualizarDatosAsistencia() {
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

  // Actualizar datos del gráfico de asistencia
  asistenciaData.labels = fechasFormateadas
  asistenciaData.datasets[0].data = asistenciasData
  asistenciaData.datasets[1].data = faltasData
  asistenciaData.datasets[2].data = retardosData
}

function dibujarGraficoDepartamentos() {
  // Limpiar el canvas
  departamentosCtx.clearRect(0, 0, departamentosCanvas.width, departamentosCanvas.height)

  // Si no hay datos, mostrar mensaje
  if (departamentosData.length === 0) {
    mostrarMensajeNoData(departamentosCtx, departamentosCanvas.width, departamentosCanvas.height)
    return
  }

  // Colores para las secciones del gráfico
  const colors = ["#4CAF50", "#2196F3", "#FFC107", "#9C27B0", "#FF5722", "#607D8B"]

  // Calcular el total
  const total = departamentosData.reduce((a, b) => a + b, 0)

  // Calcular el centro y radio del gráfico
  const centerX = departamentosCanvas.width / 2
  const centerY = departamentosCanvas.height / 2
  const radius = Math.min(departamentosCanvas.width, departamentosCanvas.height) * 0.4

  // Dibujar el gráfico circular
  let startAngle = 0

  for (let i = 0; i < departamentosData.length; i++) {
    const value = departamentosData[i]
    const sliceAngle = (value / total) * 2 * Math.PI

    // Dibujar sector
    departamentosCtx.beginPath()
    departamentosCtx.moveTo(centerX, centerY)
    departamentosCtx.arc(centerX, centerY, radius, startAngle, startAngle + sliceAngle)
    departamentosCtx.closePath()

    // Aplicar color
    departamentosCtx.fillStyle = colors[i % colors.length]
    departamentosCtx.fill()

    // Dibujar borde
    departamentosCtx.strokeStyle = "#fff"
    departamentosCtx.lineWidth = 2
    departamentosCtx.stroke()

    startAngle += sliceAngle
  }

  // Dibujar leyenda
  dibujarLeyendaDepartamentos(colors)
}

function dibujarLeyendaDepartamentos(colors) {
  const legendX = departamentosCanvas.width * 0.7
  const legendY = departamentosCanvas.height * 0.2
  const itemHeight = 20
  const boxSize = 15

  for (let i = 0; i < departamentosLabels.length; i++) {
    const y = legendY + i * itemHeight

    // Dibujar cuadro de color
    departamentosCtx.fillStyle = colors[i % colors.length]
    departamentosCtx.fillRect(legendX, y, boxSize, boxSize)

    // Dibujar borde
    departamentosCtx.strokeStyle = "#fff"
    departamentosCtx.lineWidth = 1
    departamentosCtx.strokeRect(legendX, y, boxSize, boxSize) // Dibujar texto
    departamentosCtx.fillStyle = "#333"
    departamentosCtx.font = "12px Arial"
    departamentosCtx.textAlign = "left"
    departamentosCtx.textBaseline = "middle"
    departamentosCtx.fillText(departamentosLabels[i], legendX + boxSize + 5, y + boxSize / 2)
  }
}

function dibujarGraficoAsistencia() {
  // Limpiar el canvas
  asistenciaCtx.clearRect(0, 0, asistenciaCanvas.width, asistenciaCanvas.height)

  // Si no hay datos, mostrar mensaje
  if (asistenciaData.labels.length === 0) {
    mostrarMensajeNoData(asistenciaCtx, asistenciaCanvas.width, asistenciaCanvas.height)
    return
  }

  // Calcular dimensiones del área de gráfico
  const chartArea = {
    left: asistenciaCanvas.width * 0.1,
    right: asistenciaCanvas.width * 0.9,
    top: asistenciaCanvas.height * 0.1,
    bottom: asistenciaCanvas.height * 0.8,
  }

  // Ancho del área de gráfico
  const chartWidth = chartArea.right - chartArea.left
  const chartHeight = chartArea.bottom - chartArea.top

  // Número de grupos (fechas)
  const numGroups = asistenciaData.labels.length

  // Ancho de cada grupo
  const groupWidth = chartWidth / numGroups

  // Encontrar el valor máximo para escalar
  const maxValue = Math.max(
    ...asistenciaData.datasets.map(
      (dataset) => Math.max(...dataset.data, 1), // Mínimo 1 para evitar división por cero
    ),
  )

  // Dibujar ejes
  dibujarEjesAsistencia(chartArea, maxValue)

  // Dibujar barras
  for (let groupIndex = 0; groupIndex < numGroups; groupIndex++) {
    const numDatasets = asistenciaData.datasets.length
    const barWidth = groupWidth / (numDatasets + 1) // +1 para espacio entre grupos

    for (let datasetIndex = 0; datasetIndex < numDatasets; datasetIndex++) {
      const dataset = asistenciaData.datasets[datasetIndex]
      const value = dataset.data[groupIndex]

      // Calcular altura de la barra
      const barHeight = (value / maxValue) * chartHeight

      // Calcular posición X de la barra
      const barX = chartArea.left + groupIndex * groupWidth + (datasetIndex + 0.5) * barWidth

      // Calcular posición Y de la barra (desde abajo)
      const barY = chartArea.bottom - barHeight

      // Dibujar barra
      asistenciaCtx.fillStyle = dataset.color
      asistenciaCtx.fillRect(barX, barY, barWidth, barHeight)

      // Dibujar borde
      asistenciaCtx.strokeStyle = "#fff"
      asistenciaCtx.lineWidth = 1
      asistenciaCtx.strokeRect(barX, barY, barWidth, barHeight)

      // Dibujar valor encima de la barra si es mayor que cero
      if (value > 0) {
        asistenciaCtx.fillStyle = "#333"
        asistenciaCtx.font = "10px Arial"
        asistenciaCtx.textAlign = "center"
        asistenciaCtx.textBaseline = "bottom"
        asistenciaCtx.fillText(value.toString(), barX + barWidth / 2, barY - 2)
      }
    }
  }

  // Dibujar leyenda
  dibujarLeyendaAsistencia()
}

function dibujarEjesAsistencia(chartArea, maxValue) {
  // Dibujar eje Y
  asistenciaCtx.beginPath()
  asistenciaCtx.moveTo(chartArea.left, chartArea.top)
  asistenciaCtx.lineTo(chartArea.left, chartArea.bottom)
  asistenciaCtx.strokeStyle = "#999"
  asistenciaCtx.lineWidth = 1
  asistenciaCtx.stroke()

  // Dibujar eje X
  asistenciaCtx.beginPath()
  asistenciaCtx.moveTo(chartArea.left, chartArea.bottom)
  asistenciaCtx.lineTo(chartArea.right, chartArea.bottom)
  asistenciaCtx.strokeStyle = "#999"
  asistenciaCtx.lineWidth = 1
  asistenciaCtx.stroke()

  // Dibujar líneas horizontales y etiquetas del eje Y
  const numLines = 5
  for (let i = 0; i <= numLines; i++) {
    const y = chartArea.bottom - (i / numLines) * (chartArea.bottom - chartArea.top)
    const value = Math.round((i / numLines) * maxValue)

    // Dibujar línea
    asistenciaCtx.beginPath()
    asistenciaCtx.moveTo(chartArea.left, y)
    asistenciaCtx.lineTo(chartArea.right, y)
    asistenciaCtx.strokeStyle = "#eee"
    asistenciaCtx.lineWidth = 1
    asistenciaCtx.stroke()

    // Dibujar etiqueta
    asistenciaCtx.fillStyle = "#666"
    asistenciaCtx.font = "10px Arial"
    asistenciaCtx.textAlign = "right"
    asistenciaCtx.textBaseline = "middle"
    asistenciaCtx.fillText(value.toString(), chartArea.left - 5, y)
  }

  // Dibujar etiquetas del eje X
  for (let i = 0; i < asistenciaData.labels.length; i++) {
    const x = chartArea.left + (i + 0.5) * ((chartArea.right - chartArea.left) / asistenciaData.labels.length)

    asistenciaCtx.fillStyle = "#666"
    asistenciaCtx.font = "10px Arial"
    asistenciaCtx.textAlign = "center"
    asistenciaCtx.textBaseline = "top"
    asistenciaCtx.fillText(asistenciaData.labels[i], x, chartArea.bottom + 5)
  }
}

function dibujarLeyendaAsistencia() {
  const legendX = asistenciaCanvas.width * 0.1
  const legendY = asistenciaCanvas.height * 0.05
  const itemWidth = 100
  const boxSize = 15

  for (let i = 0; i < asistenciaData.datasets.length; i++) {
    const dataset = asistenciaData.datasets[i]
    const x = legendX + i * itemWidth

    // Dibujar cuadro de color
    asistenciaCtx.fillStyle = dataset.color
    asistenciaCtx.fillRect(x, legendY, boxSize, boxSize)

    // Dibujar borde
    asistenciaCtx.strokeStyle = "#fff"
    asistenciaCtx.lineWidth = 1
    asistenciaCtx.strokeRect(x, legendY, boxSize, boxSize)

    // Dibujar texto
    asistenciaCtx.fillStyle = "#333"
    asistenciaCtx.font = "12px Arial"
    asistenciaCtx.textAlign = "left"
    asistenciaCtx.textBaseline = "middle"
    asistenciaCtx.fillText(dataset.label, x + boxSize + 5, legendY + boxSize / 2)
  }
}

function mostrarMensajeNoData(ctx, width, height) {
  ctx.fillStyle = "#999"
  ctx.font = "14px Arial"
  ctx.textAlign = "center"
  ctx.textBaseline = "middle"
  ctx.fillText("No hay datos disponibles", width / 2, height / 2)
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

// Funciones para agregar empleados
function inicializarBotonAgregarEmpleado() {
  // Buscar el botón de agregar empleado
  const btnAgregarEmpleado = document.getElementById("btn-agregar-empleado")

  if (btnAgregarEmpleado) {
    btnAgregarEmpleado.addEventListener("click", mostrarFormularioEmpleado)
  } else {
    console.error("No se encontró el botón de agregar empleado")

    // Intentar encontrar otro botón o crear uno si no existe
    const seccionEmpleados = document.getElementById("empleados")
    if (seccionEmpleados) {
      const headerSeccion = seccionEmpleados.querySelector(".section-header")

      if (headerSeccion && !headerSeccion.querySelector("#btn-agregar-empleado")) {
        const nuevoBoton = document.createElement("button")
        nuevoBoton.id = "btn-agregar-empleado"
        nuevoBoton.className = "btn-primary"
        nuevoBoton.innerHTML = '<span class="material-symbols-outlined">add</span> Agregar Empleado'
        nuevoBoton.addEventListener("click", mostrarFormularioEmpleado)

        headerSeccion.appendChild(nuevoBoton)
      }
    }
  }

  // Crear el modal si no existe
  crearModalEmpleado()
}

function crearModalEmpleado() {
  // Verificar si ya existe el modal
  if (document.getElementById("modal-empleado")) {
    return
  }

  // Crear el modal
  const modal = document.createElement("div")
  modal.id = "modal-empleado"
  modal.className = "modal"

  // Contenido del modal
  modal.innerHTML = `
    <div class="modal-content">
      <div class="modal-header">
        <h3>Agregar Nuevo Empleado</h3>
        <button type="button" class="btn-close" id="btn-cerrar-modal">
          <span class="material-symbols-outlined">close</span>
        </button>
      </div>
      <div class="modal-body">
        <form id="form-empleado">
          <div class="form-group">
            <label for="empleado-nombre">Nombre Completo *</label>
            <input type="text" id="empleado-nombre" name="nombre" required>
          </div>
          
          <div class="form-row">
            <div class="form-group">
              <label for="empleado-identificacion">Identificación *</label>
              <input type="text" id="empleado-identificacion" name="identificacion" required>
            </div>
            <div class="form-group">
              <label for="empleado-nacimiento">Fecha de Nacimiento *</label>
              <input type="date" id="empleado-nacimiento" name="nacimiento" required>
            </div>
          </div>
          
          <div class="form-group">
            <label for="empleado-direccion">Dirección</label>
            <input type="text" id="empleado-direccion" name="direccion">
          </div>
          
          <div class="form-row">
            <div class="form-group">
              <label for="empleado-telefono">Teléfono *</label>
              <input type="tel" id="empleado-telefono" name="telefono" required>
            </div>
            <div class="form-group">
              <label for="empleado-email">Email *</label>
              <input type="email" id="empleado-email" name="email" required>
            </div>
          </div>
          
          <div class="form-row">
            <div class="form-group">
              <label for="empleado-departamento">Departamento *</label>
              <select id="empleado-departamento" name="departamento" required>
                <option value="">Seleccionar...</option>
                <option value="recepcion">Recepción</option>
                <option value="housekeeping">Housekeeping</option>
                <option value="restaurante">Restaurante</option>
                <option value="mantenimiento">Mantenimiento</option>
                <option value="administracion">Administración</option>
              </select>
            </div>
            <div class="form-group">
              <label for="empleado-puesto">Puesto *</label>
              <input type="text" id="empleado-puesto" name="puesto" required>
            </div>
          </div>
          
          <div class="form-row">
            <div class="form-group">
              <label for="empleado-ingreso">Fecha de Ingreso *</label>
              <input type="date" id="empleado-ingreso" name="ingreso" required>
            </div>
            <div class="form-group">
              <label for="empleado-estado">Estado *</label>
              <select id="empleado-estado" name="estado" required>
                <option value="activo">Activo</option>
                <option value="inactivo">Inactivo</option>
                <option value="vacaciones">Vacaciones</option>
                <option value="permiso">Permiso</option>
              </select>
            </div>
          </div>
          
          <div class="form-row">
            <div class="form-group">
              <label for="empleado-salario">Salario Mensual *</label>
              <input type="number" id="empleado-salario" name="salario" min="0" step="100" required>
            </div>
            <div class="form-group">
              <label for="empleado-jornada">Jornada *</label>
              <select id="empleado-jornada" name="jornada" required>
                <option value="completa">Completa</option>
                <option value="parcial">Parcial</option>
              </select>
            </div>
          </div>
          
          <div class="form-group">
            <label for="empleado-observaciones">Observaciones</label>
            <textarea id="empleado-observaciones" name="observaciones" rows="3"></textarea>
          </div>
          
          <div class="form-actions">
            <button type="button" class="btn-secondary" id="btn-cancelar-empleado">Cancelar</button>
            <button type="submit" class="btn-primary">Guardar Empleado</button>
          </div>
        </form>
      </div>
    </div>
  `

  // Agregar el modal al body
  document.body.appendChild(modal)

  // Configurar eventos del modal
  document.getElementById("btn-cerrar-modal").addEventListener("click", ocultarFormularioEmpleado)
  document.getElementById("btn-cancelar-empleado").addEventListener("click", ocultarFormularioEmpleado)
  document.getElementById("form-empleado").addEventListener("submit", guardarEmpleado)

  // Agregar estilos si no existen
  if (!document.getElementById("estilos-modal")) {
    const estilos = document.createElement("style")
    estilos.id = "estilos-modal"
    estilos.textContent = `
      .modal {
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 1000;
        overflow-y: auto;
      }
      
      .modal.active {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        padding: 2rem 0;
      }
      
      .modal-content {
        background-color: white;
        border-radius: 8px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
        width: 100%;
        max-width: 700px;
        max-height: 90vh;
        overflow-y: auto;
      }
      
      .modal-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem 1.5rem;
        border-bottom: 1px solid #e0e0e0;
      }
      
      .modal-body {
        padding: 1.5rem;
      }
      
      .form-group {
        margin-bottom: 1rem;
        width: 100%;
      }
      
      .form-row {
        display: flex;
        gap: 1rem;
        margin-bottom: 1rem;
      }
      
      .form-actions {
        display: flex;
        justify-content: flex-end;
        gap: 1rem;
        margin-top: 1.5rem;
      }
      
      label {
        display: block;
        margin-bottom: 0.5rem;
        font-weight: 500;
      }
      
      input, select, textarea {
        width: 100%;
        padding: 0.5rem;
        border: 1px solid #ccc;
        border-radius: 4px;
        font-size: 1rem;
      }
      
      input:focus, select:focus, textarea:focus {
        outline: none;
        border-color: #1a237e;
      }
      
      @media (max-width: 768px) {
        .form-row {
          flex-direction: column;
          gap: 0;
        }
      }
    `

    document.head.appendChild(estilos)
  }
}

function mostrarFormularioEmpleado() {
  // Mostrar el modal
  const modal = document.getElementById("modal-empleado")
  if (modal) {
    modal.classList.add("active")

    // Establecer fecha actual en los campos de fecha
    const hoy = new Date().toISOString().split("T")[0]
    document.getElementById("empleado-ingreso").value = hoy

    // Enfocar el primer campo
    document.getElementById("empleado-nombre").focus()
  }
}

function ocultarFormularioEmpleado() {
  // Ocultar el modal
  const modal = document.getElementById("modal-empleado")
  if (modal) {
    modal.classList.remove("active")

    // Limpiar el formulario
    document.getElementById("form-empleado").reset()
  }
}

function guardarEmpleado(event) {
  event.preventDefault()

  // Obtener los valores del formulario
  const nombre = document.getElementById("empleado-nombre").value.trim()
  const identificacion = document.getElementById("empleado-identificacion").value.trim()
  const nacimiento = document.getElementById("empleado-nacimiento").value
  const direccion = document.getElementById("empleado-direccion").value.trim()
  const telefono = document.getElementById("empleado-telefono").value.trim()
  const email = document.getElementById("empleado-email").value.trim()
  const departamento = document.getElementById("empleado-departamento").value
  const puesto = document.getElementById("empleado-puesto").value.trim()
  const ingreso = document.getElementById("empleado-ingreso").value
  const estado = document.getElementById("empleado-estado").value
  const salario = Number.parseFloat(document.getElementById("empleado-salario").value)
  const jornada = document.getElementById("empleado-jornada").value
  const observaciones = document.getElementById("empleado-observaciones").value.trim()

  // Validar campos obligatorios
  if (
    !nombre ||
    !identificacion ||
    !nacimiento ||
    !telefono ||
    !email ||
    !departamento ||
    !puesto ||
    !ingreso ||
    !estado ||
    isNaN(salario) ||
    !jornada
  ) {
    alert("Por favor, complete todos los campos obligatorios.")
    return
  }

  // Validar email
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    alert("Por favor, ingrese un email válido.")
    return
  }

  // Generar ID único (el mayor ID actual + 1)
  const nuevoId = Math.max(...empleados.map((e) => e.id), 0) + 1

  // Crear nuevo empleado
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

  // Agregar a la lista de empleados
  empleados.push(nuevoEmpleado)

  // Actualizar la tabla de empleados
  cargarTablaEmpleados()

  // Actualizar dashboard y gráficos
  cargarDashboard()

  // Mostrar mensaje de éxito
  alert(`Empleado ${nombre} agregado correctamente.`)

  // Cerrar el modal
  ocultarFormularioEmpleado()
}

function cargarTablaAsistencias() {
  // Implementación existente...
}

function cargarHistorialNomina() {
  // Implementación existente...
}

function llenarSelectoresEmpleados() {
  // Implementación existente...
}

function cargarEmpleadosRecientes() {
  // Implementación existente...
}

function cargarProximosPagos() {
  // Implementación existente...
}

// Funciones para ver y editar empleados
function verEmpleado(id) {
  const empleado = empleados.find((e) => e.id === id)

  if (!empleado) {
    alert("Empleado no encontrado.")
    return
  }

  // Aquí se implementaría la lógica para mostrar los detalles del empleado
  alert(`Detalles del empleado: ${empleado.nombre}`)
}

function editarEmpleado(id) {
  const empleado = empleados.find((e) => e.id === id)

  if (!empleado) {
    alert("Empleado no encontrado.")
    return
  }

  // Aquí se implementaría la lógica para editar el empleado
  alert(`Editar empleado: ${empleado.nombre}`)
}
