let htmlalquiler = "";
const propiedades_alquiler = [
  {
    Nombre: "Casa Finca",
    scr: "assets/img/7.png",
    descripcion:
      "Esta casa estilo finca, esta ubicada cerca de la ciudad. Para los amantes de la naturaleza",
    ubicacion: "123 Main Street, Anytown, CA 91234",
    habitaciones: "3 Habitaciones",
    baños: "2 Baños",
    costo: 450000,
    smoke: true,
    pets: true,
  },
  {
    Nombre: "Apartamento luminoso con vista al mar",
    scr: "assets/img/8.png",
    descripcion:
      "Este hermoso apartamento ofrece una vista impresionante al mar",
    ubicacion: "456 Ocean Avenue, Seaside Town, CA 56789",
    habitaciones: "2 habitaciones",
    baños: "2 baños",
    costo: 500000,
    smoke: false,
    pets: true,
  },
  {
    Nombre: "Condominio moderno en zona residencial",
    scr: "assets/img/9.png",
    descripcion:
      "Este elegante condominio moderno está ubicado en una tranquila zona residencial",
    ubicacion: "123 Main Street, Anytown, CA 91234",
    habitaciones: "2 habitaciones",
    baños: "2 baño",
    costo: 450000,
    smoke: true,
    pets: true,
  },
  {
    Nombre: "Penthouse de lujo con terraza panorámica",
    scr: "assets/img/10.png",
    descripcion:
      "Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares",
    ubicacion: "567 Skyline Avenue, Skyview City, CA 56789",
    habitaciones: "3 habitaciones",
    baños: "3 baños",
    costo: 500000,
    smoke: true,
    pets: true,
  },
  {
    Nombre: "Casa moderna de ambiente",
    scr: "assets/img/11.png",
    descripcion: "Esta Hermosa casa moderna ofrece espacios de recreación",
    ubicacion: "567 Skyline Avenue, Skyview City, CA 56789",
    habitaciones: "3 habitaciones",
    baños: "1 baños",
    costo: 450000,
    smoke: true,
    pets: false,
  },
  {
    Nombre: "casa Quincho",
    scr: "assets/img/12.png",
    descripcion: "Casa alojada a minutos de la ciudad.",
    ubicacion: "567 Skyline Avenue, Skyview City, CA 56789",
    habitaciones: "3 habitaciones",
    baños: "3 baños",
    costo: 480000,
    smoke: false,
    pets: true,
  },
];
let contadorA = 0;

for (let propiedad of propiedades_alquiler) {
  contadorA = contadorA + 1;
  htmlalquiler += `
    <div id="alquiler-card" >
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
        <p m-1>
          <i class="fas fa-bed m-1"></i>${propiedad.habitaciones} |
          <i class="fas fa-bath m-1"></i>${propiedad.baños}
        </p>
        <p>
          <i class="fas fa-dollar-sign m-1"></i>${propiedad.costo}
        </p>
        `;
  if (propiedad.smoke)
    htmlalquiler += `
              <p class="smokeTrue">
                <i class="fas fa-smoking m-1"></i> Permitido fumar
              </p>
              `;
  else
    htmlalquiler += `
              <p class="smokeFalse">
                <i class="fas fa-smoking-ban m-1"></i> No se permite fumar
              </p>
              `;

  if (propiedad.pets)
    htmlalquiler += `
              <p class="petsTrue">
                <i class="fa-solid fa-paw m-1"></i> Mascotas permitidas
              </p>
                `;
  else {
    htmlalquiler += `
              <p class="petsFalse">
                <i class="fa-solid fa-ban m-1"></i> No se permiten mascotas
              </p>
                `;
  }
  htmlalquiler += `
            </div>
          </div>
        `;
  let ele2 = document.querySelector("#propiedades_alquiler_index");
  if (ele2) {
    ele2.innerHTML = htmlalquiler;
    if (contadorA === 3) break;
  }
  //   console.log("contador ", contador);
  let ele = document.querySelector("#propiedades_alquiler");
  if (ele) ele.innerHTML = htmlalquiler;
}
