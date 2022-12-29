class Produc {
    constructor(id, articulo, marca, modelo, precio, cantidad){
        this.articulo = articulo;
        this.marca = marca;
        this.modelo = parseInt(modelo);
        this.precio = parseFloat(precio);
        this.cantidad = parseInt(cantidad);
        this.id = id;
    }
};
    const Productos = [
        {id:1, articulo:'Auriculares', marca:'Mixor', modelo:550, precio: 1010.00,  cantidad:32},
        {id:2, articulo:'Manos Libres', marca:'Mixor', modelo:10, precio:1280.00, cantidad:25},
        {id:3, articulo:'Cable de Carga', marca:'Samsung', modelo:234, precio:520.50, cantidad:45},
        {id:4, articulo:'Cable de Carga y datos', marca:'Philips', modelo:030, precio:8, cantidad:52},
        {id:5, articulo:'Auriculres Gamer', marca:'Mixor', modelo:76, precio:890.50, cantidad:15},
        {id:6, Auricular:'Gamer', marca:'Pultec', modelo:1306, precio:2690, cantidad:9},
        {id:7, articulo:'Bulbo led', marca:'Mixor', modelo:1937, precio:510.00, cantidad:13},
    ];

    const buscar = (articulo) => {
        let producto = Productos.find(item => item.articulo === articulo);
        console.log(producto);
        if(producto){
            let mensaje = `articulo: ${producto.articulo}`; 
            alert(mensaje);
        }else{
            alert("Producto no encontrado")
        }
    }
    

    // let articulo = prompt("Ingrese el articulo a buscar:");
    // buscar(articulo);




/* const nuevoingreso = (articulo)=>{
        let producto = Productos.find(item => item.articulo != articulo);
    
        if(nuevoingreso === articulo){
            producto = 'Producto ya ingresado, desea editarlo?'
        }else if (nuevoingreso =! articulo){
            producto = 'articulo no ingresado, ingreselo por favor'
        }else{
            producto = 'Ingrese nuevamente la accion a realizar'
        }
    } */

/* let ingreso = parseInt(prompt(`Por favor ingrese la opcion deseada:
        1- Ingresar nuevo producto
        2- Editar producto
        3- Visualizar productos disponibles
        4- salir`)); */
        

/*switch(ingreso){
    case 1:
        ingresar_producto();
        break
    case 2:
        editar_producto();
        break
    case 3:
        visualizar_producto();
        break
    default:
        alert("Tu eleccion se realizo correctamente!")}*/

let nArticulo = [];

let id = document.getElementById("id");
let articulo = document.getElementById("articulo");
let marca = document.getElementById("marca");
let modelo = document.getElementById("modelo");
let precio = document.getElementById("precio");
let cantidad = document.getElementById("cantidad");
let save = document.getElementById("guardar");

save.onclick = () =>{
    let _id = id.value;
    let _articulo = articulo.value;
    let _marca = marca.value;
    let _modelo = modelo.value;
    let _precio = precio.value;
    let _cantidad = cantidad.value;
    nArticulo.push(_id, _articulo, _marca, _modelo, _precio, _cantidad);
    let nuevoproducto = new Produc (_id, _articulo, _marca, _modelo, _precio, _cantidad);
    console.log(nuevoproducto);
}

console.log(nuevoproducto);

    
    function buscar_producto(){
        let codigo = prompt("Ingrese el codigo a buscar:");
        var prod = buscar_por_codigo(codigo);
        alert(JSON.stringify(prod));
    }
    
    function buscar_por_codigo(code){
            var prod = Productos.find(item => item.codigo === code);
            if(prod){
                return prod;
            }
            else{
                return "producto no encontrado";
            }
    }
    
    function visualizar_productos(){
        alert(JSON.stringify(Productos));
    }
    
    function editar_producto(){
        var codigo = prompt("Ingrese el codigo del articulo a editar:");
        var edit = buscar_por_codigo(codigo);
        if(edit){
            let articulo = prompt("Ingresa el nuevo nombre de articulo:");
            let marca = prompt("Ingrese la nueva marca del articulo:");
            let modelo = prompt("Ingrese el nuevo modelo del articulo:");
            let precio = prompt("Ingrese el nuevo precio del articulo:");
            let cantidad = prompt("Ingrese el nuevo stock del articulo:");
            producto.articulo = articulo;
            producto.marca = marca;
            producto.modelo = modelo;
            producto.precio = precio;
            producto.cantidad = cantidad;
        }
        else{
            alert("el producto no existe");
        }
    }


    const cards = document.getElementById('cards')
    const items = document.getElementById('items')
    const footer= document.getElementById('footer')
    const templateCard = document.getElementById('template-card').content
    const templateFooter = document.getElementById('template-footer').content
    const fragment = document.createDocumentFragment()
    let carrito 
    
    document.addEventListener('DOMContentLoaded', () =>{
        fetchData()
    })
    cards.addEventListener('click', e => {
        addCarrito(e)
    })
    
    const fetchData = async () => {
        try {
            const res = await fetch('api.json')
            const data = await res.json()
            
            pintarCards(data)
        } catch (error) {
            console.log(error)
        }
    }
    
    const pintarCards = data => { 
    
        data.forEach(producto => {
            templateCard.querySelector('h5').textContent=producto.title
            templateCard.querySelector('p').textContent=producto.precio
            templateCard.querySelector('img').setAttribute("src", producto.thumbnailUrl)
            templateCard.querySelector('.btn-dark').dataset.id=producto.id
    
            const clone = templateCard.cloneNode(true) 
            fragment.appendChild(clone)
        })
        cards.appendChild(fragment)
    }
    
    const addCarrito = e => {
        //console.log(e.target)
        //console.log(e.target.classList.contains('btn-dark'))
        if (e.target.classList.contains('btn-dark')){
            setCarrito(e.target.parentElement)
        }
        e.stopPropagation()
    }
    
    const setCarrito = objeto => {
        console.log(objeto)
        const producto = {
            id: objeto.querySelector('.btn-dark').dataset.id,
            title: objeto.querySelector('h5').textContent,
            precio: objeto.querySelector('p').textContent,
            cantidad: 1
        }
    
        if(carrito.hasOwnProperty(producto.id)){
            producto.cantidad=carrito[producto.id].cantidad+1
        }
        carrito[producto.id]={ ...producto }
        pintarCarrito ()
    }
    
    const pintarCarrito = () => {
        
        items.innerHTML = ''
        Object.values(carrito).forEach(producto => {
            templateCarrito.querySelector('th').textContent = producto.id
            templateCarrito.querySelectorAll('td')[0].textContent = producto.title
            templateCarrito.querySelectorAll('td')[1].textContent = producto.cantidad
            templateCarrito.querySelector('.btn-info').dataset.id = producto.id
            templateCarrito.querySelector('.btn-danger').dataset.id = producto.id
            templateCarrito.querySelector('span').textContent = producto.cantidad * producto.precio
            const clone = templateCarrito.cloneNode(true)
            fragment.appendChild(clone)
        })
        items.appendChild(fragment)
    
        pintarFooter = () => {
            footer.innerHTML = ''
            if (Object.keys(carrito).legth === 0){
                footer.innerHTML = '<th scope="row" colspan="5">Carrito vacio - Prosiga a comprar!</th>'
            }
        }
    
        const nCantidad = Object.values(carrito).reduce((acc, {cantidad})=> acc + cantidad,0)
        const nPrecio = Object.values(carrito).reduce((acc, {cantidad, precio})=> acc + cantidad * precio,0)
        console.log(nCantidad)
    }



