const btnContacto = document.getElementById("btnContacto")
const modalContacto = document.getElementById("modalContacto")
const cerrarModal = document.getElementById("cerrarModal")
const aceptarModal = document.getElementById("aceptarModal")
const anio = document.getElementById("anio")
const fechaActual = new Date()

btnContacto.addEventListener('click', function (){
    modalContacto.classList.add("activo")
})

cerrarModal.addEventListener('click', function (){
    modalContacto.classList.remove("activo")
})

aceptarModal.addEventListener('click', function (){
    modalContacto.classList.remove("activo")    
})

modalContacto.addEventListener('click', function (a){{
    if (a.target === modalContacto) {
        modalContacto.classList.remove("activo")
    }    
}
})

document.addEventListener('keydown', function (a) {
    if (a.key === "Escape") {
        modalContacto.classList.remove("activo")
    }
})

anio.textContent = "C " + fechaActual.getFullYear() + " TechServices"
