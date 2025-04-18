import { Chart } from "@/components/ui/chart"
document.addEventListener("DOMContentLoaded", () => {
  // Navegación entre secciones
  const navItems = document.querySelectorAll(".nav-item")
  const contentSections = document.querySelectorAll(".content-section")

  navItems.forEach((item) => {
    item.addEventListener("click", function () {
      const sectionId = this.getAttribute("data-section")

      if (!sectionId) return

      // Desactivar todos los items y secciones
      navItems.forEach((navItem) => navItem.classList.remove("active"))
      contentSections.forEach((section) => section.classList.remove("active"))

      // Activar el item y sección seleccionados
      this.classList.add("active")
      document.getElementById(sectionId).classList.add("active")
    })
  })

  // Navegación por tabs
  const tabButtons = document.querySelectorAll(".tab-btn")
  const tabContents = document.querySelectorAll(".tab-content")

  tabButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const tabId = this.getAttribute("data-tab")

      // Desactivar todos los tabs
      tabButtons.forEach((btn) => btn.classList.remove("active"))
      tabContents.forEach((content) => content.classList.remove("active"))

      // Activar el tab seleccionado
      this.classList.add("active")
      document.getElementById(tabId).classList.add("active")
    })
  })

  // Modal de detalles de cliente
  const clienteDetallesModal = document.getElementById("clienteDetallesModal")
  const closeButtons = document.querySelectorAll(".close")
  const detailButtons = document.querySelectorAll('.btn-icon[title="Ver detalles"]')

  detailButtons.forEach((button) => {
    button.addEventListener("click", () => {
      clienteDetallesModal.style.display = "block"
    })
  })

  closeButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const modal = this.closest(".modal")
      if (modal) {
        modal.style.display = "none"
      }
    })
  })

  window.addEventListener("click", (event) => {
    if (event.target.classList.contains("modal")) {
      event.target.style.display = "none"
    }
  })

  // Gráfico de distribución de clientes
  const ctx = document.getElementById("clientTypeChart").getContext("2d")

  new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: ["Nuevos", "Frecuentes", "VIP"],
      datasets: [
        {
          data: [45, 35, 20],
          backgroundColor: ["#4CAF50", "#2196F3", "#FFC107"],
          borderWidth: 0,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      cutout: "70%",
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          callbacks: {
            label: (context) => context.label + ": " + context.raw + "%",
          },
        },
      },
    },
  })

  // Formulario de registro de cliente
  const clienteForm = document.getElementById("clienteForm")
  if (clienteForm) {
    clienteForm.addEventListener("submit", function (event) {
      event.preventDefault()

      // Aquí iría la lógica para procesar el formulario
      // Por ahora, solo mostraremos un mensaje de éxito
      alert("Cliente registrado correctamente")

      // Resetear el formulario
      this.reset()
    })
  }

  // Selector de cliente para historial
  const clienteHistorial = document.getElementById("clienteHistorial")
  if (clienteHistorial) {
    clienteHistorial.addEventListener("change", () => {
      // Aquí iría la lógica para cargar el historial del cliente seleccionado
      // Por ahora, no hacemos nada ya que los datos están hardcodeados
    })
  }

  // Filtro de clasificación
  const filtroClasificacion = document.getElementById("filtroClasificacion")
  if (filtroClasificacion) {
    filtroClasificacion.addEventListener("change", () => {
      // Aquí iría la lógica para filtrar los clientes por clasificación
      // Por ahora, no hacemos nada ya que los datos están hardcodeados
    })
  }

  // Cambio de clasificación de cliente
  const classificationSelects = document.querySelectorAll(".classification-select")
  classificationSelects.forEach((select) => {
    select.addEventListener("change", function () {
      // Actualizar la clase del select según el valor seleccionado
      this.className = "classification-select " + this.value

      // Aquí iría la lógica para actualizar la clasificación en la base de datos
      // Por ahora, solo mostramos un mensaje
      alert("Clasificación actualizada correctamente")
    })
  })

  // Búsqueda de clientes
  const searchCliente = document.getElementById("searchCliente")
  if (searchCliente) {
    searchCliente.addEventListener("keyup", function (event) {
      if (event.key === "Enter") {
        // Aquí iría la lógica para buscar clientes
        // Por ahora, no hacemos nada ya que los datos están hardcodeados
        alert("Buscando: " + this.value)
      }
    })
  }

  // Inicialización: asegurarse de que la primera sección esté activa
  if (navItems.length > 0 && contentSections.length > 0) {
    navItems[0].classList.add("active")
    contentSections[0].classList.add("active")
  }

  // Función para cargar datos desde localStorage o API
  function cargarDatos() {
    // Aquí se implementaría la carga de datos reales
    // Por ahora, usamos datos de ejemplo hardcodeados
    console.log("Datos cargados")
  }

  // Inicializar datos
  cargarDatos()
})
