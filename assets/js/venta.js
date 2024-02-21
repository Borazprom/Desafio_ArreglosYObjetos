let htmlVenta = "";
const propiedades_venta = [
  {
    Nombre: "Casa Amareto",
    scr: "assets/imgs/1.png",
    descripcion:
      "Esta hermosa Casa de lujo está ubicada en un lugar residencial",
    ubicacion: "Alto de mar #389 Con Con",
    habitaciones: "4 habitaciones",
    baños: "3 baños",
    costo: 120000000,
    smoke: true,
    pets: true,
  },
  {
    Nombre: "Casa Blanca Medi",
    scr: "assets/imgs/2.png",
    descripcion:
      "Esta hermosa casa de lujo está ubicado en una exclusiva zona residencial",
    ubicacion: "123 Luxury Lane, Prestige Suburb, CA 45678",
    habitaciones: "4 habitaciones",
    baños: "4 baños",
    costo: 180000000,
    smoke: true,
    pets: true,
  },
  {
    Nombre: "Casa patrimonial",
    scr: "assets/imgs/3.png",
    descripcion:
      "Esta Preciosa casa patrimonial esta reservada para los amantes de la cultura",
    ubicacion: "789 Mountain Road, Summit Peaks, CA 23456",
    habitaciones: "4 habitaciones",
    baños: "2 baño",
    costo: 80000000,
    smoke: false,
    pets: false,
  },
  {
    Nombre: "Casa Lote Premium",
    scr: "assets/imgs/4.png",
    descripcion: "Esta casa de Dos pisos esta ubucada en una zona residencial",
    ubicacion: "567 Skyline Avenue, Skyview City, CA 56789",
    habitaciones: "3 habitaciones",
    baños: "3 baños",
    costo: 200000000,
    smoke: false,
    pets: true,
  },
  {
    Nombre: "Casa Ping Young",
    scr: "assets/imgs/5.png",
    descripcion:
      "Esta Hermosa casa media rustica, esta ubicada a minutos de la ciudad",
    ubicacion: "289 Av Errazuriz, Curauma, Valparaiso",
    habitaciones: "3 habitaciones",
    baños: "1 baños",
    costo: 190000000,
    smoke: true,
    pets: true,
  },
  {
    Nombre: "Apartamento moderno",
    scr: "assets/imgs/6.png",
    descripcion: "Este apartamento moderno esta ubicado en una zona exclusiva",
    ubicacion: "Alto las Condes 1027, Las Condes, Santiago",
    habitaciones: "3 habitaciones",
    baños: "3 baños",
    costo: 120000000,
    smoke: false,
    pets: false,
  },
];
let contador = 0;
for (let propiedad of propiedades_venta) {
  contador = contador + 1;
  console.log(propiedad);
  htmlVenta += `
          <div id="venta-card">
            <img
              src="${propiedad.scr}"
              class="card-img-top"
              alt="Imagen de la propiedad"
            />
            <div class="card-body">
              <h5 class="card-title mt-2">${propiedad.Nombre}</h5>
              <p class="card-text mt-3">${propiedad.descripcion}</p>
              <p>
                <i class="fas fa-map-marker-alt m-1"></i>${propiedad.ubicacion}
              </p>
              <p>
                <i class="fas fa-bed m-1"></i>${propiedad.habitaciones} |
                <i class="fas fa-bath m-1"></i>${propiedad.baños}
              </p>
              <p>
                <i class="fas fa-dollar-sign m-1"></i>${propiedad.costo}
              </p>
`;
  if (propiedad.smoke)
    htmlVenta += `
              <p class="smokeTrue">
                <i class="fas fa-smoking m-1"></i> Permitido fumar
              </p>
              `;
  else
    htmlVenta += `
              <p class="smokeFalse">
                <i class="fas fa-smoking-ban m-1"></i> No se permite fumar
              </p>
              `;

  if (propiedad.pets)
    htmlVenta += `
              <p class="petsTrue">
                <i class="fa-solid fa-paw m-1"></i> Mascotas permitidas
              </p>
                `;
  else {
    htmlVenta += `
              <p class="petsFalse">
                <i class="fa-solid fa-ban m-1"></i> No se permiten mascotas
              </p>
                `;
  }
  htmlVenta += `
            </div>
          </div>
        `;

  let ele2 = document.querySelector("#propiedades_venta_index");
  if (ele2) {
    ele2.innerHTML = htmlVenta;
    if (contador === 3) break;
  }
  console.log("contador ", contador);
  let ele = document.querySelector("#propiedades_venta");
  if (ele) {
    ele.innerHTML = htmlVenta;
  }
}
