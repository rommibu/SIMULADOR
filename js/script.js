function Produc (info) {
        this.articulo = articulo;
        this.marca = info.marca;
        this.modelo = parseInt(info.modelo);
        this.precio = parseFloat(info.precio);
        this.cantidad = parseInt(info.cantidad);
        this.id = info.id;

        this.describir = function () {alert("Hola, el producto " + this.articulo + " es marca " + this.marca + " modelo " + this.modelo + " cuesta " + this.precio + " hay en cantidad " + this.cantidad + " y se identifica con el codigo " + this.id)}
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
        
        if(producto){
            let mensaje = `articulo: ${producto.articulo}`; 
            alert(mensaje);
        }else{
            alert("Producto no encontrado")
        }
    }
    

    let articulo = prompt("Ingrese el articulo a buscar:");
    buscar(articulo);


    /*const nuevoingreso= (articulo)=>{
        let producto = Productos.find(item => item.articulo != articulo);
    
        if(nuevoingreso === articulo){
            producto = 'Producto ya ingresado, desea editarlo?'
        }else if (nuevoingreso =! articulo){
            producto = 'articulo no ingresado, ingreselo por favor'
        }else{
            producto = 'Ingrese nuevamente la accion a realizar'
        }
    }*/

let ingreso = parseInt(prompt(`Por favor ingrese la opcion deseada:
        1- Ingresar nuevo producto
        2- Editar producto
        3- Visualizar productos disponibles
        4- salir`));
        



        
                


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
