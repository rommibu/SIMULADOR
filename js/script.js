function myFunction() {
    let ingreso = parseInt(prompt(`Por favor ingrese la opcion deseada:
            1- Ingresar nuevo producto
            2- Editar producto
            3- Visualizar productos disponibles
            4- Buscar articulo
            5- salir`));
            
    switch(ingreso){
        case 1:
            ingresar_producto();
            break
        case 2:
            editar_producto();
            break
        case 3:
            visualizar_productos();
            break
        case 4:
            buscar_producto();
            break
        default: 
            alert("adios");
    }
}
    var Productos = [];
    
    function ingresar_producto() {
        var codigo = prompt("Ingrese el codigo del articulo:");
        var articulo = prompt("Ingrese el nombre del articulo:");
        var marca = prompt("Ingrese la marca del articulo:");
        var modelo = prompt("Ingrese el modelo del articulo:");
        var precio = prompt("Ingrese el precio del articulo:");
        var cantidad = prompt("Ingrese el stock del articulo:");

        var prod = new Object();
        prod.codigo = codigo;
        prod.articulo = articulo;
        prod.marca = marca;
        prod.modelo = modelo;
        prod.precio = precio;
        prod.cantidad = cantidad;
        Productos.push(prod);
        alert("Hola, el producto " + prod.articulo + " es marca " + prod.marca + " modelo " + prod.modelo + " cuesta " + prod.precio);
    }
    
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
            var articulo = prompt("Ingresa el nuevo nombre de articulo:");
            var marca = prompt("Ingrese la nueva marca del articulo:");
            var modelo = prompt("Ingrese el nuevo modelo del articulo:");
            var precio = prompt("Ingrese el nuevo precio del articulo:");
            var cantidad = prompt("Ingrese el nuevo stock del articulo:");
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











/*function Produc (info) {
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

/*let ingreso = parseInt(prompt(`Por favor ingrese la opcion deseada:
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


    
            