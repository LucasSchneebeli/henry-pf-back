const { createMotorcycles } = require("./src/controllers/Motorcycle.controller");



const motorcycles = [
    {
        "chassisId": "13443-123-B45-267-0",
        "brand": "Honda",
        "model": "CBR1000",
        "year": 2022,
        "cc": 1000,
        "color": "Azul",
        "transmission": "Manual",
        "description": "Descripción de Honda CBR1000",
        "image": "https://motos-b60.kxcdn.com/sites/default/files/yamaha-yzf-r1-2020.jpg",
        "price": 1000000,
        "category": "Sport"
    },
    {
        "chassisId": "13443-123-B45-267-1",
        "brand": "Yamaha",
        "model": "R1",
        "year": 2023,
        "cc": 1000,
        "color": "Azul",
        "transmission": "Manual",
        "description": "Descripción de Yamaha R1",
        "image": "https://motos0km.com.ar/models/yamaha-yzf-r1-gallery-022498-020180612164157.jpg",
        "price": 2500000,
        "category": "Sport"
    },
    {
        "chassisId": "13443-123-B45-267-2",
        "brand": "Kawasaki",
        "model": "Ninja",
        "year": 2023,
        "cc": 600,
        "color": "Verde",
        "transmission": "Manual",
        "description": "Descripción de Kawasaki Ninja",
        "image": "https://www.kawasakiquilmes.com/wp-content/uploads/2017/10/6rKRT-2.jpg",
        "price": 3000000,
        "category": "Sport"
    },
    {
        "chassisId": "13443-123-B45-267-3",
        "brand": "Honda",
        "model": "CG 150",
        "year": 2021,
        "cc": 150,
        "color": "Rojo",
        "transmission": "Manual",
        "description": "Descripción de Honda CG 150",
        "image": "https://motos.honda.com.ar/uploads/modelos/23/images/colores/23c-1web-cgtitan-color-rojo.jpg",
        "price": 150000,
        "category": "Underbone"
    },
    {
        "chassisId": "13443-123-B45-267-4",
        "brand": "Yamaha",
        "model": "Yfz450r SE",
        "year": 2023,
        "cc": 450,
        "color": "Blanco",
        "transmission": "Manual",
        "description": "Descripción de Yamaha Yfz450r SE",
        "image": "https://d2r9epyceweg5n.cloudfront.net/stores/001/119/944/products/718018-mla26742603915_012018-f-dd46817ec89534db0115879983547314-640-0.jpg",
        "price": 900000,
        "category": "ATV"
    },
    {
        "chassisId": "13443-123-B45-267-5",
        "brand": "Honda",
        "model": "Wave",
        "year": 2023,
        "cc": 110,
        "color": "Blanco",
        "transmission": "Manual",
        "description": "Descripción de Honda Wave",
        "image": "https://yuhmak.vtexassets.com/arquivos/ids/173122/M0001200850-2023_3.jpg?v=638139874147670000",
        "price": 110000,
        "category": "Scooter"
    },
    {
        "chassisId": "13443-123-B45-267-6",
        "brand": "Honda",
        "model": "CBR1000",
        "year": 2022,
        "cc": 1000,
        "color": "Azul",
        "transmission": "Manual",
        "description": "Descripción de Honda CBR1000",
        "image": "https://motos-b60.kxcdn.com/sites/default/files/yamaha-yzf-r1-2020.jpg",
        "price": 1000000,
        "category": "Sport"
    },
    {
        "chassisId": "13443-123-B45-267-7",
        "brand": "Yamaha",
        "model": "R1",
        "year": 2023,
        "cc": 1000,
        "color": "Azul",
        "transmission": "Manual",
        "description": "Descripción de Yamaha R1",
        "image": "https://motos0km.com.ar/models/yamaha-yzf-r1-gallery-022498-020180612164157.jpg",
        "price": 2500000,
        "category": "Sport"
    },
    {
        "chassisId": "13443-123-B45-267-8",
        "brand": "Kawasaki",
        "model": "Ninja",
        "year": 2023,
        "cc": 600,
        "color": "Verde",
        "transmission": "Manual",
        "description": "Descripción de Kawasaki Ninja",
        "image": "https://www.kawasakiquilmes.com/wp-content/uploads/2017/10/6rKRT-2.jpg",
        "price": 3000000,
        "category": "Sport"
    },
    {
        "chassisId": "13443-123-B45-267-9",
        "brand": "Honda",
        "model": "CG 150",
        "year": 2021,
        "cc": 150,
        "color": "Rojo",
        "transmission": "Manual",
        "description": "Descripción de Honda CG 150",
        "image": "https://motos.honda.com.ar/uploads/modelos/23/images/colores/23c-1web-cgtitan-color-rojo.jpg",
        "price": 150000,
        "category": "Underbone"
    },
    {
        "chassisId": "13443-123-B45-267-10",
        "brand": "Yamaha",
        "model": "Yfz450r SE",
        "year": 2023,
        "cc": 450,
        "color": "Blanco",
        "transmission": "Manual",
        "description": "Descripción de Yamaha Yfz450r SE",
        "image": "https://d2r9epyceweg5n.cloudfront.net/stores/001/119/944/products/718018-mla26742603915_012018-f-dd46817ec89534db0115879983547314-640-0.jpg",
        "price": 900000,
        "category": "ATV"
    },
    {
        "chassisId": "13443-123-B45-267-11",
        "brand": "Honda",
        "model": "Wave",
        "year": 2023,
        "cc": 110,
        "color": "Blanco",
        "transmission": "Manual",
        "description": "Descripción de Honda Wave",
        "image": "https://yuhmak.vtexassets.com/arquivos/ids/173122/M0001200850-2023_3.jpg?v=638139874147670000",
        "price": 110000,
        "category": "Scooter"
    },
    {
        "chassisId": "13443-123-B45-267-12",
        "brand": "Honda",
        "model": "CBR1000",
        "year": 2022,
        "cc": 1000,
        "color": "Azul",
        "transmission": "Manual",
        "description": "Descripción de Honda CBR1000",
        "image": "https://motos-b60.kxcdn.com/sites/default/files/yamaha-yzf-r1-2020.jpg",
        "price": 1000000,
        "category": "Sport"
    },
    {
        "chassisId": "13443-123-B45-267-13",
        "brand": "Yamaha",
        "model": "R1",
        "year": 2023,
        "cc": 1000,
        "color": "Azul",
        "transmission": "Manual",
        "description": "Descripción de Yamaha R1",
        "image": "https://motos0km.com.ar/models/yamaha-yzf-r1-gallery-022498-020180612164157.jpg",
        "price": 2500000,
        "category": "Sport"
    },
    {
        "chassisId": "13443-123-B45-267-14",
        "brand": "Kawasaki",
        "model": "Ninja",
        "year": 2023,
        "cc": 600,
        "color": "Verde",
        "transmission": "Manual",
        "description": "Descripción de Kawasaki Ninja",
        "image": "https://www.kawasakiquilmes.com/wp-content/uploads/2017/10/6rKRT-2.jpg",
        "price": 3000000,
        "category": "Sport"
    },
    {
        "chassisId": "13443-123-B45-267-15",
        "brand": "Honda",
        "model": "CG 150",
        "year": 2021,
        "cc": 150,
        "color": "Rojo",
        "transmission": "Manual",
        "description": "Descripción de Honda CG 150",
        "image": "https://motos.honda.com.ar/uploads/modelos/23/images/colores/23c-1web-cgtitan-color-rojo.jpg",
        "price": 150000,
        "category": "Underbone"
    },
    {
        "chassisId": "13443-123-B45-267-16",
        "brand": "Yamaha",
        "model": "Yfz450r SE",
        "year": 2023,
        "cc": 450,
        "color": "Blanco",
        "transmission": "Manual",
        "description": "Descripción de Yamaha Yfz450r SE",
        "image": "https://d2r9epyceweg5n.cloudfront.net/stores/001/119/944/products/718018-mla26742603915_012018-f-dd46817ec89534db0115879983547314-640-0.jpg",
        "price": 900000,
        "category": "ATV"
    },
    {
        "chassisId": "13443-123-B45-267-17",
        "brand": "Honda",
        "model": "Wave",
        "year": 2023,
        "cc": 110,
        "color": "Blanco",
        "transmission": "Manual",
        "description": "Descripción de Honda Wave",
        "image": "https://yuhmak.vtexassets.com/arquivos/ids/173122/M0001200850-2023_3.jpg?v=638139874147670000",
        "price": 110000,
        "category": "Scooter"
    },
    {
        "chassisId": "13443-123-B45-267-18",
        "brand": "Honda",
        "model": "CBR1000",
        "year": 2022,
        "cc": 1000,
        "color": "Azul",
        "transmission": "Manual",
        "description": "Descripción de Honda CBR1000",
        "image": "https://motos-b60.kxcdn.com/sites/default/files/yamaha-yzf-r1-2020.jpg",
        "price": 1000000,
        "category": "Sport"
    },
    {
        "chassisId": "13443-123-B45-267-19",
        "brand": "Yamaha",
        "model": "R1",
        "year": 2023,
        "cc": 1000,
        "color": "Azul",
        "transmission": "Manual",
        "description": "Descripción de Yamaha R1",
        "image": "https://motos0km.com.ar/models/yamaha-yzf-r1-gallery-022498-020180612164157.jpg",
        "price": 2500000,
        "category": "Sport"
    },
    {
        "chassisId": "13443-123-B45-267-20",
        "brand": "Kawasaki",
        "model": "Ninja",
        "year": 2023,
        "cc": 600,
        "color": "Verde",
        "transmission": "Manual",
        "description": "Descripción de Kawasaki Ninja",
        "image": "https://www.kawasakiquilmes.com/wp-content/uploads/2017/10/6rKRT-2.jpg",
        "price": 3000000,
        "category": "Sport"
    },
    {
        "chassisId": "13443-123-B45-267-21",
        "brand": "Honda",
        "model": "CG 150",
        "year": 2021,
        "cc": 150,
        "color": "Rojo",
        "transmission": "Manual",
        "description": "Descripción de Honda CG 150",
        "image": "https://motos.honda.com.ar/uploads/modelos/23/images/colores/23c-1web-cgtitan-color-rojo.jpg",
        "price": 150000,
        "category": "Underbone"
    },
    {
        "chassisId": "13443-123-B45-267-22",
        "brand": "Yamaha",
        "model": "Yfz450r SE",
        "year": 2023,
        "cc": 450,
        "color": "Blanco",
        "transmission": "Manual",
        "description": "Descripción de Yamaha Yfz450r SE",
        "image": "https://d2r9epyceweg5n.cloudfront.net/stores/001/119/944/products/718018-mla26742603915_012018-f-dd46817ec89534db0115879983547314-640-0.jpg",
        "price": 900000,
        "category": "ATV"
    },
    {
        "chassisId": "13443-123-B45-267-23",
        "brand": "Honda",
        "model": "Wave",
        "year": 2023,
        "cc": 110,
        "color": "Blanco",
        "transmission": "Manual",
        "description": "Descripción de Honda Wave",
        "image": "https://yuhmak.vtexassets.com/arquivos/ids/173122/M0001200850-2023_3.jpg?v=638139874147670000",
        "price": 110000,
        "category": "Scooter"
    },
    {
        "chassisId": "13443-123-B45-267-24",
        "brand": "Honda",
        "model": "CBR1000",
        "year": 2022,
        "cc": 1000,
        "color": "Azul",
        "transmission": "Manual",
        "description": "Descripción de Honda CBR1000",
        "image": "https://motos-b60.kxcdn.com/sites/default/files/yamaha-yzf-r1-2020.jpg",
        "price": 1000000,
        "category": "Sport"
    },
    {
        "chassisId": "13443-123-B45-267-25",
        "brand": "Yamaha",
        "model": "R1",
        "year": 2023,
        "cc": 1000,
        "color": "Azul",
        "transmission": "Manual",
        "description": "Descripción de Yamaha R1",
        "image": "https://motos0km.com.ar/models/yamaha-yzf-r1-gallery-022498-020180612164157.jpg",
        "price": 2500000,
        "category": "Sport"
    },
    {
        "chassisId": "13443-123-B45-267-26",
        "brand": "Kawasaki",
        "model": "Ninja",
        "year": 2023,
        "cc": 600,
        "color": "Verde",
        "transmission": "Manual",
        "description": "Descripción de Kawasaki Ninja",
        "image": "https://www.kawasakiquilmes.com/wp-content/uploads/2017/10/6rKRT-2.jpg",
        "price": 3000000,
        "category": "Sport"
    },
    {
        "chassisId": "13443-123-B45-267-27",
        "brand": "Honda",
        "model": "CG 150",
        "year": 2021,
        "cc": 150,
        "color": "Rojo",
        "transmission": "Manual",
        "description": "Descripción de Honda CG 150",
        "image": "https://motos.honda.com.ar/uploads/modelos/23/images/colores/23c-1web-cgtitan-color-rojo.jpg",
        "price": 150000,
        "category": "Underbone"
    },
    {
        "chassisId": "13443-123-B45-267-28",
        "brand": "Yamaha",
        "model": "Yfz450r SE",
        "year": 2023,
        "cc": 450,
        "color": "Blanco",
        "transmission": "Manual",
        "description": "Descripción de Yamaha Yfz450r SE",
        "image": "https://d2r9epyceweg5n.cloudfront.net/stores/001/119/944/products/718018-mla26742603915_012018-f-dd46817ec89534db0115879983547314-640-0.jpg",
        "price": 900000,
        "category": "ATV"
    },
    {
        "chassisId": "13443-123-B45-267-29",
        "brand": "Honda",
        "model": "Wave",
        "year": 2023,
        "cc": 110,
        "color": "Blanco",
        "transmission": "Manual",
        "description": "Descripción de Honda Wave",
        "image": "https://yuhmak.vtexassets.com/arquivos/ids/173122/M0001200850-2023_3.jpg?v=638139874147670000",
        "price": 110000,
        "category": "Scooter"
    },
    {
        "chassisId": "13443-123-B45-267-30",
        "brand": "Honda",
        "model": "CBR1000",
        "year": 2022,
        "cc": 1000,
        "color": "Azul",
        "transmission": "Manual",
        "description": "Descripción de Honda CBR1000",
        "image": "https://motos-b60.kxcdn.com/sites/default/files/yamaha-yzf-r1-2020.jpg",
        "price": 1000000,
        "category": "Sport"
    },
    {
        "chassisId": "13443-123-B45-267-31",
        "brand": "Yamaha",
        "model": "R1",
        "year": 2023,
        "cc": 1000,
        "color": "Azul",
        "transmission": "Manual",
        "description": "Descripción de Yamaha R1",
        "image": "https://motos0km.com.ar/models/yamaha-yzf-r1-gallery-022498-020180612164157.jpg",
        "price": 2500000,
        "category": "Sport"
    },
    {
        "chassisId": "13443-123-B45-267-32",
        "brand": "Kawasaki",
        "model": "Ninja",
        "year": 2023,
        "cc": 600,
        "color": "Verde",
        "transmission": "Manual",
        "description": "Descripción de Kawasaki Ninja",
        "image": "https://www.kawasakiquilmes.com/wp-content/uploads/2017/10/6rKRT-2.jpg",
        "price": 3000000,
        "category": "Sport"
    },
    {
        "chassisId": "13443-123-B45-267-33",
        "brand": "Honda",
        "model": "CG 150",
        "year": 2021,
        "cc": 150,
        "color": "Rojo",
        "transmission": "Manual",
        "description": "Descripción de Honda CG 150",
        "image": "https://motos.honda.com.ar/uploads/modelos/23/images/colores/23c-1web-cgtitan-color-rojo.jpg",
        "price": 150000,
        "category": "Underbone"
    },
    {
        "chassisId": "13443-123-B45-267-34",
        "brand": "Yamaha",
        "model": "Yfz450r SE",
        "year": 2023,
        "cc": 450,
        "color": "Blanco",
        "transmission": "Manual",
        "description": "Descripción de Yamaha Yfz450r SE",
        "image": "https://d2r9epyceweg5n.cloudfront.net/stores/001/119/944/products/718018-mla26742603915_012018-f-dd46817ec89534db0115879983547314-640-0.jpg",
        "price": 900000,
        "category": "ATV"
    },
    {
        "chassisId": "13443-123-B45-267-35",
        "brand": "Honda",
        "model": "Wave",
        "year": 2023,
        "cc": 110,
        "color": "Blanco",
        "transmission": "Manual",
        "description": "Descripción de Honda Wave",
        "image": "https://yuhmak.vtexassets.com/arquivos/ids/173122/M0001200850-2023_3.jpg?v=638139874147670000",
        "price": 110000,
        "category": "Scooter"
    },
    {
        "chassisId": "13443-123-B45-267-36",
        "brand": "Honda",
        "model": "CBR1000",
        "year": 2022,
        "cc": 1000,
        "color": "Azul",
        "transmission": "Manual",
        "description": "Descripción de Honda CBR1000",
        "image": "https://motos-b60.kxcdn.com/sites/default/files/yamaha-yzf-r1-2020.jpg",
        "price": 1000000,
        "category": "Sport"
    },
    {
        "chassisId": "13443-123-B45-267-37",
        "brand": "Yamaha",
        "model": "R1",
        "year": 2023,
        "cc": 1000,
        "color": "Azul",
        "transmission": "Manual",
        "description": "Descripción de Yamaha R1",
        "image": "https://motos0km.com.ar/models/yamaha-yzf-r1-gallery-022498-020180612164157.jpg",
        "price": 2500000,
        "category": "Sport"
    },
    {
        "chassisId": "13443-123-B45-267-38",
        "brand": "Kawasaki",
        "model": "Ninja",
        "year": 2023,
        "cc": 600,
        "color": "Verde",
        "transmission": "Manual",
        "description": "Descripción de Kawasaki Ninja",
        "image": "https://www.kawasakiquilmes.com/wp-content/uploads/2017/10/6rKRT-2.jpg",
        "price": 3000000,
        "category": "Sport"
    },
    {
        "chassisId": "13443-123-B45-267-39",
        "brand": "Honda",
        "model": "CG 150",
        "year": 2021,
        "cc": 150,
        "color": "Rojo",
        "transmission": "Manual",
        "description": "Descripción de Honda CG 150",
        "image": "https://motos.honda.com.ar/uploads/modelos/23/images/colores/23c-1web-cgtitan-color-rojo.jpg",
        "price": 150000,
        "category": "Underbone"
    },
    {
        "chassisId": "13443-123-B45-267-40",
        "brand": "Yamaha",
        "model": "Yfz450r SE",
        "year": 2023,
        "cc": 450,
        "color": "Blanco",
        "transmission": "Manual",
        "description": "Descripción de Yamaha Yfz450r SE",
        "image": "https://d2r9epyceweg5n.cloudfront.net/stores/001/119/944/products/718018-mla26742603915_012018-f-dd46817ec89534db0115879983547314-640-0.jpg",
        "price": 900000,
        "category": "ATV"
    },
    {
        "chassisId": "13443-123-B45-267-41",
        "brand": "Honda",
        "model": "Wave",
        "year": 2023,
        "cc": 110,
        "color": "Blanco",
        "transmission": "Manual",
        "description": "Descripción de Honda Wave",
        "image": "https://yuhmak.vtexassets.com/arquivos/ids/173122/M0001200850-2023_3.jpg?v=638139874147670000",
        "price": 110000,
        "category": "Scooter"
    },
    {
        "chassisId": "13443-123-B45-267-42",
        "brand": "Honda",
        "model": "CBR1000",
        "year": 2022,
        "cc": 1000,
        "color": "Azul",
        "transmission": "Manual",
        "description": "Descripción de Honda CBR1000",
        "image": "https://motos-b60.kxcdn.com/sites/default/files/yamaha-yzf-r1-2020.jpg",
        "price": 1000000,
        "category": "Sport"
    },
    {
        "chassisId": "13443-123-B45-267-43",
        "brand": "Yamaha",
        "model": "R1",
        "year": 2023,
        "cc": 1000,
        "color": "Azul",
        "transmission": "Manual",
        "description": "Descripción de Yamaha R1",
        "image": "https://motos0km.com.ar/models/yamaha-yzf-r1-gallery-022498-020180612164157.jpg",
        "price": 2500000,
        "category": "Sport"
    },
    {
        "chassisId": "13443-123-B45-267-44",
        "brand": "Kawasaki",
        "model": "Ninja",
        "year": 2023,
        "cc": 600,
        "color": "Verde",
        "transmission": "Manual",
        "description": "Descripción de Kawasaki Ninja",
        "image": "https://www.kawasakiquilmes.com/wp-content/uploads/2017/10/6rKRT-2.jpg",
        "price": 3000000,
        "category": "Sport"
    },
    {
        "chassisId": "13443-123-B45-267-45",
        "brand": "Honda",
        "model": "CG 150",
        "year": 2021,
        "cc": 150,
        "color": "Rojo",
        "transmission": "Manual",
        "description": "Descripción de Honda CG 150",
        "image": "https://motos.honda.com.ar/uploads/modelos/23/images/colores/23c-1web-cgtitan-color-rojo.jpg",
        "price": 150000,
        "category": "Underbone"
    },
    {
        "chassisId": "13443-123-B45-267-46",
        "brand": "Yamaha",
        "model": "Yfz450r SE",
        "year": 2023,
        "cc": 450,
        "color": "Blanco",
        "transmission": "Manual",
        "description": "Descripción de Yamaha Yfz450r SE",
        "image": "https://d2r9epyceweg5n.cloudfront.net/stores/001/119/944/products/718018-mla26742603915_012018-f-dd46817ec89534db0115879983547314-640-0.jpg",
        "price": 900000,
        "category": "ATV"
    },
    {
        "chassisId": "13443-123-B45-267-47",
        "brand": "Honda",
        "model": "Wave",
        "year": 2023,
        "cc": 110,
        "color": "Blanco",
        "transmission": "Manual",
        "description": "Descripción de Honda Wave",
        "image": "https://yuhmak.vtexassets.com/arquivos/ids/173122/M0001200850-2023_3.jpg?v=638139874147670000",
        "price": 110000,
        "category": "Scooter"
    },
    {
        "chassisId": "13443-123-B45-267-48",
        "brand": "Honda",
        "model": "CBR1000",
        "year": 2022,
        "cc": 1000,
        "color": "Azul",
        "transmission": "Manual",
        "description": "Descripción de Honda CBR1000",
        "image": "https://motos-b60.kxcdn.com/sites/default/files/yamaha-yzf-r1-2020.jpg",
        "price": 1000000,
        "category": "Sport"
    },
    {
        "chassisId": "13443-123-B45-267-49",
        "brand": "Yamaha",
        "model": "R1",
        "year": 2023,
        "cc": 1000,
        "color": "Azul",
        "transmission": "Manual",
        "description": "Descripción de Yamaha R1",
        "image": "https://motos0km.com.ar/models/yamaha-yzf-r1-gallery-022498-020180612164157.jpg",
        "price": 2500000,
        "category": "Sport"
    }
]

async function seedDb() {

    try {
        const req = {
            body: motorcycles
        };

        const res = {
            status: function () {
                return this;
            },
            send: function () {
                return this;
            }
        };

        await createMotorcycles(req, res)

        console.log('Database seeded successfully');
    } catch (error) {
        console.error('Error seeding database: ', error);
    }
}

seedDb();

module.exports = seedDb



