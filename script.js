let compras = 0;
let sc = true;
let pedidoGratis = false;
let pedidoGratisRealizado = false;
tienda();
function tienda() {
    do {
        let items;
        let metodo;
        let cuotas = 0;
        let envio;
        let d = 0;
        carrito();
        function carrito() {
            window.alert('La Disquería virtual\n\nActualmente tenemos en stock los siguientes albums:\n\n"Artaud" Alberto Spinetta(1978) $3000.\n"Dark side of the Moon" Pink Floyd(1969) $2000.\n"22" Adele(2015) $1800.\n"Conciertos de Violín" Bach(1600) $2200.');
            items = prompt("Por favor, introduzca el número que se encuentra a la izquierda del titulo que desea llevar, si vá a comprar más de uno, simplemente ponga los números de cada uno de los discos que desea llevar con un espacio de por medio.\n\n***Con la compra de los cuatro ejemplares el envío será gratis y se le descontará un 10% al precio total.***\n\n1-Artaud Alberto Spinetta(1973) $3000.\n2-Dark side of the Moon Pink Floyd(1973) $2000.\n3-30 Adele(2021) $1800.\n4-Conciertos de Violín Bach(1700) $2200.");
            if (!items.includes('1') && !items.includes('2') && !items.includes('3') && !items.includes('4')) {
                window.alert('Error! Has ingresado un dato incorrecto.');
                carrito();
            } else {
                pago();
            } 
        }
        function pago() {
            metodo = prompt('¿Qué metodo de pago utilizará?\n\n1-Tarjeta de crédito/débito.\n2-Efectivo.');
            if (!metodo.includes('1') && !metodo.includes('2')) {
                window.alert('Error! Has ingresado un dato incorrecto.');
                pago();
            } else if (metodo == 1) {
                cuantasCuotas();
            } else {
                obtencion();
            }
        }
        function cuantasCuotas() {
            cuotas = prompt('¿En cuántas cuotas desea realizar su pago?\n\nIngrese un número del 1 al 24 que represente la cantidad de cuotas en que desea pagar. Tenga en cuenta que solo hay hasta 12 cuotas sin interes, desde la 12 sin incluirla hasta la 24 se cobrará un interes del 10% de la misma.');
            if (24 < cuotas || cuotas < 0 || cuotas === '' || isNaN(cuotas)) {
                window.alert('Error! Has ingresado un dato incorrecto.');
                cuantasCuotas();
            } else {
                obtencion();
            }
        }   
        function obtencion() {
            envio = prompt('¿Quiere servicio de envio a su domicilio? Por cada metro recorrido se le adjudicara $1 a su factura final.\n\n1-Sí.\n2-No.');
            if (!envio.includes('1') && !envio.includes('2')) {
                window.alert('Error! Has ingresado un dato incorrecto.');
                obtencion();
            } else if (envio == 1) {
                distancia();
            } else {
                precio();
            }
        }
        function distancia() {
            d = prompt('Ingrese la distancia en metros desde su domicilio al local, por ejemplo ingrese 200 en caso de estar a 200 metros.');
            if (isNaN(d)) {
                window.alert('Error! Has ingresado un dato incorrecto.')
                distancia();
            } else {
                precio();
            }
        }
        function precio() {
            let precioItems = 0;
            for (let i = 1; i < 5; i++) {
                if (items.includes(i)) {
                    switch (i) {
                        case 1 :
                            precioItems += 3000; 
                        break;
                        case 2 : 
                            precioItems += 2000; 
                        break;
                        case 3 :
                            precioItems += 1800; 
                        break;
                        case 4 : 
                            precioItems += 2200; 
                        break;
                    }
                }
            }
            if (pedidoGratis === false) {
                if (items.includes('1') && items.includes('2') && items.includes('3') && items.includes('4')){
                    if (cuotas == 0) {
                        window.alert("Pedido realizado:\n\nTiempo de demora: " + Math.ceil(d / 60) + "hs (minimo 1 hora).\nEl precio final es de "+ Math.floor(precioItems * 1.21) * 0.9 + ".");
                    } else if (0 < cuotas && cuotas <= 12) {
                        window.alert("Pedido realizado:\n\nTiempo de demora: " + Math.ceil(d / 60) + "hs (minimo 1 hora).\nEl precio final es de "+ Math.floor(precioItems * 1.21) * 0.9 + " a pagar en " + cuotas + " cuotas de " + Math.floor(((precioItems * 1.21) * 0.9) / cuotas) + ".");                        
                    } else {
                        window.alert("Pedido realizado:\n\nTiempo de demora: " + Math.ceil(d / 60) + "hs (minimo 1 hora).\nEl precio final es de "+ Math.floor((cuotas * (((precioItems * 1.21)/ cuotas) * 1.1)) * 0.9) + " a pagar en " + cuotas + " cuotas de " + Math.floor((((precioItems * 1.21) / cuotas) * 1.1) * 0.9) + ".");          
                    }
                } else {
                    if (envio == 1) {
                        if (cuotas == 0) {
                            window.alert("Pedido realizado:\n\nTiempo de demora: " + Math.ceil(d / 60) + "hs (minimo 1 hora).\nEl precio final es de "+ Math.floor(precioItems * 1.21 + d * 0.5) + ".");
                        } else if (0 < cuotas && cuotas <= 12) {
                            window.alert("Pedido realizado:\n\nTiempo de demora: " + Math.ceil(d / 60) + "hs (minimo 1 hora).\nEl precio final es de " + Math.floor(precioItems * 1.21 + d * 0.5) + " a pagar en " + cuotas + " cuotas de " + Math.floor((precioItems * 1.21 + d * 0.5) / cuotas) + ".");
                        } else {
                            window.alert("Pedido realizado:\n\nTiempo de demora: " + Math.ceil(d / 60) + "hs (minimo 1 hora).\nEl precio final es de "+ Math.floor(cuotas * (((precioItems * 1.21 + d * 0.5)/ cuotas) * 1.1)) + " a pagar en " + cuotas + " cuotas de " + Math.floor(((precioItems * 1.21 + d * 0.5) / cuotas) * 1.1) + "." );
                        }
                    } else {
                        if (cuotas == 0) {
                            window.alert("Pedido realizado:\n\nEl precio final es de "+ Math.floor(precioItems * 1.21 + d * 0.5) + ".");
                        } else if (0 < cuotas && cuotas <= 12) {
                            window.alert("Pedido realizado:\n\nEl precio final es de " + Math.floor(precioItems * 1.21) + " a pagar en " + cuotas + " cuotas de " + Math.floor((precioItems * 1.21) / cuotas) + ".");
                        } else {
                            window.alert("Pedido realizado:\n\nEl precio final es de "+ Math.floor(cuotas * (((precioItems * 1.21)/ cuotas) * 1.1)) + " a pagar en " + cuotas + " cuotas de " + Math.floor(((precioItems * 1.21) / cuotas) * 1.1) + "." );
                        }
                    }
                }
            } else {
                if (envio == 1) {
                    window.alert("Pedido realizado:\n\nEl pedido es completamente gratis!\n\nTendra una demora de " + Math.ceil(d / 60) + "hs (minimo una hora).");
                } else {
                    window.alert("Pedido realizado:\n\nEl pedido es completamente gratis!");
                }
                pedidoGratis = false;
                pedidoGratisRealizado = true;
            }
        }
        compras++;
        let seguirComprando = prompt("Para continuar comprando ingrese cualquier cosa, para salir solo presione enter.");
        if (seguirComprando === '') {
            sc = false;
        }
    } while (sc === true && pedidoGratis === false);
}
for (let i = 0; i < compras; i++) {
    if (pedidoGratisRealizado === true) {
        window.alert('Gracias por comprar con nosotros!!!');
        break;
    } else {
        if (Math.ceil(Math.random() * 3) !== 1) {
            continue;
        } else {
            window.alert('¡Felicitaciones eres el comprador número 1.000! Puedes hacer un pedido más completamente gratis.');
        }
        let otroPedido = prompt("Si deseas hacer tu pedido gratis ingresa cualquier cosa, si deseas salir de la apliación presiona enter directamente.");
        if (otroPedido !== '') {
            sc = true;
            pedidoGratis = true;
            tienda();
        } else {
            window.alert('Gracias por comprar con nosotros!');
            break;
        }
    }
}
   









