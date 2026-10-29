// DATOS PARA FILTRAR //

// Primer filtro// 

const dwregina = [

//proyectos //
{id: 1, name: "Gatitos machos", image: "img/perrosygatos1.jpg", genero:"perros-y-gatos", description: "Gatitos curiosos y juguetones que esperan encontrar una familia amorosa que les brinde cuidados, cariño y un hogar seguro para crecer felices."},
{id: 2, name: "Gatitas hembras", image: "img/perrosygatos2.jpg", genero:"perros-y-gatos", description: "Gatitas tiernas y cariñosas que buscan un hogar seguro y una familia que les dé mucho amor para toda la vida."},
{id: 3, name: "Perros machos", image: "img/perrosygatos3.jpg", genero:"perros-y-gatos", description: "Perritos amigables que buscan una familia que los cuide, los quiera y les dé una segunda oportunidad."},
{id: 4, name: "Perras hembras", image: "img/perrosygatos4.jpg", genero:"perros-y-gatos", description: "Perritas dulces que esperan encontrar un hogar donde las cuiden, las protejan y les den todo el amor que merecen."},

//unete//
{id: 1, name: "Pájaros", image: "img/otros1.jpg", genero:"otros", description: "Cariñosos y en busca de amor y cariño."},
{id: 2, name: "Hurones", image: "img/otros2.jpg", genero:"otros", description: "Cariñosos y en busca de amor y cariño."},
{id: 3, name: "Conejos", image: "img/otros3.jpg", genero:"otros", description: "Cariñosos y en busca de amor y cariño."},
{id: 4, name: "Cuyos", image: "img/otros4.jpg", genero:"otros", description: "Cariñosos y en busca de amor y cariño."},

];
// Obtener los contenedores y botones del DOM
const dwreginaContainer = document.getElementById("Animaless-container");
const filterButtons = document.querySelectorAll(".filter-btn");


// Función para renderizar las tarjetas 
function renderDw(genero) {
    let dwreginaToRender = [];
    if (genero === "all") {
        dwreginaToRender = dwregina;
    } else {
        dwreginaToRender = dwregina.filter(Dwregina => Dwregina.genero === genero);
    }
}