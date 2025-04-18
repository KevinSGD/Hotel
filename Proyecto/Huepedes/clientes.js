// Datos de ejemplo (simulando una base de datos)
const clientes = [
    {
      id: 1,
      nombre: "Juan Pérez",
      tipoDocumento: "dni",
      documento: "12345678",
      nacionalidad: "Española",
      email: "juan@ejemplo.com",
      telefono: "555-1234",
      direccion: "Calle Principal 123",
      ciudad: "Madrid",
      pais: "España",
      clasificacion: "frecuente",
      estado: "activo",
      notas: {
        alergias: "Alergia al marisco",
        preferencias: "Habitación con vistas al mar, cama king size",
        adicionales: "Cliente habitual por motivos de trabajo",
      },
      fechaRegistro: "2022-05-10",
    },
    {
      id: 2,
      nombre: "María López",
      tipoDocumento: "pasaporte",
      documento: "AB123456",
      nacionalidad: "Mexicana",
      email: "maria@ejemplo.com",
      telefono: "555-5678",
      direccion: "Av. Reforma 456",
      ciudad: "Ciudad de México",
      pais: "México",
      clasificacion: "vip",
      estado: "activo",
      notas: {
        alergias: "Intolerancia al gluten",
        preferencias: "Almohadas extra, desayuno en la habitación",
        adicionales: "Celebra su aniversario el 15 de junio",
      },
      fechaRegistro: "2022-08-22",
    },
    {
      id: 3,
      nombre: "Carlos Rodríguez",
      tipoDocumento: "dni",
      documento: "87654321",
      nacionalidad: "Española",
      email: "carlos@ejemplo.com",
      telefono: "555-9012",
      direccion: "Plaza Mayor 78",
      ciudad: "Barcelona",
      pais: "España",
      clasificacion: "nuevo",
      estado: "activo",
      notas: {
        alergias: "",
        preferencias: "Habitación tranquila, lejos del ascensor",
        adicionales: "",
      },
      fechaRegistro: "2023-10-05",
    },
  ]
  
  // Datos de reservas (relacionados con clientes)
  const reservas = [
    {
      id: 1,
      clienteId: 1,
      habitacion: {
        tipo: "doble",
        numero: "201",
      },
      fechaEntrada: "2023-11-15",
      fechaSalida: "2023-11-20",
      huespedes: 2,
      estado: "completada",
      observaciones: "Solicita cama adicional",
      servicios: ["desayuno", "wifi"],
      metodoPago: "tarjeta",
      totalPagado: 1200.0,
    },
    {
      id: 2,
      clienteId: 2,
      habitacion: {
        tipo: "suite",
        numero: "301",
      },
      fechaEntrada: "2023-11-18",
      fechaSalida: "2023-11-25",
      huespedes: 2,
      estado: "activa",
      observaciones: "",
      servicios: ["desayuno", "wifi", "parking"],
      metodoPago: "tarjeta",
      totalPagado: 2100.0,
    },
    {
      id: 3,
      clienteId: 1,
      habitacion: {
        tipo: "individual",
        numero: "101",
      },
      fechaEntrada: "2023-10-05",
      fechaSalida: "2023-10-07",
      huespedes: 1,
      estado: "completada",
      observaciones: "",
      servicios: ["wifi"],
      metodoPago: "efectivo",
      totalPagado: 400.0,
    },
  ]
  
  // Datos de consumos (relacionados con reservas)
  const consumos = [
    {
      id: 1,
      reservaId: 1,
      fecha: "2023-11-16",
      categoria: "minibar",
      producto: "Refresco",
      cantidad: 2,
      precioUnitario: 25.0,
    },
    {
      id: 2,
      reservaId: 1,
      fecha: "2023-11-17",
      categoria: "restaurante",
      producto: "Desayuno buffet",
      cantidad: 2,
      precioUnitario: 150.0,
    },
    {
      id: 3,
      reservaId: 2,
      fecha: "2023-11-19",
      categoria: "spa",
      producto: "Masaje relajante",
      cantidad: 1,
      precioUnitario: 500.0,
    },
  ]
  
  // Catálogo de habitaciones
  const habitaciones = {
    individual: ["101", "102", "103", "104"],
    doble: ["201", "202", "203", "204"],
    suite: ["301", "302", "303"],
    familiar: ["401", "402"],
  }
  
  // Precios de habitaciones por noche
  const preciosHabitaciones = {
    individual: 800.0,
    doble: 1200.0,
    suite: 2000.0,
    familiar: 2500.0,
  }
  
  // Variables globales
  let clienteSeleccionado = null
  let reservaSeleccionada = null
  
  // Mock function for renderChart (replace with actual implementation if available)
  function renderChart(chartId, type, data) {
    console.log(`Rendering chart ${chartId} of type ${type} with data:`, data)
    // In a real application, you would use a charting library like Chart.js to render the chart here.
  }
  
  // Inicialización
  document.addEventListener("DOMContentLoaded", () => {
    // Mostrar fecha actual
    const fechaActual = new Date()
    document.getElementById("current-date").textContent = fechaActual.toLocaleDateString()
  
    // Inicializar navegación
    initNavigation()
  
    // Inicializar selectores de habitaciones
    document.getElementById("checkin-habitacion-tipo").addEventListener("change", () => {
      actualizarNumerosHabitacion("checkin-habitacion-tipo", "checkin-habitacion-numero")
    })
  
    // Establecer fecha mínima como hoy
    const hoy = new Date().toISOString().split("T")[0]
    document.getElementById("checkin-fecha-entrada").min = hoy
    document.getElementById("checkin-fecha-salida").min = hoy
    document.getElementById("checkout-fecha-real").min = hoy
    document.getElementById("checkout-fecha-real").value = hoy
  
    // Inicializar tabs
    initTabs()
  
    // Cargar datos iniciales
    cargarDatosDashboard()
    cargarTablaClientes()
    cargarSelectoresClientes()
  })
  
  // Navegación
  function initNavigation() {
    const navItems = document.querySelectorAll(".nav-item")
  
    navItems.forEach((item) => {
      item.addEventListener("click", function () {
        // Si el item tiene un atributo onclick, no hacer nada (para modales)
        if (this.hasAttribute("onclick")) return
  
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
  
  // Inicializar tabs
  function initTabs() {
    const tabItems = document.querySelectorAll(".tab-item")
  
    tabItems.forEach((item) => {
      item.addEventListener("click", function () {
        // Remover clase active de todos los tabs
        tabItems.forEach((i) => i.classList.remove("active"))
  
        // Agregar clase active al tab seleccionado
        this.classList.add("active")
  
        // Obtener tab a mostrar
        const tabId = this.getAttribute("data-tab")
  
        // Ocultar todos los tab panes
        document.querySelectorAll(".tab-pane").forEach((pane) => {
          pane.classList.remove("active")
        })
  
        // Mostrar tab pane seleccionado
        document.getElementById("tab-" + tabId).classList.add("active")
      })
    })
  }
  
  // Dashboard
  function cargarDatosDashboard() {
    // Contar clientes por clasificación
    const countNuevos = clientes.filter((c) => c.clasificacion === "nuevo").length
    const countFrecuentes = clientes.filter((c) => c.clasificacion === "frecuente").length
    const countVip = clientes.filter((c) => c.clasificacion === "vip").length
  
    // Actualizar contadores
    document.getElementById("total-clientes").textContent = clientes.length
    document.getElementById("clientes-vip").textContent = countVip
    document.getElementById("count-nuevos").textContent = countNuevos
    document.getElementById("count-frecuentes").textContent = countFrecuentes
    document.getElementById("count-vip").textContent = countVip
  
    // Contar check-ins y check-outs de hoy
    const hoy = new Date().toISOString().split("T")[0]
    const checkinsHoy = reservas.filter((r) => r.fechaEntrada === hoy).length
    const checkoutsHoy = reservas.filter((r) => r.fechaSalida === hoy).length
  
    document.getElementById("checkins-hoy").textContent = checkinsHoy
    document.getElementById("checkouts-hoy").textContent = checkoutsHoy
  
    // Cargar clientes recientes
    cargarClientesRecientes()
  
    // Cargar gráfico de distribución
    cargarGraficoDistribucion()
  }
  
  function cargarClientesRecientes() {
    const tablaBody = document.getElementById("clientes-recientes-table")
    tablaBody.innerHTML = ""
  
    // Ordenar clientes por fecha de registro (más recientes primero)
    const clientesRecientes = [...clientes]
      .sort((a, b) => new Date(b.fechaRegistro) - new Date(a.fechaRegistro))
      .slice(0, 5)
  
    clientesRecientes.forEach((cliente) => {
      // Buscar reserva activa del cliente
      const reservaActiva = reservas.find((r) => r.clienteId === cliente.id && r.estado === "activa")
  
      const tr = document.createElement("tr")
      tr.innerHTML = `
              <td>${cliente.nombre}</td>
              <td>${cliente.documento}</td>
              <td>${reservaActiva ? reservaActiva.habitacion.numero : "-"}</td>
              <td>${reservaActiva ? reservaActiva.fechaEntrada : "-"}</td>
              <td>${reservaActiva ? reservaActiva.fechaSalida : "-"}</td>
              <td><span class="estado-badge estado-${cliente.estado}">${cliente.estado}</span></td>
              <td>
                  <button type="button" class="btn-secondary" onclick="verCliente(${cliente.id})">Ver</button>
              </td>
          `
  
      tablaBody.appendChild(tr)
    })
  }
  
  function cargarGraficoDistribucion() {
    // Contar clientes por clasificación
    const countNuevos = clientes.filter((c) => c.clasificacion === "nuevo").length
    const countFrecuentes = clientes.filter((c) => c.clasificacion === "frecuente").length
    const countVip = clientes.filter((c) => c.clasificacion === "vip").length
  
    // Datos para el gráfico
    const data = {
      labels: ["Nuevos", "Frecuentes", "VIP"],
      datasets: [
        {
          data: [countNuevos, countFrecuentes, countVip],
          backgroundColor: ["#1a237e", "#303f9f", "#7986cb"],
        },
      ],
    }
  
    // Renderizar gráfico (usando la librería de gráficos)
    if (typeof renderChart === "function") {
      renderChart("clientes-chart", "doughnut", data)
    } else {
      console.log("Función renderChart no disponible")
    }
  }
  
  // Funciones para tabla de clientes
  function cargarTablaClientes() {
    const tablaBody = document.getElementById("clientes-table")
    tablaBody.innerHTML = ""
  
    // Filtrar clientes según los filtros seleccionados
    const filtroEstado = document.getElementById("filtro-estado").value
    const filtroClasificacion = document.getElementById("filtro-clasificacion").value
  
    let clientesFiltrados = [...clientes]
  
    if (filtroEstado !== "todos") {
      clientesFiltrados = clientesFiltrados.filter((c) => c.estado === filtroEstado)
    }
  
    if (filtroClasificacion !== "todos") {
      clientesFiltrados = clientesFiltrados.filter((c) => c.clasificacion === filtroClasificacion)
    }
  
    // Ordenar por nombre
    clientesFiltrados.sort((a, b) => a.nombre.localeCompare(b.nombre))
  
    // Agregar filas a la tabla
    clientesFiltrados.forEach((cliente) => {
      const tr = document.createElement("tr")
      tr.innerHTML = `
              <td>${cliente.nombre}</td>
              <td>${cliente.documento}</td>
              <td>${cliente.email}</td>
              <td>${cliente.telefono}</td>
              <td><span class="cliente-badge badge-${cliente.clasificacion}">${cliente.clasificacion}</span></td>
              <td><span class="estado-badge estado-${cliente.estado}">${cliente.estado}</span></td>
              <td>
                  <button type="button" class="btn-secondary" onclick="verCliente(${cliente.id})">Ver</button>
                  <button type="button" class="btn-primary" onclick="editarCliente(${cliente.id})">Editar</button>
              </td>
          `
  
      tablaBody.appendChild(tr)
    })
  }
  
  // Función para buscar clientes
  function buscarClientes() {
    const busqueda = document.getElementById("buscar-cliente").value.toLowerCase()
  
    if (!busqueda) {
      cargarTablaClientes()
      return
    }
  
    const tablaBody = document.getElementById("clientes-table")
    tablaBody.innerHTML = ""
  
    // Filtrar clientes por nombre o documento
    const clientesEncontrados = clientes.filter(
      (c) => c.nombre.toLowerCase().includes(busqueda) || c.documento.toLowerCase().includes(busqueda),
    )
  
    // Agregar filas a la tabla
    clientesEncontrados.forEach((cliente) => {
      const tr = document.createElement("tr")
      tr.innerHTML = `
              <td>${cliente.nombre}</td>
              <td>${cliente.documento}</td>
              <td>${cliente.email}</td>
              <td>${cliente.telefono}</td>
              <td><span class="cliente-badge badge-${cliente.clasificacion}">${cliente.clasificacion}</span></td>
              <td><span class="estado-badge estado-${cliente.estado}">${cliente.estado}</span></td>
              <td>
                  <button type="button" class="btn-secondary" onclick="verCliente(${cliente.id})">Ver</button>
                  <button type="button" class="btn-primary" onclick="editarCliente(${cliente.id})">Editar</button>
              </td>
          `
  
      tablaBody.appendChild(tr)
    })
  }
  
  // Búsqueda avanzada
  function busquedaAvanzada() {
    const busqueda = document.getElementById("busqueda-avanzada").value.toLowerCase()
  
    if (!busqueda) {
      alert("Ingrese un término de búsqueda")
      return
    }
  
    const tablaBody = document.getElementById("resultados-table")
    tablaBody.innerHTML = ""
  
    // Filtrar clientes por nombre, documento, email o teléfono
    const clientesEncontrados = clientes.filter(
      (c) =>
        c.nombre.toLowerCase().includes(busqueda) ||
        c.documento.toLowerCase().includes(busqueda) ||
        c.email.toLowerCase().includes(busqueda) ||
        c.telefono.toLowerCase().includes(busqueda),
    )
  
    if (clientesEncontrados.length === 0) {
      tablaBody.innerHTML = `<tr><td colspan="7" class="text-center">No se encontraron resultados</td></tr>`
    } else {
      // Agregar filas a la tabla
      clientesEncontrados.forEach((cliente) => {
        const tr = document.createElement("tr")
        tr.innerHTML = `
                  <td>${cliente.nombre}</td>
                  <td>${cliente.documento}</td>
                  <td>${cliente.email}</td>
                  <td>${cliente.telefono}</td>
                  <td><span class="cliente-badge badge-${cliente.clasificacion}">${cliente.clasificacion}</span></td>
                  <td><span class="estado-badge estado-${cliente.estado}">${cliente.estado}</span></td>
                  <td>
                      <button type="button" class="btn-secondary" onclick="verCliente(${cliente.id})">Ver</button>
                      <button type="button" class="btn-primary" onclick="editarCliente(${cliente.id})">Editar</button>
                  </td>
              `
  
        tablaBody.appendChild(tr)
      })
    }
  
    // Mostrar resultados
    document.getElementById("resultados-busqueda").classList.remove("hidden")
  }
  
  // Cargar selectores de clientes
  function cargarSelectoresClientes() {
    const selectHistorial = document.getElementById("cliente-historial")
    const selectClasificacion = document.getElementById("cliente-clasificacion")
  
    // Limpiar opciones actuales
    selectHistorial.innerHTML = '<option value="">Seleccionar cliente...</option>'
    selectClasificacion.innerHTML = '<option value="">Seleccionar cliente...</option>'
  
    // Ordenar clientes por nombre
    const clientesOrdenados = [...clientes].sort((a, b) => a.nombre.localeCompare(b.nombre))
  
    // Agregar opciones a los selectores
    clientesOrdenados.forEach((cliente) => {
      const optionHistorial = document.createElement("option")
      optionHistorial.value = cliente.id
      optionHistorial.textContent = `${cliente.nombre} (${cliente.documento})`
      selectHistorial.appendChild(optionHistorial)
  
      const optionClasificacion = document.createElement("option")
      optionClasificacion.value = cliente.id
      optionClasificacion.textContent = `${cliente.nombre} (${cliente.documento})`
      selectClasificacion.appendChild(optionClasificacion)
    })
  
    // Agregar eventos de cambio
    selectHistorial.addEventListener("change", cargarHistorialCliente)
    selectClasificacion.addEventListener("change", cargarClasificacionCliente)
  }
  
  // Historial de cliente
  function cargarHistorialCliente() {
    const clienteId = Number.parseInt(document.getElementById("cliente-historial").value)
  
    if (!clienteId) {
      document.getElementById("historial-cliente").classList.add("hidden")
      return
    }
  
    // Buscar cliente
    const cliente = clientes.find((c) => c.id === clienteId)
  
    if (cliente) {
      // Mostrar información del cliente
      document.getElementById("historial-nombre").textContent = cliente.nombre
      document.getElementById("historial-documento").textContent =
        `${cliente.tipoDocumento.toUpperCase()}: ${cliente.documento}`
      document.getElementById("historial-email").textContent = cliente.email
      document.getElementById("historial-telefono").textContent = cliente.telefono
      document.getElementById("historial-clasificacion").textContent = cliente.clasificacion
      document.getElementById("historial-estado").textContent = cliente.estado
  
      // Cargar historial de reservas
      cargarHistorialReservas(clienteId)
  
      // Cargar historial de consumos
      cargarHistorialConsumos(clienteId)
  
      // Mostrar sección
      document.getElementById("historial-cliente").classList.remove("hidden")
    }
  }
  
  function cargarHistorialReservas(clienteId) {
    const tablaBody = document.getElementById("historial-reservas")
    tablaBody.innerHTML = ""
  
    // Filtrar reservas del cliente
    const reservasCliente = reservas.filter((r) => r.clienteId === clienteId)
  
    if (reservasCliente.length === 0) {
      tablaBody.innerHTML = `<tr><td colspan="6" class="text-center">No hay reservas registradas</td></tr>`
      return
    }
  
    // Ordenar reservas por fecha de entrada (más recientes primero)
    reservasCliente.sort((a, b) => new Date(b.fechaEntrada) - new Date(a.fechaEntrada))
  
    // Agregar filas a la tabla
    reservasCliente.forEach((reserva) => {
      const tr = document.createElement("tr")
      tr.innerHTML = `
              <td>${reserva.fechaEntrada}</td>
              <td>${reserva.fechaSalida}</td>
              <td>${reserva.habitacion.numero} (${reserva.habitacion.tipo})</td>
              <td>${reserva.huespedes}</td>
              <td>${reserva.estado}</td>
              <td>
                  <button type="button" class="btn-secondary" onclick="verDetalleReserva(${reserva.id})">Ver</button>
              </td>
          `
  
      tablaBody.appendChild(tr)
    })
  }
  
  function cargarHistorialConsumos(clienteId) {
    const tablaBody = document.getElementById("historial-consumos")
    tablaBody.innerHTML = ""
  
    // Obtener IDs de reservas del cliente
    const reservasIds = reservas.filter((r) => r.clienteId === clienteId).map((r) => r.id)
  
    // Filtrar consumos de las reservas del cliente
    const consumosCliente = consumos.filter((c) => reservasIds.includes(c.reservaId))
  
    if (consumosCliente.length === 0) {
      tablaBody.innerHTML = `<tr><td colspan="6" class="text-center">No hay consumos registrados</td></tr>`
      return
    }
  
    // Ordenar consumos por fecha (más recientes primero)
    consumosCliente.sort((a, b) => new Date(b.fecha) - new Date(a.fecha))
  
    // Agregar filas a la tabla
    consumosCliente.forEach((consumo) => {
      const subtotal = consumo.cantidad * consumo.precioUnitario
  
      const tr = document.createElement("tr")
      tr.innerHTML = `
              <td>${consumo.fecha}</td>
              <td>${consumo.categoria}</td>
              <td>${consumo.producto}</td>
              <td>${consumo.cantidad}</td>
              <td>${consumo.precioUnitario.toFixed(2)}</td>
              <td>${subtotal.toFixed(2)}</td>
          `
  
      tablaBody.appendChild(tr)
    })
  }
  
  // Clasificación de cliente
  function cargarClasificacionCliente() {
    const clienteId = Number.parseInt(document.getElementById("cliente-clasificacion").value)
  
    if (!clienteId) {
      document.getElementById("clasificacion-cliente").classList.add("hidden")
      return
    }
  
    // Buscar cliente
    const cliente = clientes.find((c) => c.id === clienteId)
  
    if (cliente) {
      // Mostrar información del cliente
      document.getElementById("clasificacion-nombre").textContent = cliente.nombre
      document.getElementById("clasificacion-documento").textContent =
        `${cliente.tipoDocumento.toUpperCase()}: ${cliente.documento}`
      document.getElementById("clasificacion-email").textContent = cliente.email
      document.getElementById("clasificacion-telefono").textContent = cliente.telefono
  
      // Establecer clasificación actual
      document.getElementById("tipo-clasificacion").value = cliente.clasificacion
  
      // Establecer notas
      document.getElementById("notas-alergias").value = cliente.notas.alergias || ""
      document.getElementById("notas-preferencias").value = cliente.notas.preferencias || ""
      document.getElementById("notas-adicionales").value = cliente.notas.adicionales || ""
  
      // Guardar referencia al cliente seleccionado
      clienteSeleccionado = cliente
  
      // Mostrar sección
      document.getElementById("clasificacion-cliente").classList.remove("hidden")
    }
  }
  
  function guardarClasificacion() {
    if (!clienteSeleccionado) {
      alert("No hay un cliente seleccionado")
      return
    }
  
    // Obtener nueva clasificación
    const nuevaClasificacion = document.getElementById("tipo-clasificacion").value
  
    // Actualizar clasificación del cliente
    const index = clientes.findIndex((c) => c.id === clienteSeleccionado.id)
    if (index >= 0) {
      clientes[index].clasificacion = nuevaClasificacion
  
      // Actualizar referencia
      clienteSeleccionado = clientes[index]
  
      // Mostrar mensaje de éxito
      alert("Clasificación actualizada correctamente")
  
      // Actualizar dashboard
      cargarDatosDashboard()
  
      // Actualizar tabla de clientes
      cargarTablaClientes()
    }
  }
  
  function guardarNotas() {
    if (!clienteSeleccionado) {
      alert("No hay un cliente seleccionado")
      return
    }
  
    // Obtener notas
    const alergias = document.getElementById("notas-alergias").value
    const preferencias = document.getElementById("notas-preferencias").value
    const adicionales = document.getElementById("notas-adicionales").value
  
    // Actualizar notas del cliente
    const index = clientes.findIndex((c) => c.id === clienteSeleccionado.id)
    if (index >= 0) {
      clientes[index].notas = {
        alergias,
        preferencias,
        adicionales,
      }
  
      // Actualizar referencia
      clienteSeleccionado = clientes[index]
  
      // Mostrar mensaje de éxito
      alert("Notas actualizadas correctamente")
    }
  }
  
  // Funciones para modales
  function openModal(modalId) {
    document.getElementById(modalId).style.display = "block"
  
    // Inicializaciones específicas para cada modal
    if (modalId === "check-in-modal") {
      // Establecer fecha mínima como hoy
      const hoy = new Date().toISOString().split("T")[0]
      document.getElementById("checkin-fecha-entrada").min = hoy
      document.getElementById("checkin-fecha-salida").min = hoy
      document.getElementById("checkin-fecha-entrada").value = hoy
    }
  }
  
  function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none"
  
    // Limpiar formularios al cerrar
    if (modalId === "nuevo-cliente-modal") {
      document.getElementById("nuevo-cliente-form").reset()
    } else if (modalId === "check-in-modal") {
      document.getElementById("checkin-buscar").value = ""
      document.getElementById("checkin-cliente-info").classList.add("hidden")
      document.getElementById("checkin-cliente-nuevo").classList.add("hidden")
      document.getElementById("checkin-form").reset()
    } else if (modalId === "check-out-modal") {
      document.getElementById("checkout-buscar").value = ""
      document.getElementById("checkout-cliente-info").classList.add("hidden")
    }
  }
  
  // Funciones para Nuevo Cliente
  function guardarCliente() {
    // Obtener datos del formulario
    const nombre = document.getElementById("cliente-nombre").value
    const tipoDocumento = document.getElementById("cliente-tipo-documento").value
    const documento = document.getElementById("cliente-documento").value
    const nacionalidad = document.getElementById("cliente-nacionalidad").value
    const email = document.getElementById("cliente-email").value
    const telefono = document.getElementById("cliente-telefono").value
    const direccion = document.getElementById("cliente-direccion").value
    const ciudad = document.getElementById("cliente-ciudad").value
    const pais = document.getElementById("cliente-pais").value
  
    // Validar datos
    if (!nombre || !tipoDocumento || !documento || !email || !telefono) {
      alert("Por favor complete todos los campos obligatorios")
      return
    }
  
    // Verificar si ya existe un cliente con el mismo documento
    const clienteExistente = clientes.find((c) => c.tipoDocumento === tipoDocumento && c.documento === documento)
  
    if (clienteExistente) {
      alert("Ya existe un cliente con ese documento")
      return
    }
  
    // Crear nuevo cliente
    const nuevoCliente = {
      id: clientes.length > 0 ? Math.max(...clientes.map((c) => c.id)) + 1 : 1,
      nombre,
      tipoDocumento,
      documento,
      nacionalidad,
      email,
      telefono,
      direccion,
      ciudad,
      pais,
      clasificacion: "nuevo",
      estado: "activo",
      notas: {
        alergias: "",
        preferencias: "",
        adicionales: "",
      },
      fechaRegistro: new Date().toISOString().split("T")[0],
    }
  
    // Guardar cliente
    clientes.push(nuevoCliente)
  
    // Mostrar mensaje de éxito
    alert("Cliente guardado correctamente")
  
    // Cerrar modal
    closeModal("nuevo-cliente-modal")
  
    // Actualizar dashboard
    cargarDatosDashboard()
  
    // Actualizar tabla de clientes
    cargarTablaClientes()
  
    // Actualizar selectores
    cargarSelectoresClientes()
  }
  
  // Funciones para Check-in
  function buscarClienteCheckin() {
    const busqueda = document.getElementById("checkin-buscar").value.toLowerCase()
  
    if (!busqueda) {
      alert("Ingrese un término de búsqueda")
      return
    }
  
    // Buscar cliente por nombre o documento
    const clienteEncontrado = clientes.find(
      (c) => c.nombre.toLowerCase().includes(busqueda) || c.documento.toLowerCase().includes(busqueda),
    )
  
    if (clienteEncontrado) {
      // Mostrar información del cliente
      document.getElementById("checkin-nombre").textContent = clienteEncontrado.nombre
      document.getElementById("checkin-documento").textContent =
        `${clienteEncontrado.tipoDocumento.toUpperCase()}: ${clienteEncontrado.documento}`
      document.getElementById("checkin-email").textContent = clienteEncontrado.email
      document.getElementById("checkin-telefono").textContent = clienteEncontrado.telefono
  
      // Guardar ID del cliente
      document.getElementById("checkin-cliente-id").value = clienteEncontrado.id
  
      // Mostrar formulario de check-in
      document.getElementById("checkin-cliente-info").classList.remove("hidden")
      document.getElementById("checkin-cliente-nuevo").classList.add("hidden")
  
      // Establecer fecha de entrada como hoy
      const hoy = new Date().toISOString().split("T")[0]
      document.getElementById("checkin-fecha-entrada").value = hoy
  
      // Calcular fecha de salida por defecto (día siguiente)
      const manana = new Date()
      manana.setDate(manana.getDate() + 1)
      document.getElementById("checkin-fecha-salida").value = manana.toISOString().split("T")[0]
    } else {
      // Mostrar opción para registrar nuevo cliente
      document.getElementById("checkin-cliente-info").classList.add("hidden")
      document.getElementById("checkin-cliente-nuevo").classList.remove("hidden")
    }
  }
  
  function actualizarNumerosHabitacion(selectorTipo, selectorNumero) {
    const tipoHabitacion = document.getElementById(selectorTipo).value
    const selectorHabitacion = document.getElementById(selectorNumero)
  
    // Limpiar opciones actuales
    selectorHabitacion.innerHTML = '<option value="">Seleccionar...</option>'
  
    if (tipoHabitacion) {
      // Obtener habitaciones disponibles (no reservadas)
      const habitacionesReservadas = reservas
        .filter((r) => r.habitacion.tipo === tipoHabitacion && r.estado === "activa")
        .map((r) => r.habitacion.numero)
  
      const habitacionesDisponibles = habitaciones[tipoHabitacion].filter((num) => !habitacionesReservadas.includes(num))
  
      // Agregar opciones al selector
      habitacionesDisponibles.forEach((num) => {
        const option = document.createElement("option")
        option.value = num
        option.textContent = num
        selectorHabitacion.appendChild(option)
      })
    }
  }
  
  function realizarCheckin() {
    // Obtener datos del formulario
    const clienteId = Number.parseInt(document.getElementById("checkin-cliente-id").value)
    const tipoHabitacion = document.getElementById("checkin-habitacion-tipo").value
    const numeroHabitacion = document.getElementById("checkin-habitacion-numero").value
    const fechaEntrada = document.getElementById("checkin-fecha-entrada").value
    const fechaSalida = document.getElementById("checkin-fecha-salida").value
    const huespedes = Number.parseInt(document.getElementById("checkin-huespedes").value)
    const metodoPago = document.getElementById("checkin-metodo-pago").value
    const observaciones = document.getElementById("checkin-observaciones").value
  
    // Servicios adicionales
    const servicios = []
    if (document.getElementById("checkin-servicio-desayuno").checked) servicios.push("desayuno")
    if (document.getElementById("checkin-servicio-parking").checked) servicios.push("parking")
    if (document.getElementById("checkin-servicio-wifi").checked) servicios.push("wifi")
  
    // Validar datos
    if (!clienteId || !tipoHabitacion || !numeroHabitacion || !fechaEntrada || !fechaSalida || !huespedes) {
      alert("Por favor complete todos los campos obligatorios")
      return
    }
  
    // Crear nueva reserva
    const nuevaReserva = {
      id: reservas.length > 0 ? Math.max(...reservas.map((r) => r.id)) + 1 : 1,
      clienteId,
      habitacion: {
        tipo: tipoHabitacion,
        numero: numeroHabitacion,
      },
      fechaEntrada,
      fechaSalida,
      huespedes,
      estado: "activa",
      observaciones,
      servicios,
      metodoPago,
      totalPagado: 0, // Se calculará al hacer check-out
    }
  
    // Guardar reserva
    reservas.push(nuevaReserva)
  
    // Actualizar estado del cliente
    const index = clientes.findIndex((c) => c.id === clienteId)
    if (index >= 0) {
      clientes[index].estado = "checkin"
    }
  
    // Mostrar mensaje de éxito
    alert("Check-in realizado correctamente")
  
    // Cerrar modal
    closeModal("check-in-modal")
  
    // Actualizar dashboard
    cargarDatosDashboard()
  
    // Actualizar tabla de clientes
    cargarTablaClientes()
  }
  
  // Funciones para Check-out
  function buscarClienteCheckout() {
    const busqueda = document.getElementById("checkout-buscar").value.toLowerCase()
  
    if (!busqueda) {
      alert("Ingrese un término de búsqueda")
      return
    }
  
    // Buscar cliente por nombre o documento
    const clienteEncontrado = clientes.find(
      (c) => c.nombre.toLowerCase().includes(busqueda) || c.documento.toLowerCase().includes(busqueda),
    )
  
    if (clienteEncontrado && clienteEncontrado.estado === "checkin") {
      // Buscar reserva activa del cliente
      const reservaActiva = reservas.find((r) => r.clienteId === clienteEncontrado.id && r.estado === "activa")
  
      if (reservaActiva) {
        // Mostrar información del cliente
        document.getElementById("checkout-nombre").textContent = clienteEncontrado.nombre
        document.getElementById("checkout-documento").textContent =
          `${clienteEncontrado.tipoDocumento.toUpperCase()}: ${clienteEncontrado.documento}`
        document.getElementById("checkout-habitacion").textContent =
          `${reservaActiva.habitacion.numero} (${reservaActiva.habitacion.tipo})`
        document.getElementById("checkout-fecha-entrada").textContent = reservaActiva.fechaEntrada
        document.getElementById("checkout-fecha-salida").textContent = reservaActiva.fechaSalida
  
        // Guardar referencia a la reserva seleccionada
        reservaSeleccionada = reservaActiva
  
        // Cargar consumos
        cargarConsumosCheckout(reservaActiva.id)
  
        // Calcular totales
        calcularTotalesCheckout(reservaActiva)
  
        // Mostrar información
        document.getElementById("checkout-cliente-info").classList.remove("hidden")
      } else {
        alert("El cliente no tiene una reserva activa")
      }
    } else {
      alert("No se encontró un cliente en check-in con ese criterio")
    }
  }
  
  function cargarConsumosCheckout(reservaId) {
    const tablaBody = document.getElementById("checkout-consumos")
    tablaBody.innerHTML = ""
  
    // Filtrar consumos de la reserva
    const consumosReserva = consumos.filter((c) => c.reservaId === reservaId)
  
    if (consumosReserva.length === 0) {
      tablaBody.innerHTML = `<tr><td colspan="6" class="text-center">No hay consumos registrados</td></tr>`
      return
    }
  
    // Agregar filas a la tabla
    consumosReserva.forEach((consumo) => {
      const subtotal = consumo.cantidad * consumo.precioUnitario
  
      const tr = document.createElement("tr")
      tr.innerHTML = `
              <td>${consumo.fecha}</td>
              <td>${consumo.categoria}</td>
              <td>${consumo.producto}</td>
              <td>${consumo.cantidad}</td>
              <td>${consumo.precioUnitario.toFixed(2)}</td>
              <td>${subtotal.toFixed(2)}</td>
          `
  
      tablaBody.appendChild(tr)
    })
  }
  
  function calcularTotalesCheckout(reserva) {
    // Calcular total de consumos
    const consumosReserva = consumos.filter((c) => c.reservaId === reserva.id)
    let totalConsumos = 0
  
    consumosReserva.forEach((consumo) => {
      totalConsumos += consumo.cantidad * consumo.precioUnitario
    })
  
    // Calcular total de hospedaje
    const fechaEntrada = new Date(reserva.fechaEntrada)
    const fechaSalida = new Date(reserva.fechaSalida)
    const noches = Math.ceil((fechaSalida - fechaEntrada) / (1000 * 60 * 60 * 24))
    const precioNoche = preciosHabitaciones[reserva.habitacion.tipo]
    const totalHospedaje = noches * precioNoche
  
    // Actualizar elementos
    document.getElementById("checkout-total-consumos").textContent = totalConsumos.toFixed(2)
    document.getElementById("checkout-total-hospedaje").textContent = totalHospedaje.toFixed(2)
    document.getElementById("checkout-total-pagar").textContent = (totalConsumos + totalHospedaje).toFixed(2)
  }
  
  function realizarCheckout() {
    if (!reservaSeleccionada) {
      alert("No hay una reserva seleccionada")
      return
    }
  
    // Obtener fecha de check-out real
    const fechaCheckout = document.getElementById("checkout-fecha-real").value
  
    if (!fechaCheckout) {
      alert("Por favor ingrese la fecha de check-out")
      return
    }
  
    // Calcular total a pagar
    const totalConsumos = Number.parseFloat(document.getElementById("checkout-total-consumos").textContent)
    const totalHospedaje = Number.parseFloat(document.getElementById("checkout-total-hospedaje").textContent)
    const totalPagar = totalConsumos + totalHospedaje
  
    // Actualizar reserva
    const index = reservas.findIndex((r) => r.id === reservaSeleccionada.id)
    if (index >= 0) {
      reservas[index].estado = "completada"
      reservas[index].fechaSalida = fechaCheckout
      reservas[index].totalPagado = totalPagar
    }
  
    // Actualizar estado del cliente
    const clienteIndex = clientes.findIndex((c) => c.id === reservaSeleccionada.clienteId)
    if (clienteIndex >= 0) {
      clientes[clienteIndex].estado = "activo"
  
      // Si el cliente tiene más de 3 reservas, actualizar a frecuente
      const reservasCliente = reservas.filter((r) => r.clienteId === reservaSeleccionada.clienteId)
      if (reservasCliente.length >= 3 && clientes[clienteIndex].clasificacion === "nuevo") {
        clientes[clienteIndex].clasificacion = "frecuente"
      }
    }
  
    // Mostrar mensaje de éxito
    alert("Check-out realizado correctamente. Total pagado: $" + totalPagar.toFixed(2))
  
    // Cerrar modal
    closeModal("check-out-modal")
  
    // Actualizar dashboard
    cargarDatosDashboard()
  
    // Actualizar tabla de clientes
    cargarTablaClientes()
  }
  
  // Ver cliente
  function verCliente(id) {
    // Buscar cliente
    const cliente = clientes.find((c) => c.id === id)
  
    if (cliente) {
      // Mostrar información del cliente
      document.getElementById("ver-nombre").textContent = cliente.nombre
      document.getElementById("ver-documento").textContent =
        `${cliente.tipoDocumento.toUpperCase()}: ${cliente.documento}`
      document.getElementById("ver-nacionalidad").textContent = cliente.nacionalidad || "-"
      document.getElementById("ver-email").textContent = cliente.email
      document.getElementById("ver-telefono").textContent = cliente.telefono
      document.getElementById("ver-direccion").textContent = cliente.direccion || "-"
      document.getElementById("ver-ciudad").textContent = cliente.ciudad || "-"
      document.getElementById("ver-pais").textContent = cliente.pais || "-"
      document.getElementById("ver-clasificacion").textContent = cliente.clasificacion
      document.getElementById("ver-estado").textContent = cliente.estado
      document.getElementById("ver-alergias").textContent = cliente.notas.alergias || "No registradas"
      document.getElementById("ver-preferencias").textContent = cliente.notas.preferencias || "No registradas"
      document.getElementById("ver-notas-adicionales").textContent = cliente.notas.adicionales || "No registradas"
  
      // Cargar reservas
      cargarReservasCliente(id)
  
      // Cargar consumos
      cargarConsumosCliente(id)
  
      // Cargar historial de visitas
      cargarHistorialVisitas(id)
  
      // Abrir modal
      openModal("ver-cliente-modal")
    }
  }
  
  function cargarReservasCliente(clienteId) {
    const tablaBody = document.getElementById("ver-reservas")
    tablaBody.innerHTML = ""
  
    // Filtrar reservas del cliente
    const reservasCliente = reservas.filter((r) => r.clienteId === clienteId)
  
    if (reservasCliente.length === 0) {
      tablaBody.innerHTML = `<tr><td colspan="5" class="text-center">No hay reservas registradas</td></tr>`
      return
    }
  
    // Ordenar reservas por fecha de entrada (más recientes primero)
    reservasCliente.sort((a, b) => new Date(b.fechaEntrada) - new Date(a.fechaEntrada))
  
    // Agregar filas a la tabla
    reservasCliente.forEach((reserva) => {
      const tr = document.createElement("tr")
      tr.innerHTML = `
              <td>${reserva.fechaEntrada}</td>
              <td>${reserva.fechaSalida}</td>
              <td>${reserva.habitacion.numero} (${reserva.habitacion.tipo})</td>
              <td>${reserva.huespedes}</td>
              <td>${reserva.estado}</td>
          `
  
      tablaBody.appendChild(tr)
    })
  }
  
  function cargarConsumosCliente(clienteId) {
    const tablaBody = document.getElementById("ver-consumos")
    tablaBody.innerHTML = ""
  
    // Obtener IDs de reservas del cliente
    const reservasIds = reservas.filter((r) => r.clienteId === clienteId).map((r) => r.id)
  
    // Filtrar consumos de las reservas del cliente
    const consumosCliente = consumos.filter((c) => reservasIds.includes(c.reservaId))
  
    if (consumosCliente.length === 0) {
      tablaBody.innerHTML = `<tr><td colspan="6" class="text-center">No hay consumos registrados</td></tr>`
      return
    }
  
    // Ordenar consumos por fecha (más recientes primero)
    consumosCliente.sort((a, b) => new Date(b.fecha) - new Date(a.fecha))
  
    // Agregar filas a la tabla
    consumosCliente.forEach((consumo) => {
      const subtotal = consumo.cantidad * consumo.precioUnitario
  
      const tr = document.createElement("tr")
      tr.innerHTML = `
              <td>${consumo.fecha}</td>
              <td>${consumo.categoria}</td>
              <td>${consumo.producto}</td>
              <td>${consumo.cantidad}</td>
              <td>${consumo.precioUnitario.toFixed(2)}</td>
              <td>${subtotal.toFixed(2)}</td>
          `
  
      tablaBody.appendChild(tr)
    })
  }
  
  function cargarHistorialVisitas(clienteId) {
    const tablaBody = document.getElementById("ver-historial")
    tablaBody.innerHTML = ""
  
    // Filtrar reservas completadas del cliente
    const reservasCompletadas = reservas.filter((r) => r.clienteId === clienteId && r.estado === "completada")
  
    if (reservasCompletadas.length === 0) {
      tablaBody.innerHTML = `<tr><td colspan="5" class="text-center">No hay visitas registradas</td></tr>`
      return
    }
  
    // Ordenar reservas por fecha de entrada (más recientes primero)
    reservasCompletadas.sort((a, b) => new Date(b.fechaEntrada) - new Date(a.fechaEntrada))
  
    // Agregar filas a la tabla
    reservasCompletadas.forEach((reserva) => {
      // Calcular noches y total pagado
      const fechaEntrada = new Date(reserva.fechaEntrada)
      const fechaSalida = new Date(reserva.fechaSalida)
      const noches = Math.ceil((fechaSalida - fechaEntrada) / (1000 * 60 * 60 * 24))
  
      const tr = document.createElement("tr")
      tr.innerHTML = `
              <td>${reserva.fechaEntrada}</td>
              <td>${reserva.fechaSalida}</td>
              <td>${reserva.habitacion.numero} (${reserva.habitacion.tipo})</td>
              <td>${noches}</td>
              <td>${reserva.totalPagado.toFixed(2)}</td>
          `
  
      tablaBody.appendChild(tr)
    })
  }
  
  // Editar cliente
  function editarCliente(id) {
    // Implementar edición de cliente
    alert(`Editar cliente ${id} - Funcionalidad en desarrollo`)
  }
  
  // Función para cerrar sesión
  function cerrarSesion() {
    if (confirm("¿Está seguro que desea cerrar sesión?")) {
      alert("Sesión cerrada correctamente")
      // En una implementación real, aquí se redireccionaría a la página de login
      // window.location.href = "login.html";
    }
  }
  
  // Función para ver detalle de reserva
  function verDetalleReserva(id) {
    // Implementar vista detallada de reserva
    alert(`Ver detalle de reserva ${id} - Funcionalidad en desarrollo`)
  }
  
  // Integración con otros módulos
  document.addEventListener("DOMContentLoaded", () => {
    // Agregar botones para ir a otros módulos
    const sidebarNav = document.querySelector(".sidebar-nav ul")
    if (sidebarNav) {
      const modulosItems = document.createElement("div")
      modulosItems.className = "nav-section"
      modulosItems.textContent = "Otros Módulos"
  
      const modulosUl = document.createElement("ul")
  
      // Módulo de Ventas
      const ventasItem = document.createElement("li")
      ventasItem.className = "nav-item"
      ventasItem.innerHTML = `
              <a href="index.html" style="display: flex; align-items: center; gap: 0.75rem; color: white; text-decoration: none;">
                  <span class="material-symbols-outlined">point_of_sale</span>
                  <span>Ventas</span>
              </a>
          `
      modulosUl.appendChild(ventasItem)
  
      // Módulo de Inventario
      const inventarioItem = document.createElement("li")
      inventarioItem.className = "nav-item"
      inventarioItem.innerHTML = `
              <a href="inventario.html" style="display: flex; align-items: center; gap: 0.75rem; color: white; text-decoration: none;">
                  <span class="material-symbols-outlined">inventory_2</span>
                  <span>Inventario</span>
              </a>
          `
      modulosUl.appendChild(inventarioItem)
  
      // Módulo de Contabilidad
      const contabilidadItem = document.createElement("li")
      contabilidadItem.className = "nav-item"
      contabilidadItem.innerHTML = `
              <a href="contabilidad.html" style="display: flex; align-items: center; gap: 0.75rem; color: white; text-decoration: none;">
                  <span class="material-symbols-outlined">account_balance</span>
                  <span>Contabilidad</span>
              </a>
          `
      modulosUl.appendChild(contabilidadItem)
  
      // Módulo de RRHH
      const rrhhItem = document.createElement("li")
      rrhhItem.className = "nav-item"
      rrhhItem.innerHTML = `
              <a href="rrhh.html" style="display: flex; align-items: center; gap: 0.75rem; color: white; text-decoration: none;">
                  <span class="material-symbols-outlined">groups</span>
                  <span>RRHH</span>
              </a>
          `
      modulosUl.appendChild(rrhhItem)
  
      sidebarNav.appendChild(modulosItems)
      sidebarNav.appendChild(modulosUl)
    }
  })
  