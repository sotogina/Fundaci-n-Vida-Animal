// DATOS PARA FILTRAR //

// Primer filtro// 

const dwregina = [

//proyectos //
{id: 1, name: "Gatitos machos", image: "img/perrosygatos1.jpg", genero:"perros-y-gatos", description: "Gatitos curiosos y juguetones que esperan encontrar una familia amorosa que les brinde cuidados, cariño y un hogar seguro para crecer felices."},
{id: 2, name: "Gatitas hembras", image: "img/perrosygatos2.jpg", genero:"perros-y-gatos", description: "Gatitas tiernas y cariñosas que buscan un hogar seguro y una familia que les dé mucho amor para toda la vida."},
{id: 3, name: "Perros machos", image: "img/perrosygatos3.jpg", genero:"perros-y-gatos", description: "Perritos amigables que buscan una familia que los cuide, los quiera y les dé una segunda oportunidad."},
{id: 4, name: "Perras hembras", image: "img/perrosygatos4.jpg", genero:"perros-y-gatos", description: "Perritas dulces que esperan encontrar un hogar donde las cuiden, las protejan y les den todo el amor que merecen."},

//unete//
{id: 1, name: "Pájaros", image: "img/otros1.jpg", genero:"otros", description: "Pajaritos que buscan un hogar donde puedan estar seguros, recibir buenos cuidados y vivir tranquilos."},
{id: 2, name: "Hurones", image: "img/otros2.jpg", genero:"otros", description: "Hurones curiosos y activos que necesitan un hogar donde puedan jugar, explorar y recibir la atención necesaria para mantenerse sanos y felices."},
{id: 3, name: "Conejos", image: "img/otros3.jpg", genero:"otros", description: "Conejitos tranquilos y adorables que buscan un espacio seguro donde puedan crecer, explorar y recibir los cuidados necesarios para vivir bien."},
{id: 4, name: "Cuyos", image: "img/otros4.jpg", genero:"otros", description: "Cuyos sociables y curiosos que buscan un hogar donde puedan estar cómodos, recibir los cuidados adecuados y convivir con una familia que los cuide."},

];
// Obtener los contenedores y botones del DOM
const dwreginaContainer = document.getElementById("Animaless-container");
const filterButtons = document.querySelectorAll(".filter-btn");


// Función para renderizar las tarjetas 
function renderDw(genero) {
    const categoriaSeleccionada = genero.toLowerCase();
    const dwreginaToRender = categoriaSeleccionada === "all"
        ? dwregina
        : dwregina.filter(animal => animal.genero.toLowerCase() === categoriaSeleccionada);

    if (!dwreginaContainer) return;

    if (dwreginaToRender.length === 0) {
        dwreginaContainer.innerHTML = '<p class="text-center w-100">No hay disponibles para esta categoría.</p>';
        return;
    }

    dwreginaContainer.innerHTML = dwreginaToRender.map(animal => `
        <figure class="Perros-card" data-gender="${animal.genero}">
            <img src="${animal.image}" alt="Animal en adopción: ${animal.name}">
            <figcaption>${animal.name}</figcaption>
            <div class="card-description">
                <p>${animal.description}</p>
            </div>
        </figure>
    `).join("");
}

// Agrega event listeners a los botones de filtro
filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        const genero = button.dataset.category;


        // Remueve la clase 'active' de todos los botones
        filterButtons.forEach(btn => btn.classList.remove("active"));
        // Agrega la clase 'active' al botón clickeado
        button.classList.add("active");
        
        // Renderiza las tarjetas con el filtro seleccionado
        renderDw(genero);
    });
});

// Renderizar todos para cargar la página
document.addEventListener("DOMContentLoaded", () => {
    renderDw('all');
});



// Función para el botón de volver al inicio
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}