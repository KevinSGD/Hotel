// Datos de ejemplo para clientes
let clientes = [
    {
      id: 1,
      nombre: "Juan Pérez",
      tipoDocumento: "dni",
      documento: "12345678",
      telefono: "+1234567890",
      email: "juan.perez@email.com",
      direccion: "Calle Principal 123",
      ciudad: "Ciudad Capital",
      pais: "España",
      estancias: [
        {
          id: 1,
          habitacion: "101",
          tipoHabitacion: "individual",
          checkin: "2023-11-01",
          checkout: "2023-11-05",
          adultos: 1,
          ninos: 0,
          tarifa: 100.00,
          estado: "checkout"
        },
        {
          id: 3,
          habitacion: "205",
          tipoHabitacion: "doble",
          checkin: "2023-11-15",
          checkout: "2023-11-20",
          adultos: 2,
          ninos: 0,
          tarifa: 150.00,
          estado: "activo"
        }
      ]
    },
    {
      id: 2,
      nombre: "María González",
      tipoDocumento: "pasaporte",
      documento: "AB123456",
      telefono: "+0987654321",
      email: "maria.gonzalez@email.com",
      direccion: "Avenida Central 456",
      ciudad: "Barcelona",
      pais: "España",
      estancias: [
        {
          id: 2,
          habitacion: "202",
          tipoHabitacion: "suite",
          checkin: "2023-11-10",
          checkout: "2023-11-15",
          adultos: 2,
          ninos: 1,
          tarifa: 200.00,
          estado: "checkout"
        }
      ]
    },
    {
      id: 3,
      nombre: "Carlos Rodríguez",
      tipoDocumento: "dni",
      documento: "87654321",
      telefono: "+1122334455",
      email: "carlos.rodriguez@email.com",
      direccion: "Plaza Mayor 789",
      ciudad: "Madrid",
      pais: "España",
      estancias: [
        {
          id: 4,
          habitacion: "301",
          tipoHabitacion: "suite",
          checkin: "2023-11-12",
          checkout: "2023-11-18",
          adultos: 2,
          ninos: 0,
          tarifa: 250.00,
          estado: "activo"
        }
      ]
    },
    {
      id: 4,
      nombre: "Ana Martínez",
      tipoDocumento: "pasaporte",
      documento: "CD789012",
      telefono: "+5544332211",
      email: "ana.martinez@email.com",
      direccion: "Calle Secundaria 321",
      ciudad: "Valencia",
      pais: "España",
      estancias: [
        {
          id: 5,
          habitacion: "102",
          tipoHabitacion: "individual",
          checkin: "2023-11-05",
          checkout: "2023-11-10",
          adultos: 1,
          ninos: 0,
          tarifa: 90.00,
          estado: "checkout"
        }
      ]
    },
    {
      id: 5,
      nombre: "Pedro Sánchez",
      tipoDocumento: "dni",
      documento: "23456789",
      telefono: "+6677889900",
      email: "pedro.sanchez@email.com",
      direccion: "Avenida Principal 654",
      ciudad: "Sevilla",
      pais: "España",
      estancias: [
        {
          id: 6,
          habitacion: "203",
          tipoHabitacion: "doble",
          checkin: "2023-11-08",
          checkout: "2023-11-12",
          adultos: 2,
          ninos: 1,
          tarifa: 150.00,
          estado: "checkout"
        }
      ]
    }
  ];
  
  // Datos de ejemplo para consumos
  let consumos = [
    {
      id: 1,
      clienteId: 1,
      estanciaId: 3,
      fecha: "2023-11-16",
      servicio: "restaurante",
      descripcion: "Cena en restaurante",
      cantidad: 2,
      precio: 35.00,
      total: 70.00,
      habitacion: "205"
    },
    {
      id: 2,
      clienteId: 1,
      estanciaId: 3,
      fecha: "2023-11-17",
      servicio: "minibar",
      descripcion: "Consumo minibar",
      cantidad: 1,
      precio: 15.00,
      total: 15.00,
      habitacion: "205"
    },
    {
      id: 3,
      clienteId: 3,
      estanciaId: 4,
      fecha: "2023-11-13",
      servicio: "spa",
      descripcion: "Masaje relajante",
      cantidad: 1,
      precio: 80.00,
      total: 80.00,
      habitacion: "301"
    },
    {
      id: 4,
      clienteId: 3,
      estanciaId: 4,
      fecha: "2023-11-14",
      servicio: "restaurante",
      descripcion: "Desayuno buffet",
      cantidad: 2,
      precio: 20.00,
      total: 40.00,
      habitacion: "301"
    },
    {
      id: 5,
      clienteId: 1,
      estanciaId: 1,
      fecha: "2023-11-03",
      servicio: "lavanderia",
      descripcion: "Servicio de lavandería",
      cantidad: 1,
      precio: 25.00,
      total: 25.00,
      habitacion: "101"
    }
  ];
  
  // Datos de ejemplo para habitaciones
  let habitaciones = [
    { numero: "101", tipo: "individual", capacidad: 1, precio: 100.00, estado: "disponible" },
    { numero: "102", tipo: "individual", capacidad: 1, precio: 90.00, estado: "disponible" },
    { numero: "103", tipo: "individual", capacidad: 1, precio: 95.00, estado: "disponible" },
    { numero: "201", tipo: "doble", capacidad: 2, precio: 150.00, estado: "disponible" },
    { numero: "202", tipo: "suite", capacidad: 2, precio: 200.00, estado: "disponible" },
    { numero: "203", tipo: "doble", capacidad: 2, precio: 150.00, estado: "disponible" },
    { numero: "204", tipo: "doble", capacidad: 2, precio: 160.00, estado: "disponible" },
    { numero: "205", tipo: "doble", capacidad: 2, precio: 150.00, estado: "ocupada" },
    { numero: "301", tipo: "suite", capacidad: 2, precio: 250.00, estado: "ocupada" },
    { numero: "302", tipo: "suite", capacidad: 3, precio: 300.00, estado: "disponible" }
  ];
  
  // Inicialización
  document.addEventListener("DOMContentLoaded", () => {
    // Mostrar fecha actual
    const fechaActual = new Date();
    document.getElementById("current-date").textContent = fechaActual.toLocaleDateString();
  
    // Establecer fecha actual en los campos de fecha
    document.getElementById("cliente-checkin").value = fechaActual.toISOString().split("T")[0];
    
    // Calcular fecha de checkout por defecto (5 días después)
    const fechaCheckout = new Date(fechaActual);
    fechaCheckout.setDate(fechaCheckout.getDate() + 5);
    document.getElementById("cliente-checkout").value = fechaCheckout.toISOString().split("T")[0];
    
    // Establecer fecha actual en el campo de fecha de consumo
    if (document.getElementById("consumo-fecha")) {
      document.getElementById("consumo-fecha").value = fechaActual.toISOString().split("T")[0];
    }
  
    // Inicializar navegación
    initNavigation();
  
    // Cargar datos iniciales
    cargarDashboardClientes();
    cargarTablaClientesRecientes();
    cargarHabitacionesDisponibles();
    
    // Inicializar gráfico de ocupación
    inicializarGraficoOcupacion();
  });
  
  // Navegación
  function initNavigation() {
    const navItems = document.querySelectorAll(".nav-item");
  
    navItems.forEach((item) => {
      item.addEventListener("click", function () {
        // Remover clase active de todos los items
        navItems.forEach((i) => i.classList.remove("active"));
  
        // Agregar clase active al item seleccionado
        this.classList.add("active");
  
        // Obtener sección a mostrar
        const sectionId = this.getAttribute("data-section");
  
        // Ocultar todas las secciones
        document.querySelectorAll(".content-section").forEach((section) => {
          section.classList.remove("active");
        });
  
        // Mostrar sección seleccionada
        document.getElementById(sectionId).classList.add("active");
      });
    });
  }
  
  // Dashboard de Clientes
  function cargarDashboardClientes() {
    // Calcular estadísticas
    const totalClientes = clientes.length;
    
    // Contar huéspedes actuales (clientes con estancias activas)
    const huespedesActuales = clientes.filter(cliente => 
      cliente.estancias.some(estancia => estancia.estado === "activo")
    ).length;
    
    // Calcular check-ins y check-outs del mes actual
    const fechaActual = new Date();
    const primerDiaMes = new Date(fechaActual.getFullYear(), fechaActual.getMonth(), 1);
    
    // Contar check-ins del mes
    let checkInsMes = 0;
    clientes.forEach(cliente => {
      cliente.estancias.forEach(estancia => {
        const fechaCheckin = new Date(estancia.checkin);
        if (fechaCheckin >= primerDiaMes && fechaCheckin <= fechaActual) {
          checkInsMes++;
        }
      });
    });
    
    // Contar check-outs del mes
    let checkOutsMes = 0;
    clientes.forEach(cliente => {
      cliente.estancias.forEach(estancia => {
        if (estancia.estado === "checkout") {
          const fechaCheckout = new Date(estancia.checkout);
          if (fechaCheckout >= primerDiaMes && fechaCheckout <= fechaActual) {
            checkOutsMes++;
          }
        }
      });
    });
  
    // Actualizar estadísticas en el dashboard
    document.getElementById("total-clientes").textContent = totalClientes;
    document.getElementById("huespedes-actuales").textContent = huespedesActuales;
    document.getElementById("total-checkins").textContent = checkInsMes;
    document.getElementById("total-checkouts").textContent = checkOutsMes;
  
    // Cargar consumos recientes
    cargarConsumosRecientes();
  }
  
  function cargarTablaClientesRecientes() {
    const tablaBody = document.querySelector("#tabla-clientes-recientes tbody");
    tablaBody.innerHTML = "";
  
    // Obtener todas las estancias y ordenarlas por fecha de check-in (más recientes primero)
    const estanciasRecientes = [];
    
    clientes.forEach(cliente => {
      cliente.estancias.forEach(estancia => {
        estanciasRecientes.push({
          ...estancia,
          clienteId: cliente.id,
          clienteNombre: cliente.nombre,
          clienteDocumento: cliente.documento
        });
      });
    });
    
    estanciasRecientes.sort((a, b) => new Date(b.checkin) - new Date(a.checkin));
    
    // Mostrar solo las 5 estancias más recientes
    const estanciasAMostrar = estanciasRecientes.slice(0, 5);
  
    estanciasAMostrar.forEach(estancia => {
      const tr = document.createElement("tr");
      
      // Determinar clase de estado
      let estadoTexto, claseEstado;
      if (estancia.estado === "activo") {
        estadoTexto = "Hospedado";
        claseEstado = "status-activo";
      } else {
        estadoTexto = "Check-out";
        claseEstado = "status-checkout";
      }
      
      tr.innerHTML = `
        <td>${estancia.clienteNombre}</td>
        <td>${estancia.clienteDocumento}</td>
        <td>${estancia.habitacion}</td>
        <td>${estancia.checkin}</td>
        <td>${estancia.checkout}</td>
        <td><span class="cliente-status ${claseEstado}">${estadoTexto}</span></td>
        <td>
          <button type="button" class="btn-secondary" onclick="verDetallesCliente(${estancia.clienteId})">
            <span class="material-symbols-outlined">visibility</span>
          </button>
        </td>
      `;
  
      tablaBody.appendChild(tr);
    });
  }
  
  function cargarConsumosRecientes() {
    const tablaBody = document.getElementById("recent-consumos-table");
    tablaBody.innerHTML = "";
  
    // Ordenar consumos por fecha (más recientes primero)
    const consumosRecientes = [...consumos].sort((a, b) => new Date(b.fecha) - new Date(a.fecha)).slice(0, 5);
  
    consumosRecientes.forEach(consumo => {
      const cliente = clientes.find(c => c.id === consumo.clienteId);
      if (!cliente) return;
  
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${consumo.fecha}</td>
        <td>${cliente.nombre}</td>
        <td>${consumo.habitacion}</td>
        <td>${consumo.servicio}</td>
        <td>${consumo.total.toFixed(2)}</td>
      `;
  
      tablaBody.appendChild(tr);
    });
  }
  
  function inicializarGraficoOcupacion() {
    const ctx = document.getElementById("ocupacion-chart").getContext("2d");
  
    // Contar habitaciones por tipo y estado
    const tiposHabitacion = {};
    const ocupadas = {};
    const disponibles = {};
    
    habitaciones.forEach(habitacion => {
      if (!tiposHabitacion[habitacion.tipo]) {
        tiposHabitacion[habitacion.tipo] = 0;
        ocupadas[habitacion.tipo] = 0;
        disponibles[habitacion.tipo] = 0;
      }
      
      tiposHabitacion[habitacion.tipo]++;
      
      if (habitacion.estado === "ocupada") {
        ocupadas[habitacion.tipo]++;
      } else {
        disponibles[habitacion.tipo]++;
      }
    });
  
    // Colores para los tipos de habitación
    const colores = {
      individual: "#4CAF50",
      doble: "#2196F3",
      suite: "#9C27B0"
    };
  
    // Preparar datos para el gráfico
    const labels = Object.keys(tiposHabitacion);
    const dataOcupadas = labels.map(tipo => ocupadas[tipo]);
    const dataDisponibles = labels.map(tipo => disponibles[tipo]);
    const backgroundColors = labels.map(tipo => colores[tipo] || "#999");
  
    // Crear gráfico
    new Chart(ctx, {
      type: "bar",
      data: {
        labels: labels,
        datasets: [
          {
            label: "Ocupadas",
            data: dataOcupadas,
            backgroundColor: backgroundColors.map(color => `${color}dd`),
            borderColor: backgroundColors,
            borderWidth: 1
          },
          {
            label: "Disponibles",
            data: dataDisponibles,
            backgroundColor: backgroundColors.map(color => `${color}33`),
            borderColor: backgroundColors,
            borderWidth: 1
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            stacked: true
          },
          y: {
            stacked: true,
            beginAtZero: true,
            ticks: {
              stepSize: 1
            }
          }
        }
      }
    });
  
    // Actualizar lista de tipos de habitación
    const ocupacionList = document.getElementById("ocupacion-summary");
    ocupacionList.innerHTML = "";
  
    labels.forEach((tipo, index) => {
      const div = document.createElement("div");
      div.className = "category-item";
      div.innerHTML = `
        <div class="category-color" style="background-color: ${backgroundColors[index]}"></div>
        <div class="category-name">${tipo}</div>
        <div class="category-count">${ocupadas[tipo]}/${tiposHabitacion[tipo]}</div>
      `;
  
      ocupacionList.appendChild(div);
    });
  }
  
  // Funciones para Registro de Cliente (Check-in)
  function cargarHabitacionesDisponibles() {
    const selectHabitacion = document.getElementById("cliente-habitacion");
    selectHabitacion.innerHTML = '<option value="">Seleccionar...</option>';
    
    // Filtrar habitaciones disponibles
    const habitacionesDisponibles = habitaciones.filter(h => h.estado === "disponible");
    
    habitacionesDisponibles.forEach(habitacion => {
      const option = document.createElement("option");
      option.value = habitacion.numero;
      option.textContent = `${habitacion.numero} - ${habitacion.tipo} (${habitacion.capacidad} pers.)`;
      option.dataset.tipo = habitacion.tipo;
      option.dataset.precio = habitacion.precio;
      selectHabitacion.appendChild(option);
    });
    
    // Evento para actualizar tipo de habitación y tarifa al seleccionar habitación
    selectHabitacion.addEventListener("change", function() {
      const tipoHabitacionSelect = document.getElementById("cliente-tipo-habitacion");
      const tarifaInput = document.getElementById("cliente-tarifa");
      
      if (this.value) {
        const selectedOption = this.options[this.selectedIndex];
        const tipo = selectedOption.dataset.tipo;
        const precio = selectedOption.dataset.precio;
        
        tipoHabitacionSelect.value = tipo;
        tarifaInput.value = precio;
      } else {
        tipoHabitacionSelect.value = "";
        tarifaInput.value = "";
      }
    });
  }
  
  function registrarCliente() {
    // Obtener datos del formulario
    const nombre = document.getElementById("cliente-nombre").value;
    const tipoDocumento = document.getElementById("cliente-tipo-documento").value;
    const documento = document.getElementById("cliente-documento").value;
    const telefono = document.getElementById("cliente-telefono").value;
    const email = document.getElementById("cliente-email").value;
    const direccion = document.getElementById("cliente-direccion").value;
    const ciudad = document.getElementById("cliente-ciudad").value;
    const pais = document.getElementById("cliente-pais").value;
    const checkin = document.getElementById("cliente-checkin").value;
    const checkout = document.getElementById("cliente-checkout").value;
    const habitacion = document.getElementById("cliente-habitacion").value;
    const tipoHabitacion = document.getElementById("cliente-tipo-habitacion").value;
    const adultos = Number.parseInt(document.getElementById("cliente-adultos").value);
    const ninos = Number.parseInt(document.getElementById("cliente-ninos").value);
    const tarifa = Number.parseFloat(document.getElementById("cliente-tarifa").value);
    const notas = document.getElementById("cliente-notas").value;
  
    // Validar datos
    if (!nombre || !tipoDocumento || !documento || !telefono || !pais || 
        !checkin || !checkout || !habitacion || isNaN(adultos) || isNaN(tarifa)) {
      alert("Por favor complete todos los campos obligatorios correctamente");
      return;
    }
  
    // Verificar si el cliente ya existe (por documento)
    let clienteExistente = clientes.find(c => c.documento === documento);
    let nuevoCliente = false;
    
    // Si no existe, crear nuevo cliente
    if (!clienteExistente) {
      clienteExistente = {
        id: clientes.length > 0 ? Math.max(...clientes.map(c => c.id)) + 1 : 1,
        nombre,
        tipoDocumento,
        documento,
        telefono,
        email,
        direccion,
        ciudad,
        pais,
        estancias: []
      };
      
      clientes.push(clienteExistente);
      nuevoCliente = true;
    }
    
    // Crear nueva estancia
    const nuevaEstancia = {
      id: getNextEstanciaId(),
      habitacion,
      tipoHabitacion,
      checkin,
      checkout,
      adultos,
      ninos,
      tarifa,
      estado: "activo",
      notas
    };
    
    // Agregar estancia al cliente
    clienteExistente.estancias.push(nuevaEstancia);
    
    // Actualizar estado de la habitación
    const habitacionIndex = habitaciones.findIndex(h => h.numero === habitacion);
    if (habitacionIndex >= 0) {
      habitaciones[habitacionIndex].estado = "ocupada";
    }
    
    // Guardar en localStorage
    guardarDatosEnLocalStorage();
    
    // Mostrar mensaje de éxito
    if (nuevoCliente) {
      alert(`Cliente ${nombre} registrado y check-in realizado correctamente en habitación ${habitacion}`);
    } else {
      alert(`Check-in realizado correctamente para ${nombre} en habitación ${habitacion}`);
    }
    
    // Limpiar formulario
    limpiarFormulario("cliente-form");
    
    // Actualizar dashboard y tablas
    cargarDashboardClientes();
    cargarTablaClientesRecientes();
    cargarHabitacionesDisponibles();
    inicializarGraficoOcupacion();
  }
  
  function getNextEstanciaId() {
    let maxId = 0;
    clientes.forEach(cliente => {
      cliente.estancias.forEach(estancia => {
        if (estancia.id > maxId) {
          maxId = estancia.id;
        }
      });
    });
    return maxId + 1;
  }
  
  function limpiarFormulario(formId) {
    document.getElementById(formId).reset();
    
    // Si es el formulario de cliente, restablecer fechas
    if (formId === "cliente-form") {
      const fechaActual = new Date();
      document.getElementById("cliente-checkin").value = fechaActual.toISOString().split("T")[0];
      
      const fechaCheckout = new Date(fechaActual);
      fechaCheckout.setDate(fechaCheckout.getDate() + 5);
      document.getElementById("cliente-checkout").value = fechaCheckout.toISOString().split("T")[0];
    }
    
    // Si es el formulario de consumo, restablecer fecha
    if (formId === "consumo-form") {
      const fechaActual = new Date();
      document.getElementById("consumo-fecha").value = fechaActual.toISOString().split("T")[0];
    }
  }
  
  // Funciones para Buscar Cliente
  function buscarClientes() {
    const busqueda = document.getElementById("buscar-cliente-texto").value.toLowerCase();
    const filtroEstado = document.getElementById("filtro-estado").value;
    
    if (!busqueda && filtroEstado === "todos") {
      // Si no hay búsqueda ni filtro, mostrar todos los clientes
      mostrarTodosClientes();
      return;
    }
    
    const tablaBody = document.querySelector("#tabla-clientes tbody");
    tablaBody.innerHTML = "";
    
    // Filtrar clientes que coincidan con la búsqueda
    clientes.forEach(cliente => {
      // Verificar si el cliente coincide con la búsqueda
      const coincideNombre = cliente.nombre.toLowerCase().includes(busqueda);
      const coincideDocumento = cliente.documento.toLowerCase().includes(busqueda);
      
      if ((busqueda === "" || coincideNombre || coincideDocumento)) {
        // Para cada cliente, mostrar sus estancias que coincidan con el filtro de estado
        cliente.estancias.forEach(estancia => {
          if (filtroEstado === "todos" || estancia.estado === filtroEstado) {
            const tr = document.createElement("tr");
            
            // Determinar clase de estado
            let estadoTexto, claseEstado;
            if (estancia.estado === "activo") {
              estadoTexto = "Hospedado";
              claseEstado = "status-activo";
            } else {
              estadoTexto = "Check-out";
              claseEstado = "status-checkout";
            }
            
            tr.innerHTML = `
              <td>${cliente.nombre}</td>
              <td>${cliente.documento}</td>
              <td>${estancia.habitacion}</td>
              <td>${estancia.checkin}</td>
              <td>${estancia.checkout}</td>
              <td><span class="cliente-status ${claseEstado}">${estadoTexto}</span></td>
              <td>
                <button type="button" class="btn-secondary" onclick="verDetallesCliente(${cliente.id}, ${estancia.id})">
                  <span class="material-symbols-outlined">visibility</span>
                </button>
              </td>
            `;
            
            tablaBody.appendChild(tr);
          }
        });
      }
    });
    
    // Si no hay resultados, mostrar mensaje
    if (tablaBody.innerHTML === "") {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td colspan="7" class="text-center">No se encontraron clientes que coincidan con la búsqueda</td>
      `;
      tablaBody.appendChild(tr);
    }
  }
  
  function filtrarClientes() {
    // Llamar a buscarClientes para aplicar filtros
    buscarClientes();
  }
  
  function mostrarTodosClientes() {
    const tablaBody = document.querySelector("#tabla-clientes tbody");
    tablaBody.innerHTML = "";
    
    // Obtener todas las estancias y ordenarlas por fecha de check-in (más recientes primero)
    const todasEstancias = [];
    
    clientes.forEach(cliente => {
      cliente.estancias.forEach(estancia => {
        todasEstancias.push({
          ...estancia,
          clienteId: cliente.id,
          clienteNombre: cliente.nombre,
          clienteDocumento: cliente.documento
        });
      });
    });
    
    todasEstancias.sort((a, b) => new Date(b.checkin) - new Date(a.checkin));
    
    todasEstancias.forEach(estancia => {
      const tr = document.createElement("tr");
      
      // Determinar clase de estado
      let estadoTexto, claseEstado;
      if (estancia.estado === "activo") {
        estadoTexto = "Hospedado";
        claseEstado = "status-activo";
      } else {
        estadoTexto = "Check-out";
        claseEstado = "status-checkout";
      }
      
      tr.innerHTML = `
        <td>${estancia.clienteNombre}</td>
        <td>${estancia.clienteDocumento}</td>
        <td>${estancia.habitacion}</td>
        <td>${estancia.checkin}</td>
        <td>${estancia.checkout}</td>
        <td><span class="cliente-status ${claseEstado}">${estadoTexto}</span></td>
        <td>
          <button type="button" class="btn-secondary" onclick="verDetallesCliente(${estancia.clienteId}, ${estancia.id})">
            <span class="material-symbols-outlined">visibility</span>
          </button>
        </td>
      `;
      
      tablaBody.appendChild(tr);
    });
  }
  
  // Funciones para Historial
  function buscarClienteHistorial() {
    const busqueda = document.getElementById("historial-cliente-buscar").value.toLowerCase();
    
    if (!busqueda) {
      alert("Ingrese un nombre o documento para buscar");
      return;
    }
    
    // Buscar cliente por nombre o documento
    const clienteEncontrado = clientes.find(
      cliente => cliente.nombre.toLowerCase().includes(busqueda) || 
                 cliente.documento.toLowerCase().includes(busqueda)
    );
    
    if (clienteEncontrado) {
      // Mostrar información del cliente
      document.getElementById("info-cliente-nombre").textContent = clienteEncontrado.nombre;
      document.getElementById("info-cliente-documento").textContent = 
        `${clienteEncontrado.tipoDocumento.toUpperCase()}: ${clienteEncontrado.documento}`;
      document.getElementById("info-cliente-telefono").textContent = clienteEncontrado.telefono;
      document.getElementById("info-cliente-email").textContent = clienteEncontrado.email || "No disponible";
      
      // Mostrar historial de reservas
      const tablaReservas = document.querySelector("#tabla-historial-reservas tbody");
      tablaReservas.innerHTML = "";
      
      if (clienteEncontrado.estancias.length === 0) {
        const tr = document.createElement("tr");
        tr.innerHTML = `
          <td colspan="7" class="text-center">No hay reservas registradas para este cliente</td>
        `;
        tablaReservas.appendChild(tr);
      } else {
        // Ordenar estancias por fecha de check-in (más recientes primero)
        const estanciasOrdenadas = [...clienteEncontrado.estancias].sort(
          (a, b) => new Date(b.checkin) - new Date(a.checkin)
        );
        
        estanciasOrdenadas.forEach(estancia => {
          const tr = document.createElement("tr");
          
          // Calcular total de estancia
          const fechaCheckin = new Date(estancia.checkin);
          const fechaCheckout = new Date(estancia.checkout);
          const diasEstancia = Math.ceil((fechaCheckout - fechaCheckin) / (1000 * 60 * 60 * 24));
          const totalEstancia = diasEstancia * estancia.tarifa;
          
          // Determinar clase de estado
          let estadoTexto, claseEstado;
          if (estancia.estado === "activo") {
            estadoTexto = "Hospedado";
            claseEstado = "status-activo";
          } else {
            estadoTexto = "Check-out";
            claseEstado = "status-checkout";
          }
          
          tr.innerHTML = `
            <td>${estancia.checkin}</td>
            <td>${estancia.checkout}</td>
            <td>${estancia.habitacion}</td>
            <td>${estancia.tipoHabitacion}</td>
            <td>${estancia.tarifa.toFixed(2)}</td>
            <td>${totalEstancia.toFixed(2)}</td>
            <td><span class="cliente-status ${claseEstado}">${estadoTexto}</span></td>
          `;
          
          tablaReservas.appendChild(tr);
        });
      }
      
      // Mostrar historial de consumos
      const tablaConsumos = document.querySelector("#tabla-historial-consumos tbody");
      tablaConsumos.innerHTML = "";
      
      // Filtrar consumos del cliente
      const consumosCliente = consumos.filter(consumo => consumo.clienteId === clienteEncontrado.id);
      
      if (consumosCliente.length === 0) {
        const tr = document.createElement("tr");
        tr.innerHTML = `
          <td colspan="7" class="text-center">No hay consumos registrados para este cliente</td>
        `;
        tablaConsumos.appendChild(tr);
      } else {
        // Ordenar consumos por fecha (más recientes primero)
        const consumosOrdenados = [...consumosCliente].sort(
          (a, b) => new Date(b.fecha) - new Date(a.fecha)
        );
        
        consumosOrdenados.forEach(consumo => {
          const tr = document.createElement("tr");
          tr.innerHTML = `
            <td>${consumo.fecha}</td>
            <td>${consumo.servicio}</td>
            <td>${consumo.descripcion}</td>
            <td>${consumo.cantidad}</td>
            <td>${consumo.precio.toFixed(2)}</td>
            <td>${consumo.total.toFixed(2)}</td>
            <td>${consumo.habitacion}</td>
          `;
          
          tablaConsumos.appendChild(tr);
        });
      }
      
      // Mostrar sección de información del cliente
      document.getElementById("cliente-info").classList.remove("hidden");
    } else {
      alert("No se encontró ningún cliente con ese criterio");
    }
  }
  
  // Funciones para modales
  function verDetallesCliente(clienteId, estanciaId) {
    // Buscar cliente por ID
    const cliente = clientes.find(c => c.id === clienteId);
    
    if (cliente) {
      // Si se especificó una estancia, buscarla
      let estancia;
      if (estanciaId) {
        estancia = cliente.estancias.find(e => e.id === estanciaId);
      } else {
        // Si no se especificó, buscar la estancia activa o la más reciente
        estancia = cliente.estancias.find(e => e.estado === "activo") || 
                  cliente.estancias[cliente.estancias.length - 1];
      }
      
      if (estancia) {
        // Llenar modal con datos del cliente
        document.getElementById("modal-cliente-nombre").textContent = cliente.nombre;
        document.getElementById("modal-cliente-documento").textContent = 
          `${cliente.tipoDocumento.toUpperCase()}: ${cliente.documento}`;
        document.getElementById("modal-cliente-telefono").textContent = cliente.telefono;
        document.getElementById("modal-cliente-email").textContent = cliente.email || "No disponible";
        document.getElementById("modal-cliente-direccion").textContent = cliente.direccion || "No disponible";
        document.getElementById("modal-cliente-ciudad").textContent = cliente.ciudad || "No disponible";
        document.getElementById("modal-cliente-pais").textContent = cliente.pais;
        
        // Llenar datos de la estancia
        document.getElementById("modal-cliente-habitacion").textContent = estancia.habitacion;
        document.getElementById("modal-cliente-tipo-habitacion").textContent = estancia.tipoHabitacion;
        document.getElementById("modal-cliente-checkin").textContent = estancia.checkin;
        document.getElementById("modal-cliente-checkout").textContent = estancia.checkout;
        document.getElementById("modal-cliente-adultos").textContent = estancia.adultos;
        document.getElementById("modal-cliente-ninos").textContent = estancia.ninos;
        document.getElementById("modal-cliente-tarifa").textContent = `${estancia.tarifa.toFixed(2)} / noche`;
        
        // Determinar estado
        let estadoTexto;
        if (estancia.estado === "activo") {
          estadoTexto = "Hospedado";
          // Mostrar botones de consumo y checkout solo para estancias activas
          document.getElementById("btn-registrar-consumo").style.display = "flex";
          document.getElementById("btn-checkout").style.display = "flex";
        } else {
          estadoTexto = "Check-out";
          // Ocultar botones para estancias con checkout
          document.getElementById("btn-registrar-consumo").style.display = "none";
          document.getElementById("btn-checkout").style.display = "none";
        }
        document.getElementById("modal-cliente-estado").textContent = estadoTexto;
        
        // Guardar IDs para uso en otras funciones
        document.getElementById("btn-registrar-consumo").setAttribute("data-cliente-id", cliente.id);
        document.getElementById("btn-registrar-consumo").setAttribute("data-estancia-id", estancia.id);
        document.getElementById("btn-checkout").setAttribute("data-cliente-id", cliente.id);
        document.getElementById("btn-checkout").setAttribute("data-estancia-id", estancia.id);
        
        // Abrir modal
        document.getElementById("ver-cliente-modal").style.display = "block";
      }
    }
  }
  
  function abrirRegistroConsumo() {
    // Obtener IDs del cliente y estancia
    const clienteId = Number.parseInt(document.getElementById("btn-registrar-consumo").getAttribute("data-cliente-id"));
    const estanciaId = Number.parseInt(document.getElementById("btn-registrar-consumo").getAttribute("data-estancia-id"));
    
    // Buscar cliente y estancia
    const cliente = clientes.find(c => c.id === clienteId);
    const estancia = cliente?.estancias.find(e => e.id === estanciaId);
    
    if (cliente && estancia) {
      // Establecer valores en el formulario de consumo
      document.getElementById("consumo-cliente-id").value = clienteId;
      
      // Establecer fecha actual
      const fechaActual = new Date();
      document.getElementById("consumo-fecha").value = fechaActual.toISOString().split("T")[0];
      
      // Cerrar modal de cliente
      cerrarModal("ver-cliente-modal");
      
      // Abrir modal de consumo
      document.getElementById("registrar-consumo-modal").style.display = "block";
    }
  }
  
  function guardarConsumo() {
    // Obtener datos del formulario
    const clienteId = Number.parseInt(document.getElementById("consumo-cliente-id").value);
    const servicio = document.getElementById("consumo-servicio").value;
    const descripcion = document.getElementById("consumo-descripcion").value;
    const cantidad = Number.parseInt(document.getElementById("consumo-cantidad").value);
    const precio = Number.parseFloat(document.getElementById("consumo-precio").value);
    const fecha = document.getElementById("consumo-fecha").value;
    const notas = document.getElementById("consumo-notas").value;
    
    // Validar datos
    if (!servicio || !descripcion || isNaN(cantidad) || cantidad <= 0 || isNaN(precio) || precio <= 0 || !fecha) {
      alert("Por favor complete todos los campos obligatorios correctamente");
      return;
    }
    
    // Buscar cliente y estancia activa
    const cliente = clientes.find(c => c.id === clienteId);
    const estancia = cliente?.estancias.find(e => e.estado === "activo");
    
    if (cliente && estancia) {
      // Calcular total
      const total = cantidad * precio;
      
      // Crear nuevo consumo
      const nuevoConsumo = {
        id: consumos.length > 0 ? Math.max(...consumos.map(c => c.id)) + 1 : 1,
        clienteId,
        estanciaId: estancia.id,
        fecha,
        servicio,
        descripcion,
        cantidad,
        precio,
        total,
        habitacion: estancia.habitacion,
        notas
      };
      
      // Guardar consumo
      consumos.push(nuevoConsumo);
      
      // Guardar en localStorage
      guardarDatosEnLocalStorage();
      
      // Mostrar mensaje de éxito
      alert("Consumo registrado correctamente");
      
      // Cerrar modal
      cerrarModal("registrar-consumo-modal");
      
      // Actualizar dashboard y tablas
      cargarDashboardClientes();
      cargarConsumosRecientes();
    }
  }
  
  function realizarCheckout() {
    // Obtener IDs del cliente y estancia
    const clienteId = Number.parseInt(document.getElementById("btn-checkout").getAttribute("data-cliente-id"));
    const estanciaId = Number.parseInt(document.getElementById("btn-checkout").getAttribute("data-estancia-id"));
    
    // Buscar cliente y estancia
    const cliente = clientes.find(c => c.id === clienteId);
    const estancia = cliente?.estancias.find(e => e.id === estanciaId);
    
    if (cliente && estancia) {
      // Llenar información del cliente en el modal de checkout
      document.getElementById("checkout-cliente-nombre").textContent = cliente.nombre;
      document.getElementById("checkout-cliente-habitacion").textContent = estancia.habitacion;
      document.getElementById("checkout-cliente-checkin").textContent = estancia.checkin;
      document.getElementById("checkout-cliente-checkout").textContent = estancia.checkout;
      
      // Calcular resumen de estancia
      const tablaResumen = document.querySelector("#tabla-checkout-resumen tbody");
      tablaResumen.innerHTML = "";
      
      // Calcular días de estancia
      const fechaCheckin = new Date(estancia.checkin);
      const fechaCheckout = new Date(estancia.checkout);
      const diasEstancia = Math.ceil((fechaCheckout - fechaCheckin) / (1000 * 60 * 60 * 24));
      const totalHospedaje = diasEstancia * estancia.tarifa;
      
      // Agregar fila de hospedaje
      const trHospedaje = document.createElement("tr");
      trHospedaje.innerHTML = `
        <td>Hospedaje</td>
        <td>${estancia.tipoHabitacion} (Hab. ${estancia.habitacion})</td>
        <td>${diasEstancia} noches</td>
        <td>${estancia.tarifa.toFixed(2)}</td>
        <td>${totalHospedaje.toFixed(2)}</td>
      `;
      tablaResumen.appendChild(trHospedaje);
      
      // Filtrar consumos de la estancia
      const consumosEstancia = consumos.filter(c => c.estanciaId === estancia.id);
      let totalConsumos = 0;
      
      // Agregar filas de consumos
      consumosEstancia.forEach(consumo => {
        const trConsumo = document.createElement("tr");
        trConsumo.innerHTML = `
          <td>Consumo</td>
          <td>${consumo.servicio}: ${consumo.descripcion}</td>
          <td>${consumo.cantidad}</td>
          <td>${consumo.precio.toFixed(2)}</td>
          <td>${consumo.total.toFixed(2)}</td>
        `;
        tablaResumen.appendChild(trConsumo);
        
        totalConsumos += consumo.total;
      });
      
      // Calcular total a pagar
      const totalPagar = totalHospedaje + totalConsumos;
      document.getElementById("checkout-total").textContent = totalPagar.toFixed(2);
      
      // Cerrar modal de cliente
      cerrarModal("ver-cliente-modal");
      
      // Abrir modal de checkout
      document.getElementById("checkout-modal").style.display = "block";
    }
  }
  
  function confirmarCheckout() {
    // Obtener IDs del cliente y estancia
    const clienteId = Number.parseInt(document.getElementById("btn-checkout").getAttribute("data-cliente-id"));
    const estanciaId = Number.parseInt(document.getElementById("btn-checkout").getAttribute("data-estancia-id"));
    
    // Obtener método de pago
    const metodoPago = document.getElementById("checkout-metodo-pago").value;
    
    if (!metodoPago) {
      alert("Por favor seleccione un método de pago");
      return;
    }
    
    // Buscar cliente y estancia
    const cliente = clientes.find(c => c.id === clienteId);
    const estanciaIndex = cliente?.estancias.findIndex(e => e.id === estanciaId);
    
    if (cliente && estanciaIndex >= 0) {
      // Actualizar estado de la estancia
      cliente.estancias[estanciaIndex].estado = "checkout";
      
      // Actualizar estado de la habitación
      const habitacionNum = cliente.estancias[estanciaIndex].habitacion;
      const habitacionIndex = habitaciones.findIndex(h => h.numero === habitacionNum);
      
      if (habitacionIndex >= 0) {
        habitaciones[habitacionIndex].estado = "disponible";
      }
      
      // Guardar en localStorage
      guardarDatosEnLocalStorage();
      
      // Mostrar mensaje de éxito
      alert("Check-out realizado correctamente");
      
      // Cerrar modal
      cerrarModal("checkout-modal");
      
      // Actualizar dashboard y tablas
      cargarDashboardClientes();
      cargarTablaClientesRecientes();
      cargarHabitacionesDisponibles();
      inicializarGraficoOcupacion();
    }
  }
  
  function cerrarModal(modalId) {
    document.getElementById(modalId).style.display = "none";
  }
  
  // Funciones para Reportes
  function generarReporteClientes() {
    // Mostrar sección de reporte
    document.getElementById("reporte-generado").classList.remove("hidden");
    document.getElementById("reporte-titulo").textContent = "Reporte de Clientes";
    
    // Generar contenido del reporte
    const contenidoReporte = document.getElementById("reporte-contenido");
    
    // Calcular estadísticas generales
    const totalClientes = clientes.length;
    const clientesActivos = clientes.filter(cliente => 
      cliente.estancias.some(estancia => estancia.estado === "activo")
    ).length;
    
    // Crear HTML del reporte
    let html = `
      <div class="report-header">
        <div class="report-meta">
          <p><strong>Fecha:</strong> ${new Date().toLocaleDateString()}</p>
          <p><strong>Generado por:</strong> Admin</p>
        </div>
        <div class="report-summary">
          <div class="summary-stats">
            <div class="stat-item">
              <span class="stat-label">Total Clientes:</span>
              <span class="stat-value">${totalClientes}</span>
            </div>
            <div class="stat-item">
              <span class="stat-label">Clientes Hospedados:</span>
              <span class="stat-value">${clientesActivos}</span>
            </div>
          </div>
        </div>
      </div>
      
      <h4>Listado de Clientes</h4>
      <div class="table-container">
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Documento</th>
              <th>Teléfono</th>
              <th>Email</th>
              <th>País</th>
              <th>Estancias</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
    `;
    
    // Ordenar clientes por nombre
    const clientesOrdenados = [...clientes].sort((a, b) => a.nombre.localeCompare(b.nombre));
    
    // Agregar filas de clientes
    clientesOrdenados.forEach(cliente => {
      // Determinar estado del cliente
      const tieneEstanciaActiva = cliente.estancias.some(e => e.estado === "activo");
      const estadoCliente = tieneEstanciaActiva ? "Hospedado" : "Check-out";
      const claseEstado = tieneEstanciaActiva ? "status-activo" : "status-checkout";
      
      html += `
        <tr>
          <td>${cliente.nombre}</td>
          <td>${cliente.tipoDocumento.toUpperCase()}: ${cliente.documento}</td>
          <td>${cliente.telefono}</td>
          <td>${cliente.email || "No disponible"}</td>
          <td>${cliente.pais}</td>
          <td>${cliente.estancias.length}</td>
          <td><span class="cliente-status ${claseEstado}">${estadoCliente}</span></td>
        </tr>
      `;
    });
    
    html += `
          </tbody>
        </table>
      </div>
    `;
    
    contenidoReporte.innerHTML = html;
  }
  
  function generarReporteOcupacion() {
    // Mostrar sección de reporte
    document.getElementById("reporte-generado").classList.remove("hidden");
    document.getElementById("reporte-titulo").textContent = "Reporte de Ocupación Actual";
    
    // Generar contenido del reporte
    const contenidoReporte = document.getElementById("reporte-contenido");
    
    // Calcular estadísticas de ocupación
    const totalHabitaciones = habitaciones.length;
    const habitacionesOcupadas = habitaciones.filter(h => h.estado === "ocupada").length;
    const porcentajeOcupacion = (habitacionesOcupadas / totalHabitaciones) * 100;
    
    // Contar por tipo
    const tiposHabitacion = {};
    const ocupadasPorTipo = {};
    
    habitaciones.forEach(habitacion => {
      if (!tiposHabitacion[habitacion.tipo]) {
        tiposHabitacion[habitacion.tipo] = 0;
        ocupadasPorTipo[habitacion.tipo] = 0;
      }
      
      tiposHabitacion[habitacion.tipo]++;
      
      if (habitacion.estado === "ocupada") {
        ocupadasPorTipo[habitacion.tipo]++;
      }
    });
    
    // Crear HTML del reporte
    let html = `
      <div class="report-header">
        <div class="report-meta">
          <p><strong>Fecha:</strong> ${new Date().toLocaleDateString()}</p>
          <p><strong>Generado por:</strong> Admin</p>
        </div>
        <div class="report-summary">
          <div class="summary-stats">
            <div class="stat-item">
              <span class="stat-label">Total Habitaciones:</span>
              <span class="stat-value">${totalHabitaciones}</span>
            </div>
            <div class="stat-item">
              <span class="stat-label">Habitaciones Ocupadas:</span>
              <span class="stat-value">${habitacionesOcupadas}</span>
            </div>
            <div class="stat-item">
              <span class="stat-label">Porcentaje de Ocupación:</span>
              <span class="stat-value">${porcentajeOcupacion.toFixed(2)}%</span>
            </div>
          </div>
        </div>
      </div>
      
      <h4>Ocupación por Tipo de Habitación</h4>
      <div class="table-container">
        <table>
          <thead>
            <tr>
              <th>Tipo de Habitación</th>
              <th>Total</th>
              <th>Ocupadas</th>
              <th>Disponibles</th>
              <th>Porcentaje Ocupación</th>
            </tr>
          </thead>
          <tbody>
    `;
    
    // Agregar filas por tipo de habitación
    Object.keys(tiposHabitacion).forEach(tipo => {
      const total = tiposHabitacion[tipo];
      const ocupadas = ocupadasPorTipo[tipo];
      const disponibles = total - ocupadas;
      const porcentaje = (ocupadas / total) * 100;
      
      html += `
        <tr>
          <td>${tipo}</td>
          <td>${total}</td>
          <td>${ocupadas}</td>
          <td>${disponibles}</td>
          <td>${porcentaje.toFixed(2)}%</td>
        </tr>
      `;
    });
    
    html += `
          </tbody>
        </table>
      </div>
      
      <h4>Detalle de Habitaciones</h4>
      <div class="table-container">
        <table>
          <thead>
            <tr>
              <th>Número</th>
              <th>Tipo</th>
              <th>Capacidad</th>
              <th>Precio</th>
              <th>Estado</th>
              <th>Cliente</th>
            </tr>
          </thead>
          <tbody>
    `;
    
    // Ordenar habitaciones por número
    const habitacionesOrdenadas = [...habitaciones].sort((a, b) => a.numero.localeCompare(b.numero));
    
    // Agregar filas de habitaciones
    habitacionesOrdenadas.forEach(habitacion => {
      // Buscar cliente hospedado en esta habitación
      let clienteHospedado = "N/A";
      
      if (habitacion.estado === "ocupada") {
        // Buscar la estancia activa en esta habitación
        for (const cliente of clientes) {
          const estanciaActiva = cliente.estancias.find(
            e => e.estado === "activo" && e.habitacion === habitacion.numero
          );
          
          if (estanciaActiva) {
            clienteHospedado = cliente.nombre;
            break;
          }
        }
      }
      
      // Determinar clase de estado
      const claseEstado = habitacion.estado === "ocupada" ? "status-activo" : "status-checkout";
      const estadoTexto = habitacion.estado === "ocupada" ? "Ocupada" : "Disponible";
      
      html += `
        <tr>
          <td>${habitacion.numero}</td>
          <td>${habitacion.tipo}</td>
          <td>${habitacion.capacidad} personas</td>
          <td>${habitacion.precio.toFixed(2)}</td>
          <td><span class="cliente-status ${claseEstado}">${estadoTexto}</span></td>
          <td>${clienteHospedado}</td>
        </tr>
      `;
    });
    
    html += `
          </tbody>
        </table>
      </div>
    `;
    
    contenidoReporte.innerHTML = html;
  }
  
  function generarReporteConsumos() {
    // Mostrar sección de reporte
    document.getElementById("reporte-generado").classList.remove("hidden");
    document.getElementById("reporte-titulo").textContent = "Reporte de Consumos por Cliente";
    
    // Generar contenido del reporte
    const contenidoReporte = document.getElementById("reporte-contenido");
    
    // Calcular estadísticas de consumos
    const totalConsumos = consumos.length;
    const totalImporte = consumos.reduce((total, consumo) => total + consumo.total, 0);
    
    // Agrupar consumos por servicio
    const consumosPorServicio = {};
    consumos.forEach(consumo => {
      if (!consumosPorServicio[consumo.servicio]) {
        consumosPorServicio[consumo.servicio] = 0;
      }
      consumosPorServicio[consumo.servicio] += consumo.total;
    });
    
    // Crear HTML del reporte
    let html = `
      <div class="report-header">
        <div class="report-meta">
          <p><strong>Fecha:</strong> ${new Date().toLocaleDateString()}</p>
          <p><strong>Generado por:</strong> Admin</p>
        </div>
        <div class="report-summary">
          <div class="summary-stats">
            <div class="stat-item">
              <span class="stat-label">Total Consumos:</span>
              <span class="stat-value">${totalConsumos}</span>
            </div>
            <div class="stat-item">
              <span class="stat-label">Importe Total:</span>
              <span class="stat-value">${totalImporte.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
      
      <h4>Consumos por Servicio</h4>
      <div class="table-container">
        <table>
          <thead>
            <tr>
              <th>Servicio</th>
              <th>Importe Total</th>
              <th>Porcentaje</th>
            </tr>
          </thead>
          <tbody>
    `;
    
    // Agregar filas por servicio
    Object.entries(consumosPorServicio).forEach(([servicio, importe]) => {
      const porcentaje = (importe / totalImporte) * 100;
      
      html += `
        <tr>
          <td>${servicio}</td>
          <td>${importe.toFixed(2)}</td>
          <td>${porcentaje.toFixed(2)}%</td>
        </tr>
      `;
    });
    
    html += `
          </tbody>
        </table>
      </div>
      
      <h4>Detalle de Consumos por Cliente</h4>
    `;
    
    // Agrupar consumos por cliente
    const consumosPorCliente = {};
    
    consumos.forEach(consumo => {
      if (!consumosPorCliente[consumo.clienteId]) {
        consumosPorCliente[consumo.clienteId] = [];
      }
      consumosPorCliente[consumo.clienteId].push(consumo);
    });
    
    // Para cada cliente con consumos
    Object.entries(consumosPorCliente).forEach(([clienteId, consumosCliente]) => {
      const cliente = clientes.find(c => c.id === Number(clienteId));
      if (!cliente) return;
      
      const totalClienteImporte = consumosCliente.reduce((total, consumo) => total + consumo.total, 0);
      
      html += `
        <div class="info-card">
          <h4>${cliente.nombre} - ${cliente.tipoDocumento.toUpperCase()}: ${cliente.documento}</h4>
          <p>Total consumos: ${consumosCliente.length} - Importe total: ${totalClienteImporte.toFixed(2)}</p>
          
          <div class="table-container">
            <table>
              <thead>
                <tr>
                  <th>Fecha</th>
                  <th>Servicio</th>
                  <th>Descripción</th>
                  <th>Cantidad</th>
                  <th>Precio Unit.</th>
                  <th>Total</th>
                  <th>Habitación</th>
                </tr>
              </thead>
              <tbody>
      `;
      
      // Ordenar consumos por fecha (más recientes primero)
      const consumosOrdenados = [...consumosCliente].sort((a, b) => new Date(b.fecha) - new Date(a.fecha));
      
      // Agregar filas de consumos
      consumosOrdenados.forEach(consumo => {
        html += `
          <tr>
            <td>${consumo.fecha}</td>
            <td>${consumo.servicio}</td>
            <td>${consumo.descripcion}</td>
            <td>${consumo.cantidad}</td>
            <td>${consumo.precio.toFixed(2)}</td>
            <td>${consumo.total.toFixed(2)}</td>
            <td>${consumo.habitacion}</td>
          </tr>
        `;
      });
      
      html += `
              </tbody>
            </table>
          </div>
        </div>
      `;
    });
    
    contenidoReporte.innerHTML = html;
  }
  
  function generarReporteEstadisticas() {
    // Mostrar sección de reporte
    document.getElementById("reporte-generado").classList.remove("hidden");
    document.getElementById("reporte-titulo").textContent = "Estadísticas de Clientes";
    
    // Generar contenido del reporte
    const contenidoReporte = document.getElementById("reporte-contenido");
    
    // Calcular estadísticas
    const totalClientes = clientes.length;
    const totalEstancias = clientes.reduce((total, cliente) => total + cliente.estancias.length, 0);
    const estanciasActivas = clientes.reduce((total, cliente) => 
      total + cliente.estancias.filter(e => e.estado === "activo").length, 0
    );
    
    // Calcular promedio de estancias por cliente
    const promedioEstancias = totalClientes > 0 ? totalEstancias / totalClientes : 0;
    
    // Calcular duración promedio de estancias
    let totalDias = 0;
    let contadorEstancias = 0;
    
    clientes.forEach(cliente => {
      cliente.estancias.forEach(estancia => {
        const fechaCheckin = new Date(estancia.checkin);
        const fechaCheckout = new Date(estancia.checkout);
        const diasEstancia = Math.ceil((fechaCheckout - fechaCheckin) / (1000 * 60 * 60 * 24));
        
        totalDias += diasEstancia;
        contadorEstancias++;
      });
    });
    
    const promedioDuracion = contadorEstancias > 0 ? totalDias / contadorEstancias : 0;
    
    // Calcular consumo promedio por cliente
    const consumosPorCliente = {};
    consumos.forEach(consumo => {
      if (!consumosPorCliente[consumo.clienteId]) {
        consumosPorCliente[consumo.clienteId] = 0;
      }
      consumosPorCliente[consumo.clienteId] += consumo.total;
    });
    
    const clientesConConsumos = Object.keys(consumosPorCliente).length;
    const totalConsumos = Object.values(consumosPorCliente).reduce((total, importe) => total + importe, 0);
    const promedioConsumo = clientesConConsumos > 0 ? totalConsumos / clientesConConsumos : 0;
    
    // Crear HTML del reporte
    let html = `
      <div class="report-header">
        <div class="report-meta">
          <p><strong>Fecha:</strong> ${new Date().toLocaleDateString()}</p>
          <p><strong>Generado por:</strong> Admin</p>
        </div>
      </div>
      
      <div class="dashboard-stats">
        <div class="stat-card">
          <div class="stat-icon">
            <span class="material-symbols-outlined">group</span>
          </div>
          <div class="stat-info">
            <h3>Total Clientes</h3>
            <p class="stat-value">${totalClientes}</p>
            <p class="stat-label">Registrados</p>
          </div>
        </div>
        
        <div class="stat-card">
          <div class="stat-icon">
            <span class="material-symbols-outlined">hotel</span>
          </div>
          <div class="stat-info">
            <h3>Estancias</h3>
            <p class="stat-value">${totalEstancias}</p>
            <p class="stat-label">${estanciasActivas} activas</p>
          </div>
        </div>
        
        <div class="stat-card">
          <div class="stat-icon">
            <span class="material-symbols-outlined">calendar_month</span>
          </div>
          <div class="stat-info">
            <h3>Duración Promedio</h3>
            <p class="stat-value">${promedioDuracion.toFixed(1)}</p>
            <p class="stat-label">Días por estancia</p>
          </div>
        </div>
        
        <div class="stat-card">
          <div class="stat-icon">
            <span class="material-symbols-outlined">payments</span>
          </div>
          <div class="stat-info">
            <h3>Consumo Promedio</h3>
            <p class="stat-value">${promedioConsumo.toFixed(2)}</p>
            <p class="stat-label">Por cliente</p>
          </div>
        </div>
      </div>
      
      <h4>Clientes con Mayor Consumo</h4>
      <div class="table-container">
        <table>
          <thead>
            <tr>
              <th>Cliente</th>
              <th>Documento</th>
              <th>Total Consumos</th>
              <th>Importe Total</th>
              <th>Estancias</th>
            </tr>
          </thead>
          <tbody>
    `;
    
    // Ordenar clientes por consumo total (mayor a menor)
    const clientesConsumo = Object.entries(consumosPorCliente)
      .map(([clienteId, totalConsumo]) => {
        const cliente = clientes.find(c => c.id === Number(clienteId));
        return {
          id: Number(clienteId),
          nombre: cliente?.nombre || "Cliente desconocido",
          documento: cliente ? `${cliente.tipoDocumento.toUpperCase()}: ${cliente.documento}` : "N/A",
          estancias: cliente?.estancias.length || 0,
          totalConsumo
        };
      })
      .sort((a, b) => b.totalConsumo - a.totalConsumo)
      .slice(0, 5); // Top 5 clientes
    
    // Agregar filas de clientes
    clientesConsumo.forEach(cliente => {
      // Contar número de consumos
      const numConsumos = consumos.filter(c => c.clienteId === cliente.id).length;
      
      html += `
        <tr>
          <td>${cliente.nombre}</td>
          <td>${cliente.documento}</td>
          <td>${numConsumos}</td>
          <td>${cliente.totalConsumo.toFixed(2)}</td>
          <td>${cliente.estancias}</td>
        </tr>
      `;
    });
    
    html += `
          </tbody>
        </table>
      </div>
    `;
    
    contenidoReporte.innerHTML = html;
  }
  
  function imprimirReporte() {
    window.print();
  }
  
  // Funciones para ver todos los clientes y consumos
  function verTodosClientes() {
    // Cambiar a la sección de buscar cliente
    document.querySelectorAll(".nav-item").forEach((item) => {
      item.classList.remove("active");
    });
  
    document.querySelectorAll(".content-section").forEach((section) => {
      section.classList.remove("active");
    });
  
    // Activar sección de buscar cliente
    document.querySelector('[data-section="buscar-cliente"]').classList.add("active");
    document.getElementById("buscar-cliente").classList.add("active");
  
    // Mostrar todos los clientes
    mostrarTodosClientes();
  }
  
  function verTodosConsumos() {
    // Cambiar a la sección de reportes
    document.querySelectorAll(".nav-item").forEach((item) => {
      item.classList.remove("active");
    });
  
    document.querySelectorAll(".content-section").forEach((section) => {
      section.classList.remove("active");
    });
  
    // Activar sección de reportes
    document.querySelector('[data-section="reportes"]').classList.add("active");
    document.getElementById("reportes").classList.add("active");
  
    // Generar reporte de consumos
    generarReporteConsumos();
  }
  
  // Función para cerrar sesión
  function cerrarSesion() {
    if (confirm("¿Está seguro que desea cerrar sesión?")) {
      alert("Sesión cerrada correctamente");
      // En una implementación real, aquí se redireccionaría a la página de login
      // window.location.href = "login.html";
    }
  }
  
  // Función para cambiar de módulo
  function cambiarModulo() {
    if (confirm("¿Desea cambiar al módulo de Inventario?")) {
      // En una implementación real, aquí se redireccionaría al módulo de inventario
      window.location.href = "inventario.html";
    }
  }
  
  // Funciones para compartir datos entre módulos usando localStorage
  function guardarDatosEnLocalStorage() {
    localStorage.setItem("clientes_data", JSON.stringify(clientes));
    localStorage.setItem("consumos_data", JSON.stringify(consumos));
    localStorage.setItem("habitaciones_data", JSON.stringify(habitaciones));
  }
  
  function cargarDatosDeLocalStorage() {
    const clientesGuardados = localStorage.getItem("clientes_data");
    const consumosGuardados = localStorage.getItem("consumos_data");
    const habitacionesGuardadas = localStorage.getItem("habitaciones_data");
  
    if (clientesGuardados) {
      clientes = JSON.parse(clientesGuardados);
    }
  
    if (consumosGuardados) {
      consumos = JSON.parse(consumosGuardados);
    }
    
    if (habitacionesGuardadas) {
      habitaciones = JSON.parse(habitacionesGuardadas);
    }
  }
  
  // Inicializar datos al cargar la página
  window.addEventListener("load", () => {
    cargarDatosDeLocalStorage();
    guardarDatosEnLocalStorage(); // Guardar datos iniciales si no existen
  });
  
  <Actions>
    <Action name="Implementar autenticación de usuarios" description="Agregar sistema de login para diferentes roles de usuario" />
    <Action name="Añadir sistema de reservas" description="Implementar funcionalidad para gestionar reservas futuras" />
    <Action name="Integrar pasarela de pago" description="Conectar con sistema de pagos para procesar transacciones" />
    <Action name="Añadir notificaciones" description="Implementar sistema de alertas y notificaciones para el personal" />
    <Action name="Generar facturas en PDF" description="Añadir funcionalidad para generar y descargar facturas en PDF" />
  </Actions>
  