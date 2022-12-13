function Produc (info) {
        this.articulo = articulo;
        this.marca = info.marca;
        this.modelo = parseInt(info.modelo);
        this.precio = parseFloat(info.precio);
        this.cantidad = parseInt(info.cantidad);
        this.id = info.id;

        this.describir = function () {alert("Hola, el producto " + this.articulo + " es marca " + this.marca + " modelo " + this.modelo + " cuesta " + this.precio + " hay en cantidad " + this.cantidad + " y se identifica con el codigo " + this.id)}

    const Producto1=new Produc('Auriculares', 'Mixor', 550, 1010.00,  32, 1);
    const Producto2=new Produc('Manos Libres', 'Mixor', 10, 1280.00, 25, 2);
    const Producto3=new Produc('Cable de Carga', 'Samsung', 234, 520.50, 45, 3);
    const Producto4=new Produc('Cable de Carga y datos', 'Philips', 030, 8, 52, 4);
    const Producto5=new Produc('Auriculres Gamer', 'Mixor', 76, 890.50, 15, 5);
    const Producto6=new Produc('Auricular Gamer', 'Pultec', 1306, 2690, 9, 6);
    const Producto7=new Produc('Bulbo led', 'Mixor', 1937, 510.00, 13, 7);

}       

let ingreso = parseInt(prompt(`Por favor ingrese la opcion deseada:
        1- Ingresar nuevo producto
        2- Editar producto
        3- Visualizar productos disponibles
        4- salir`));
        
let articuloUser = prompt("Ingrese el articulo").toUpperCase();
let marcaUser = prompt("Ingrese la marca del articulo").toUpperCase();
let modeloUser = prompt("Ingrese el modelo del articulo").toUpperCase();
let precioUser = prompt("Ingrese el precio del articulo");
let cantidadUser = prompt("Ingrese la cantidad del articulo");
let idUser = prompt("Ingrese el ID del articulo");


        switch(ingreso){
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
                alert("Tu eleccion se realizo correctamente!")
                
}


