//Heroes Marvel vs DC

//Declaraciones de variables

let opcion = -1;
let listaHeroes = "";

const heroes = [
    {
        "id": "1",
        "name": "Superman",
        "intelligence": 150,
        "strength": "2600",
        "speed": "1200",
        "height": "191",
        "weight": "101"
    },
    {
        "id": "2",
        "name": "Iron Man",
        "intelligence": 160,
        "strength": "2130",
        "speed": "930",
        "height": "198",
        "weight": "191"
    },
    {
        "id": "3",
        "name": "Hulk",
        "intelligence": 140,
        "strength": "2500",
        "speed": "450",
        "height": "244",
        "weight": "630"
    },
    {
        "id": "4",
        "name": "Loki",
        "intelligence": 140,
        "strength": "1750",
        "speed": "730",
        "height": "193",
        "weight": "236"
    },
    {
        "id": "5",
        "name": "Flash",
        "intelligence": 100,
        "strength": "900",
        "speed": "800000",
        "height": "180",
        "weight": "81"
    },
    {
        "id": "6",
        "name": "Wonder Woman",
        "intelligence": 140,
        "strength": "2230",
        "speed": "700",
        "height": "183",
        "weight": "74"
    },
    {
        "id": "7",
        "name": "Batgirl",
        "intelligence": 140,
        "strength": "700",
        "speed": "77",
        "height": "170",
        "weight": "57"
    },
    {
        "id": "8",
        "name": "Supergirl",
        "intelligence": 150,
        "strength": "2100",
        "speed": "935",
        "height": "165",
        "weight": "54"
    },
    {
        "id": "9",
        "name": "Shazam",
        "intelligence": 150,
        "strength": "2370",
        "speed": "1000",
        "height": "192",
        "weight": "120"
    },
    {
        "id": "10",
        "name": "Doctor Fate",
        "intelligence": 129,
        "strength": "700",
        "speed": "220",
        "height": "188",
        "weight": "89"
    },
    {
        "id": "11",
        "name": "Green Lantern",
        "intelligence": 110,
        "strength": "2200",
        "speed": "940",
        "height": "188",
        "weight": "90"
    },
    {
        "id": "12",
        "name": "Aquaman",
        "intelligence": 129,
        "strength": "1410",
        "speed": "220",
        "height": "185",
        "weight": "146"
    },
    {
        "id": "13",
        "name": "Penguin",
        "intelligence": 120,
        "strength": "30",
        "speed": "15",
        "height": "157",
        "weight": "112"
    },
    {
        "id": "14",
        "name": "Catwoman",
        "intelligence": 147,
        "strength": "80",
        "speed": "65",
        "height": "175",
        "weight": "61"
    },
    {
        "id": "15",
        "name": "Riddler",
        "intelligence": 163,
        "strength": "625",
        "speed": "45",
        "height": "176",
        "weight": "62"
    },
    {
        "id": "16",
        "name": "Joker",
        "intelligence": 160,
        "strength": "85",
        "speed": "45",
        "height": "196",
        "weight": "86"
    },
    {
        "id": "17",
        "name": "Thing",
        "intelligence": 120,
        "strength": "2100",
        "speed": "50",
        "height": "183",
        "weight": "350"
    },
    {
        "id": "18",
        "name": "Human Torch",
        "intelligence": 100,
        "strength": "730",
        "speed": "930",
        "height": "178",
        "weight": "77"
    },
    {
        "id": "19",
        "name": "Wolverine",
        "intelligence": 100,
        "strength": "990",
        "speed": "90",
        "height": "180",
        "weight": "135"
    },
    {
        "id": "20",
        "name": "Spider-Man",
        "intelligence": 144,
        "strength": "1280",
        "speed": "155",
        "height": "178",
        "weight": "74"
    },
    {
        "id": "21",
        "name": "Colossus",
        "intelligence": 100,
        "strength": "2100",
        "speed": "95",
        "height": "226",
        "weight": "225"
    },
    {
        "id": "22",
        "name": "Green Goblin",
        "intelligence": 160,
        "strength": "1250",
        "speed": "205",
        "height": "180",
        "weight": "83"
    },
    {
        "id": "23",
        "name": "Invisible Woman",
        "intelligence": 140,
        "strength": "250",
        "speed": "80",
        "height": "168",
        "weight": "54"
    },
    {
        "id": "24",
        "name": "Storm",
        "intelligence": 120,
        "strength": "670",
        "speed": "166",
        "height": "180",
        "weight": "57"
    },
    {
        "id": "25",
        "name": "Silver Surfer",
        "intelligence": 89,
        "strength": "2400",
        "speed": "1000",
        "height": "193",
        "weight": "101"
    },
    {
        "id": "26",
        "name": "Daredevil",
        "intelligence": 120,
        "strength": "880",
        "speed": "83",
        "height": "183",
        "weight": "90"
    },
    {
        "id": "27",
        "name": "Hawkeye",
        "intelligence": 89,
        "strength": "850",
        "speed": "80",
        "height": "191",
        "weight": "104"
    },
    {
        "id": "28",
        "name": "Doctor Octopus",
        "intelligence": 150,
        "strength": "1250",
        "speed": "135",
        "height": "175",
        "weight": "110"
    },
    {
        "id": "29",
        "name": "Doctor Doom",
        "intelligence": 160,
        "strength": "1600",
        "speed": "85",
        "height": "201",
        "weight": "187"
    },
    {
        "id": "30",
        "name": "Venom",
        "intelligence": 120,
        "strength": "1500",
        "speed": "97",
        "height": "191",
        "weight": "117"
    },
    {
        "id": "31",
        "name": "Scarlet Witch",
        "intelligence": 160,
        "strength": "250",
        "speed": "125",
        "height": "170",
        "weight": "59"
    },
    {
        "id": "32",
        "name": "Captain America",
        "intelligence": 110,
        "strength": "950",
        "speed": "92",
        "height": "188",
        "weight": "108"
    },
    {
        "id": "33",
        "name": "Emma Frost",
        "intelligence": 120,
        "strength": "1050",
        "speed": "45",
        "height": "178",
        "weight": "65"
    },
    {
        "id": "34",
        "name": "Magneto",
        "intelligence": 140,
        "strength": "1390",
        "speed": "800",
        "height": "188",
        "weight": "86"
    },
    {
        "id": "35",
        "name": "Phoenix",
        "intelligence": 150,
        "strength": "1850",
        "speed": "890",
        "height": "168",
        "weight": "52"
    },
    {
        "id": "36",
        "name": "Ghost Rider",
        "intelligence": 80,
        "strength": "1500",
        "speed": "280",
        "height": "188",
        "weight": "99"
    },
    {
        "id": "37",
        "name": "Vision",
        "intelligence": 160,
        "strength": "1420",
        "speed": "830",
        "height": "191",
        "weight": "135"
    },
    {
        "id": "38",
        "name": "Lex Luthor",
        "intelligence": 160,
        "strength": "415",
        "speed": "55",
        "height": "188",
        "weight": "95"
    },
    {
        "id": "39",
        "name": "Black Adam",
        "intelligence": 140,
        "strength": "2200",
        "speed": "925",
        "height": "191",
        "weight": "113"
    },
    {
        "id": "40",
        "name": "Cyborg",
        "intelligence": 120,
        "strength": "1100",
        "speed": "150",
        "height": "198",
        "weight": "173"
    },
    {
        "id": "41",
        "name": "Batman",
        "intelligence": 160,
        "strength": "500",
        "speed": "85",
        "height": "188",
        "weight": "95"
    },
    {
        "id": "42",
        "name": "Hawk",
        "intelligence": 60,
        "strength": "835",
        "speed": "300",
        "height": "185",
        "weight": "89"
    },
    {
        "id": "43",
        "name": "Green Arrow",
        "intelligence": 129,
        "strength": "710",
        "speed": "220",
        "height": "188",
        "weight": "88"
    },
    {
        "id": "44",
        "name": "Black Canary",
        "intelligence": 100,
        "strength": "100",
        "speed": "110",
        "height": "170",
        "weight": "59"
    },
    {
        "id": "45",
        "name": "Thor",
        "intelligence": 110,
        "strength": "1100",
        "speed": "250",
        "height": "198",
        "weight": "288"
    },
    {
        "id": "46",
        "name": "Cyclops",
        "intelligence": 120,
        "strength": "950",
        "speed": "130",
        "height": "191",
        "weight": "88"
    },
    {
        "id": "47",
        "name": "Spider-Gwen",
        "intelligence": 120,
        "strength": "955",
        "speed": "150",
        "height": "165",
        "weight": "56"
    },
    {
        "id": "48",
        "name": "Captain Marvel",
        "intelligence": 134,
        "strength": "2600",
        "speed": "1200",
        "height": "180",
        "weight": "74"
    },
    {
        "id": "49",
        "name": "Black Widow",
        "intelligence": 136,
        "strength": "720",
        "speed": "70",
        "height": "170",
        "weight": "59"
    },
    {
        "id": "50",
        "name": "Doctor Strange",
        "intelligence": 160,
        "strength": "750",
        "speed": "480",
        "height": "188",
        "weight": "81"
    },
    {
        "id": "51",
        "name": "Harley Quinn",
        "intelligence": 136,
        "strength": "80",
        "speed": "55",
        "height": "170",
        "weight": "63"
    },
    {
        "id": "52",
        "name": "Deadpool",
        "intelligence": 110,
        "strength": "150",
        "speed": "55",
        "height": "188",
        "weight": "95"
    },
    {
        "id": "53",
        "name": "Thanos",
        "intelligence": 160,
        "strength": "2600",
        "speed": "380",
        "height": "201",
        "weight": "443"
    },
    {
        "id": "54",
        "name": "Mera",
        "intelligence": 121,
        "strength": "1300",
        "speed": "210",
        "height": "175",
        "weight": "72"
    },
    {
        "id": "55",
        "name": "Hela",
        "intelligence": 142,
        "strength": "1100",
        "speed": "220",
        "height": "213",
        "weight": "225"
    },
    {
        "id": "56",
        "name": "Raven",
        "intelligence": 136,
        "strength": "900",
        "speed": "35",
        "height": "165",
        "weight": "50"
    }
];

