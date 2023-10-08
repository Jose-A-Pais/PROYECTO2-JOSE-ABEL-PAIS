//Capturo los elementos
let productosHTML = document.querySelector('.productos');

//console.log(productosHTML);


fetch('../datos/productos.json')
.then((respuesta)=>{
    return respuesta.json()
})
.then((productos)=>{
    //console.log(productos) 
    productos.forEach(producto => {
        
        productosHTML.innerHTML += `
        <article class="producto card col-12 col-md-6 col-lg-4 m-auto mb-5" style="width: 17rem">
            <img class="w-100" src="${producto.imagenIndex}" class="card-img-top" alt="${producto.nombre}">
            <h2 class="text-center card-title" >${producto.marca}</h2>
            <h5 class="text-center card-text" >${producto.memoria}</h5> 
            <h5 class="text-center card-text" >$${producto.precio}</h5>                     
            <a   id='${JSON.stringify(producto)}' href= '#' class='btn btn-outline-primary d-block botonDetalle' >Ver detalle </a>
        </article>        
        `
        
    })
    
    let botonDetalle = document.querySelectorAll('.botonDetalle')
    //console.log(botonDetalle);
    
    let arrayMiListaDeProductos ;   
    let miObjeto;    
    let codigo;
    

    botonDetalle.forEach(productoSeleccion => {
         productoSeleccion.addEventListener('click', function(event){             
             event.preventDefault()
             //Traigo datos del localStorage - No es necesario haerlo en este caso propuesto
             let miListaDeProductos = localStorage.getItem('detallesProducto')
             if(miListaDeProductos == null){
                 arrayMiListaDeProductos = [];
             }else{
                 arrayMiListaDeProductos = JSON.parse(miListaDeProductos)
                 //console.log(arrayMiListaDeProductos);
             }
            //Guardando en el array el objeto 
            arrayMiListaDeProductos.push(this.id)
            //Convierto el objeto seleccionado en un array
            miObjeto = JSON.parse(arrayMiListaDeProductos[0])
            //Aquí tomo el código que el usuario seleccionó
            codigo = miObjeto.codigo
            //Aquí guardo en el localStorage el objeto que usuario seleccionó
            localStorage.setItem('detallesProducto', JSON.stringify(arrayMiListaDeProductos))
            //Aquí construyo mi Query strings - Lo cual es la ruta a donde debo enviar al usuario y además junto a ello le envío el código que fué seleccionado
            location.href = `detalle.html?codigo=${codigo}`
             
         })    
     } )
    

    
})

.catch((error)=>{
    console.log('Ha ocurrido un error '+error )
})



