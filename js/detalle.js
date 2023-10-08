
let codigo = location.search;
console.log(codigo);
let codigoProducto = new URLSearchParams(codigo);
console.log(codigoProducto);

let codigoSeleccionado = codigoProducto.get('codigo');
console.log(codigoSeleccionado);

//Capturo los elementos de la página 
let codigoFinal = document.getElementById('codigo');
let nombre = document.getElementById('nombre');
let memoria = document.getElementById('memoria');
let precio = document.getElementById('precio');
let imagen = document.getElementById('imagen');
let caracteristicas = document.getElementById('caracteristicas');
let descripcion = document.getElementById('descripcion');


//Tomo los datos del localStorage
let detalleProducto = JSON.parse(localStorage.getItem('detallesProducto'))
//Convierto el objeto literal a un array
let arrayDetalle = JSON.parse(detalleProducto[0]);
console.log(arrayDetalle);


//Muestro de manera dinámica los detalles del producto 
codigoFinal.innerHTML = `Código del Producto: ${codigoSeleccionado}`;
nombre.innerHTML = `Nombre del producto : ${arrayDetalle.marca}`;
memoria.innerHTML = `Memoria: ${arrayDetalle.memoria}`;
precio.innerHTML = `Precio: $${arrayDetalle.precio}`;
imagen.innerHTML = `<img class="w-100" src="${arrayDetalle.imagenDetalle}" alt="${arrayDetalle.marca}"/>`;
descripcion.innerHTML = `<h4>${arrayDetalle.descripcion}</h4>`;



let botonRegresar = document.getElementById('botonRegresar');
botonRegresar.addEventListener('click', function(){    
    localStorage.clear()    
    location.href = 'index.html'
})


