let imagenes = [
  "./img/M720TRIATHLON.webp",
  "./img/POPMOUSE.webp",
  "./img/SIGNATUREM650.webp",
  "./img/M350S.webp",
  "./img/M317.webp",
  "./img/M190.webp",
];

let cont = 0;

function imgAnt() {
  if (cont > 0) {
    cont--;
  } else {
    cont = imagenes.length - 1;
  }
  fotoactual();
}
function imgSig() {
  if (cont < imagenes.length - 1) {
    cont++;
  } else {
    cont = 0;
  }
  fotoactual();
}
function fotoactual() {
  let contimg = document.getElementById("foto-carrusel");
  contimg.src = imagenes[cont];
}
