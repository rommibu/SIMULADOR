function Producto (articulo, marca, modelo, precio, cantidad, id) {
        this.articulo = articulo;
        this.marca = marca;
        this.modelo = parseInt(modelo);
        this.precio = parseFloat(precio);
        this.cantidad = parseInt(cantidad);
        this.id = id;

        let ingreso = prompt(parseInt(`Por favor ingrese la opcion deseada:
        1- Ingresar nuevo producto
        2- Editar producto
        3- Visualizar productos disponibles
        4- salir`));

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

    }





    /*const Producto1=new Producto('Auriculares', 'Mixor', 550, 1010.00,  32, 1);
    const Producto2=new Producto('Manos Libres', 'Mixor', 10, 1280.00, 25, 2);
    const Producto3=new Producto('Cable de Carga', 'Samsung', 234, 520.50, 45, 3);
    const Producto4=new Producto('Cable de Carga y datos', 'Philips', 030, 8, 52, 4);
    const Producto5=new Producto('Auriculres Gamer', 'Mixor', 76, 890.50, 15, 5);
    const Producto6=new Producto('Auricular Gamer', 'Pultec', 1306, 2690, 9, 6);
    const Producto7=new Producto('Bulbo led', 'Mixor', 1937, 510.00, 13, 7);

    let continuar = true;

while (continuar) {
    let Seleccion = prompt('Ingresa los datos del Producto: articulo, marca, modelo, precio, cantidad, id. Ingresa X para finalizar. Ingresa Editar para editar un producto');

    if (Seleccion.toUpperCase() == 'X') {
        continuar = false;
        break;
    }
        let nuevo = prompt('Elegí el producto a agregar:\n1 - Auriculares Gamer \n2 - Auriculares Manos Libres\n3 - Cable de carga \n4 - Bulbo led');
        let art = prompt("Ingrese el articulo");
        let mark = prompt("Ingrese la marca del articulo");
        let model = prompt("Ingrese el modelo del articulo");
        let price = prompt("Ingrese el precio del articulo");
        let cant = prompt("Ingrese la cantidad del articulo");
        let idp = prompt("Ingrese el ID del articulo");

    const newproduct = {
        new.Producto(art, mark, model, price, cant, id),
    
    
    
    } else {
        if (Seleccion() == "Editar")

        switch (Seleccion) {
            case '1':
                let art = prompt("Ingrese el nombre del articulo editado");
                alert("El articulo ha sido editado");
                break
            case '2':
                let mark = prompt("Ingrese la marca del articulo editado");
                alert("La mrca ha sido editada");
                break
            case '3':
                let model = prompt("Ingrese el modelo del articulo editado");
                alert("El modelo ha sido editado");
                break
            case '4':
                let price = prompt("Ingrese el precio del articulo editado");
                alert("El precio ha sido editado");
                break
            case '5':
                let cant = prompt("Ingrese la cantidad del articulo editado");
                alert("La cantidad ha sido editada");
                break
            case '6':
                let idp = prompt("Ingrese el ID del articulo editado");
                alert("El ID ha sido editado");
                break  
        }
    }
}
Producto ()*/