//Declaraciones de funciones

const mostrarHeroe = (heroe) => {
    return (`Nombre: ${heroe.name}\n` +
        `Inteligencia: ${heroe.intelligence}\n` +
        `strength: ${heroe.strength}\n` +
        `speed: ${heroe.speed}\n` +
        `height: ${heroe.height}\n` +
        `weight: ${heroe.weight}\n\n`);
}


//inicio del programa
alert('Bienvenidos a Marvel vs DC  \n' +
    '------------------------------------\n' +
    'Consulta todo sobre tus heroes\n' +
    '------------------------------------\n');

while (opcion === -1) {
    opcion = parseInt(prompt('Selecione la opcion que desea realizar \n 1 - Listar Heroes (forEach)\n 2 - Buscar Heroe por nombre (Find)\n 3 - Filtrar la lista por alguna caracterisitica (Filter)\n 4 - Existe algun nombre que comience una letra dada (Some)\n 5 - Modificar alguna estadistica o propiedad(Map)\n 6 - Sumar algun atributo de todos los heroes (Reduce)\n 7 - Ordenar la lista de Heroes (Sort)\n 0 - para salir'));
    if (isNaN(opcion)) {
        alert('El valor ingresado no es válido');
        opcion = -1;
    } else if (!(opcion >= 0 && opcion <= 7)) {
        alert('Por favor ingrese una opción válida');
        opcion = -1;
    }
    if (opcion === 0) {
        alert('Ha seleccionado salir del programa');
    }
    switch (opcion) {
        //Listar Heroes (forEach)
        case 1: {
            heroes.forEach(heroe => {
                listaHeroes += mostrarHeroe(heroe);
            }
            );
            alert('Esta salida debido a su longitud se muestra por Consola')
            console.log(listaHeroes); 0
            opcion = -1;
            break;
        }
        //Buscar Heroe por nombre (Find)
        case 2: {
            let entrada = '';
            while (entrada === '') {
                entrada = prompt('Para buscar un heroe escribe su nombre de manera parcial o total, luego haz click en aceptar').toLowerCase();
                if (entrada === '') {
                    alert('Por favor ingrese un valor')
                } else {
                    const heroeBuscado = heroes.find(heroe => heroe.name.toLowerCase().includes(entrada));
                    (heroeBuscado) ? alert(mostrarHeroe(heroeBuscado)) : alert(`${entrada} no se encuentra en la base de datos`);
                }
            }
            opcion = -1;
            break;
        }
        //Filtrar la lista por alguna caracterisitica
        case 3: {
            let opcionFiltro = -1;
            while (opcionFiltro === -1) {
                opcionFiltro = parseInt(prompt('Selecione la caracteristica sobre la que desea filtrar\n 1 - Inteligencia\n 2 - Fuerza\n 3 - Velocidad\n 4 - Altura\n 5 - Peso\n 0 - para salir al menu principal'));
                if (isNaN(opcionFiltro)) {
                    alert('El valor ingresado no es válido');
                    opcionFiltro = -1;
                } else if (!(opcionFiltro >= 0 && opcionFiltro <= 5)) {
                    alert('Por favor ingrese una opción válida');
                    opcionFiltro = -1;
                }
                if (opcionFiltro === 0) {
                    alert('Ha seleccionado salir al menu princial');
                    opcion = -1;
                }
            }
            switch (opcionFiltro) {
                //Filtro por inteligencia
                case 1: {
                    let entrada = '';
                    while (entrada === '') {
                        entrada = prompt('Va a comparar la inteligencia de los heroes:\n Ingrese el simbolo > para mayor o el simbolo < para menor, luego un espacio seguido del valor numerico base de la comparacion. Ejemplo \"> 100\" para filtrar los de inteligencia mayor que 100')
                        if (entrada === '') {
                            alert('Por favor ingrese un valor')
                        } else {
                            const [simbolo, valor] = entrada.split(' ');
                            if (simbolo === '>') {
                                const resultadoFiltro = heroes.filter(heroe => heroe.intelligence > parseInt(valor));
                                if (resultadoFiltro.length === 0) {
                                    alert('no se encontraron resultados con esos valores de filtros');
                                    opcion = -1;
                                } else {
                                    listaHeroes = '';
                                    resultadoFiltro.forEach(heroe => {
                                        listaHeroes += mostrarHeroe(heroe);
                                    })
                                    alert('Esta salida debido a su longitud se muestra por Consola')
                                    console.log(listaHeroes);
                                    opcion = -1;
                                }
                            } else if (simbolo === '<') {
                                const resultadoFiltro = heroes.filter(heroe => heroe.intelligence < parseInt(valor));
                                if (resultadoFiltro.length === 0) {
                                    alert('no se encontraron resultados con esos valores de filtros');
                                    opcion = -1;
                                } else {
                                    listaHeroes = '';
                                    resultadoFiltro.forEach(heroe => {
                                        listaHeroes += mostrarHeroe(heroe);
                                    })
                                    alert('Esta salida debido a su longitud se muestra por Consola')
                                    console.log(listaHeroes);
                                    opcion = -1;
                                }
                            }
                        }
                    }
                    break;
                }
                //filtro por fuerza
                case 2: {
                    let entrada = '';
                    while (entrada === '') {
                        entrada = prompt('Va a comparar la fuerza de los heroes:\n Ingrese el simbolo > para mayor o el simbolo < para menor, luego un espacio seguido del valor numerico base de la comparacion. Ejemplo \"> 100\" para filtrar los de fuerza mayor que 100')
                        if (entrada === '') {
                            alert('Por favor ingrese un valor')
                        } else {
                            const [simbolo, valor] = entrada.split(' ');
                            if (simbolo === '>') {
                                const resultadoFiltro = heroes.filter(heroe => heroe.strength > parseInt(valor));
                                if (resultadoFiltro.length === 0) {
                                    alert('no se encontraron resultados con esos valores de filtros');
                                    opcion = -1;
                                } else {
                                    listaHeroes = '';
                                    resultadoFiltro.forEach(heroe => {
                                        listaHeroes += mostrarHeroe(heroe);
                                    })
                                    alert('Esta salida debido a su longitud se muestra por Consola')
                                    console.log(listaHeroes);
                                    opcion = -1;
                                }
                            } else if (simbolo === '<') {
                                const resultadoFiltro = heroes.filter(heroe => heroe.strength < parseInt(valor));
                                if (resultadoFiltro.length === 0) {
                                    alert('no se encontraron resultados con esos valores de filtros');
                                    opcion = -1;
                                } else {
                                    listaHeroes = '';
                                    resultadoFiltro.forEach(heroe => {
                                        listaHeroes += mostrarHeroe(heroe);
                                    })
                                    alert('Esta salida debido a su longitud se muestra por Consola')
                                    console.log(listaHeroes);
                                    opcion = -1;
                                }
                            }
                        }
                    }
                    break;
                }
                //filtro por velocidad
                case 3: {
                    let entrada = '';
                    while (entrada === '') {
                        entrada = prompt('Va a comparar la velocidad de los heroes:\n Ingrese el simbolo > para mayor o el simbolo < para menor, luego un espacio seguido del valor numerico base de la comparacion. Ejemplo \"> 100\" para filtrar los de velocidad mayor que 100')
                        if (entrada === '') {
                            alert('Por favor ingrese un valor')
                        } else {
                            const [simbolo, valor] = entrada.split(' ');
                            if (simbolo === '>') {
                                const resultadoFiltro = heroes.filter(heroe => heroe.speed > parseInt(valor));
                                if (resultadoFiltro.length === 0) {
                                    alert('no se encontraron resultados con esos valores de filtros');
                                    opcion = -1;
                                } else {
                                    listaHeroes = '';
                                    resultadoFiltro.forEach(heroe => {
                                        listaHeroes += mostrarHeroe(heroe);
                                    })
                                    alert('Esta salida debido a su longitud se muestra por Consola')
                                    console.log(listaHeroes);
                                    opcion = -1;
                                }
                            } else if (simbolo === '<') {
                                const resultadoFiltro = heroes.filter(heroe => heroe.speed < parseInt(valor));
                                if (resultadoFiltro.length === 0) {
                                    alert('no se encontraron resultados con esos valores de filtros');
                                    opcion = -1;
                                } else {
                                    listaHeroes = '';
                                    resultadoFiltro.forEach(heroe => {
                                        listaHeroes += mostrarHeroe(heroe);
                                    })
                                    alert('Esta salida debido a su longitud se muestra por Consola')
                                    console.log(listaHeroes);
                                    opcion = -1;
                                }
                            }
                        }
                    }
                    break;
                }
                //filtro por altura
                case 4: {
                    let entrada = '';
                    while (entrada === '') {
                        entrada = prompt('Va a comparar la altura de los heroes:\n Ingrese el simbolo > para mayor o el simbolo < para menor, luego un espacio seguido del valor numerico base de la comparacion. Ejemplo \"> 100\" para filtrar los de altura mayor que 100')
                        if (entrada === '') {
                            alert('Por favor ingrese un valor')
                        } else {
                            const [simbolo, valor] = entrada.split(' ');
                            if (simbolo === '>') {
                                const resultadoFiltro = heroes.filter(heroe => heroe.height > parseInt(valor));
                                if (resultadoFiltro.length === 0) {
                                    alert('no se encontraron resultados con esos valores de filtros');
                                    opcion = -1;
                                } else {
                                    listaHeroes = '';
                                    resultadoFiltro.forEach(heroe => {
                                        listaHeroes += mostrarHeroe(heroe);
                                    })
                                    alert('Esta salida debido a su longitud se muestra por Consola')
                                    console.log(listaHeroes);
                                    opcion = -1;
                                }
                            } else if (simbolo === '<') {
                                const resultadoFiltro = heroes.filter(heroe => heroe.height < parseInt(valor));
                                if (resultadoFiltro.length === 0) {
                                    alert('no se encontraron resultados con esos valores de filtros');
                                    opcion = -1;
                                } else {
                                    listaHeroes = '';
                                    resultadoFiltro.forEach(heroe => {
                                        listaHeroes += mostrarHeroe(heroe);
                                    })
                                    alert('Esta salida debido a su longitud se muestra por Consola')
                                    console.log(listaHeroes);
                                    opcion = -1;
                                }
                            }
                        }
                    }
                    break;
                }
                //filtro por peso
                case 5: {
                    let entrada = '';
                    while (entrada === '') {
                        entrada = prompt('Va a comparar el peso de los heroes:\n Ingrese el simbolo > para mayor o el simbolo < para menor, luego un espacio seguido del valor numerico base de la comparacion. Ejemplo \"> 100\" para filtrar los de peso mayor que 100')
                        if (entrada === '') {
                            alert('Por favor ingrese un valor')
                        } else {
                            const [simbolo, valor] = entrada.split(' ');
                            if (simbolo === '>') {
                                const resultadoFiltro = heroes.filter(heroe => heroe.weight > parseInt(valor));
                                if (resultadoFiltro.length === 0) {
                                    alert('no se encontraron resultados con esos valores de filtros');
                                    opcion = -1;
                                } else {
                                    listaHeroes = '';
                                    resultadoFiltro.forEach(heroe => {
                                        listaHeroes += mostrarHeroe(heroe);
                                    })
                                    alert('Esta salida debido a su longitud se muestra por Consola')
                                    console.log(listaHeroes);
                                    opcion = -1;
                                }
                            } else if (simbolo === '<') {
                                const resultadoFiltro = heroes.filter(heroe => heroe.weight < parseInt(valor));
                                if (resultadoFiltro.length === 0) {
                                    alert('no se encontraron resultados con esos valores de filtros');
                                    opcion = -1;
                                } else {
                                    listaHeroes = '';
                                    resultadoFiltro.forEach(heroe => {
                                        listaHeroes += mostrarHeroe(heroe);
                                    })
                                    alert('Esta salida debido a su longitud se muestra por Consola')
                                    console.log(listaHeroes);
                                    opcion = -1;
                                }
                            }
                        }
                    }
                    break;
                }
                default: {

                }
            }
        }
        //Existe algun nombre que comience una letra dada (Some)
        case 4: {
            let entrada = '';
            while (entrada === '') {
                entrada = prompt('Ingresa una letra para saber si existe un heroe cuyo nombre comience con dicha letra').toLowerCase();
                if (entrada === '') {
                    alert('Por favor ingrese un valor')
                } else {
                    const existeHeroe = heroes.some(heroe => heroe.name.toUpperCase().charAt(0) === entrada.toUpperCase().charAt());
                    (existeHeroe) ? alert(`Existe un heroe cuyo nombre comienza con ${entrada.toUpperCase()}`) : alert(`No existe un heroe cuyo nombre comience con ${entrada.toUpperCase()}`);
                }
            }
            opcion = -1;

            break;
        }
        //Modificar alguna estadistica o propiedad(Map)
        case 5: {
            let entrada = '';
            while (entrada === '') {
                entrada = parseInt(prompt('Vamos a aumentar las estadisticas de todos los heroes, tu decides en que porcentaje, ingresa el valor a continuacion: (Debe ser un valor mayor que cero y menor que 100)'));
                if (isNaN(entrada)) {
                    alert('Por favor ingrese un valor')
                    entrada = '';
                } else if ((entrada < 0 || entrada > 100)) {
                    alert('El valor a ingresar debe ser mayor que cero y menor que 100')
                    entrada = '';
                } else {
                    heroesMasPoderosos = heroes.map(heroe => (
                        {
                            id: heroe.id,
                            name: heroe.name,
                            intelligence: Math.round(heroe.intelligence * (1 + entrada / 100)),
                            strength: Math.round(heroe.strength * (1 + entrada / 100)),
                            speed: Math.round(heroe.speed * (1 + entrada / 100)),
                            height: Math.round(heroe.height * (1 + entrada / 100)),
                            weight: Math.round(heroe.weight * (1 + entrada / 100))
                        }
                    ))
                    heroesMasPoderosos.forEach(heroe => {
                        listaHeroes += mostrarHeroe(heroe);
                    })
                    alert('Esta salida debido a su longitud se muestra por Consola')
                    console.log(listaHeroes); 0
                    opcion = -1;
                }
            }
            opcion = -1;
            break;
        }
        //Sumar algun atributo de todos los heroes (Reduce)
        case 6: {
            const valorInicial = 0;
            alert('Vamos a sumar el peso de todos los heroes a ver cuan pesados son todos juntos');
            const sumaPesoTodos = heroes.reduce(
                (acumulador, heroe) => acumulador + parseInt(heroe.weight), valorInicial);
            alert(`La suma del peso de todos los heroes combinada es: ${sumaPesoTodos} kg`)
            opcion = -1;
            break;
        }
        //Ordenar la lista de Heroes (Sort)
        case 7: {
            alert('Vamos a ordenar la lista de heroes de manera alfabetica en orden ascendente');
            const listaOrdenada = heroes.sort((a, b) => {
                if (a.name > b.name) {
                    return 1;
                }
                if (a.name < b.name) {
                    return -1;
                }
                return 0;
            });
            listaOrdenada.forEach(heroe => {
                listaHeroes += mostrarHeroe(heroe);
            })
            alert('Esta salida debido a su longitud se muestra por Consola')
            console.log(listaHeroes); 0
            opcion = -1;
            break;
        }
        default: {
            opcion = -1;
        }
    }
}






