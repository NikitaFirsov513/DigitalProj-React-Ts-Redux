export type productDataTypeElement = {

    "name": string,
    "model": string,
    "brand": string,
    "memory": string,
    "price": number,
    "balance": number,
    "category": string,
    "colorName": string,
    "colorHex": string,
    "prop": { "type": string, "value": string }[],
    "mainProp": object,
    "urlName": string[],
    [arg: string]: any
}

export type productDataType = productDataTypeElement[];

export const productData: productDataType = [
    {

        "name": "Смартфон Xiaomi Redmi Note 10S 6/128GB синий океан",
        "model": "Redmi Note 10S",
        "brand": "Xiaomi",
        "memory": "6/128GB",
        "price": 12000,
        "balance": 10,
        "category": "НеСмартфоны",
        "colorName": "Синее Море",
        "colorHex": "#89C6C7",
        "prop": [
            {
                "type": "Диагональ (дюйм)", "value": "6.43"
            },
            {
                "type": "Разрешение (пикс)", "value": "2400x1080"
            },
            {
                "type": "Встроенная память (Гб)", "value": "128"
            },
            {
                "type": "Оперативная память (Гб)", "value": "6"
            },
            {
                "type": "Основная камера (Мп)", "value": "64"
            },
            {
                "type": "Фронтальная камера (Мп)", "value": "13"
            }
        ],
        "mainProp": {},
        "urlName": ["https://res.cloudinary.com/cifroteh/image/upload/v1646471412/digital/smartphones/xiaomi/redmiNote10S/blueSea/one_ffygym.jpg", "https://res.cloudinary.com/cifroteh/image/upload/v1646471412/digital/smartphones/xiaomi/redmiNote10S/blueSea/two_tmb3p4.jpg"],
    },
    {

        "name": "Смартфон Xiaomi Redmi Note 10S 4/128GB белая галька",
        "model": "Redmi Note 10S",
        "brand": "Xiaomi",
        "memory": "4/128GB",
        "price": 13000,
        "balance": 10,
        "category": "Смартфоны",
        "colorName": "Белый",
        "colorHex": "#FFFFFF",
        "prop": [
            {
                "type": "Диагональ (дюйм)", "value": "6.43"
            },
            {
                "type": "Разрешение (пикс)", "value": "2400x1080"
            },
            {
                "type": "Встроенная память (Гб)", "value": "128"
            },
            {
                "type": "Оперативная память (Гб)", "value": "4"
            },
            {
                "type": "Основная камера (Мп)", "value": "64"
            },
            {
                "type": "Фронтальная камера (Мп)", "value": "13"
            }
        ],
        "mainProp": {},
        "urlName": ["https://res.cloudinary.com/cifroteh/image/upload/v1646471412/digital/smartphones/xiaomi/redmiNote10S/whiteGalca/one_zpjagu.jpg", "https://res.cloudinary.com/cifroteh/image/upload/v1646471412/digital/smartphones/xiaomi/redmiNote10S/whiteGalca/two_bjwezu.jpg"],
    },
    {

        "name": "Смартфон Xiaomi Redmi 9C NFC 4/128GB (черный)",
        "model": "Redmi 9C NFC",
        "brand": "Xiaomi",
        "balance": 10,
        "price": 14000,
        "memory": "4/128GB",
        "category": "Смартфоны",
        "colorName": "Черный",
        "colorHex": "#000000",
        "prop": [
            {
                "type": "Диагональ (дюйм)", "value": "6.53"
            },
            {
                "type": "Разрешение (пикс)", "value": "1600x720"
            },
            {
                "type": "Встроенная память (Гб)", "value": "128"
            },
            {
                "type": "Оперативная память (Гб)", "value": "4"
            },
            {
                "type": "Основная камера (Мп)", "value": "13"
            },
            {
                "type": "Фронтальная камера (Мп)", "value": "5"
            }
        ],
        "mainProp": {},
        "urlName": ["https://res.cloudinary.com/cifroteh/image/upload/v1644611342/digital/smartphones/xiaomi/redmi9c/black/1_p7uqnv.jpg", "https://res.cloudinary.com/cifroteh/image/upload/v1644611342/digital/smartphones/xiaomi/redmi9c/black/2_tuyf6m.jpg", "https://res.cloudinary.com/cifroteh/image/upload/v1647019859/digital/smartphones/xiaomi/redmi9c/black/3_zjwaq4.jpg", "https://res.cloudinary.com/cifroteh/image/upload/v1647019859/digital/smartphones/xiaomi/redmi9c/black/4_tmzm1u.jpg", "https://res.cloudinary.com/cifroteh/image/upload/v1647019859/digital/smartphones/xiaomi/redmi9c/black/5_bgswb3.jpg", "https://res.cloudinary.com/cifroteh/image/upload/v1647019859/digital/smartphones/xiaomi/redmi9c/black/6_wuds3j.jpg", "https://res.cloudinary.com/cifroteh/image/upload/v1647019859/digital/smartphones/xiaomi/redmi9c/black/7_aybmae.jpg"],
    },
    {

        "name": "Смартфон Xiaomi Redmi 9C NFC 4/128GB (синий)",
        "model": "Redmi 9C NFC",
        "brand": "Xiaomi",
        "balance": 10,
        "price": 15000,
        "memory": "4/128GB",
        "category": "Смартфоны",
        "colorName": "Cиний",
        "colorHex": "#0000FF",
        "prop": [
            {
                "type": "Диагональ (дюйм)", "value": "6.53"
            },
            {
                "type": "Разрешение (пикс)", "value": "1600x720"
            },
            {
                "type": "Встроенная память (Гб)", "value": "128"
            },
            {
                "type": "Оперативная память (Гб)", "value": "4"
            },
            {
                "type": "Основная камера (Мп)", "value": "13"
            },
            {
                "type": "Фронтальная камера (Мп)", "value": "5"
            }
        ],
        "mainProp": {},
        "urlName": ["https://res.cloudinary.com/cifroteh/image/upload/v1644612054/digital/smartphones/xiaomi/redmi9c/blue/1_keuijk.jpg", "https://res.cloudinary.com/cifroteh/image/upload/v1644612054/digital/smartphones/xiaomi/redmi9c/blue/2_pbhscj.jpg"],
    },
    {

        "name": "Смартфон Xiaomi Redmi 10 4/64GB синее море",
        "model": "Redmi 10",
        "brand": "Xiaomi",
        "balance": 10,
        "price": 16000,
        "memory": "4/64GB",
        "category": "Смартфоны",
        "colorName": "Синее Море",
        "colorHex": "#89C6C7",
        "prop": [
            {
                "type": "Диагональ (дюйм)", "value": "6.5"
            },
            {
                "type": "Разрешение (пикс)", "value": "2400x1080"
            },
            {
                "type": "Встроенная память (Гб)", "value": "64"
            },
            {
                "type": "Оперативная память (Гб)", "value": "4"
            },
            {
                "type": "Основная камера (Мп)", "value": "50"
            },
            {
                "type": "Фронтальная камера (Мп)", "value": "8"
            }
        ],
        "mainProp": {},
        "urlName": ["https://res.cloudinary.com/cifroteh/image/upload/v1646125219/digital/smartphones/xiaomi/redmi10/blueSea/one_c5y3wk.jpg", "https://res.cloudinary.com/cifroteh/image/upload/v1646125219/digital/smartphones/xiaomi/redmi10/blueSea/two_a4sdxj.jpg"],
    },
    {

        "name": "Смартфон Xiaomi Redmi 10 4/64GB серый карбон",
        "model": "Redmi 10",
        "brand": "Xiaomi",
        "balance": 10,
        "memory": "4/64GB",
        "price": 17000,
        "category": "Смартфоны",
        "colorName": "Серый карбон",
        "colorHex": "#5C5C5C",
        "prop": [
            {
                "type": "Диагональ (дюйм)", "value": "6.5"
            },
            {
                "type": "Разрешение (пикс)", "value": "2400x1080"
            },
            {
                "type": "Встроенная память (Гб)", "value": "64"
            },
            {
                "type": "Оперативная память (Гб)", "value": "4"
            },
            {
                "type": "Основная камера (Мп)", "value": "50"
            },
            {
                "type": "Фронтальная камера (Мп)", "value": "8"
            }
        ],
        "mainProp": {},
        "urlName": ["https://res.cloudinary.com/cifroteh/image/upload/v1646125190/digital/smartphones/xiaomi/redmi10/grayCarbon/one_kzo6g6.jpg", "https://res.cloudinary.com/cifroteh/image/upload/v1646125190/digital/smartphones/xiaomi/redmi10/grayCarbon/one_d7zdmv.jpg"],
    },
    {

        "name": "Смартфон Realme C25S 4/128GB синий",
        "model": "C25S",
        "brand": "Realme",
        "balance": 10,
        "memory": "4/128GB",
        "price": 18000,
        "category": "Смартфоны",
        "colorName": "Cиний",
        "colorHex": "#0000FF",
        "prop": [
            {
                "type": "Диагональ (дюйм)", "value": "6.5"
            },
            {
                "type": "Разрешение (пикс)", "value": "1600x720"
            },
            {
                "type": "Встроенная память (Гб)", "value": "128"
            },
            {
                "type": "Оперативная память (Гб)", "value": "4"
            },
            {
                "type": "Основная камера (Мп)", "value": "48"
            },
            {
                "type": "Фронтальная камера (Мп)", "value": "8"
            }
        ],
        "mainProp": {},
        "urlName": ["https://res.cloudinary.com/cifroteh/image/upload/v1645521758/digital/smartphones/realme/c25s/blue/one_gnmwob.jpg", "https://res.cloudinary.com/cifroteh/image/upload/v1645521757/digital/smartphones/realme/c25s/blue/two_gkuck5.jpg"],
    },
    {
        "name": "Смартфон Realme C25S 4/128GB серый",
        "model": "C25S",
        "brand": "Realme",
        "balance": 10,
        "price": 19000,
        "memory": "4/128GB",
        "category": "Смартфоны",
        "colorName": "Серый",
        "colorHex": "#808080",
        "prop": [
            {
                "type": "Диагональ (дюйм)", "value": "6.5"
            },
            {
                "type": "Разрешение (пикс)", "value": "1600x720"
            },
            {
                "type": "Встроенная память (Гб)", "value": "128"
            },
            {
                "type": "Оперативная память (Гб)", "value": "4"
            },
            {
                "type": "Основная камера (Мп)", "value": "48"
            },
            {
                "type": "Фронтальная камера (Мп)", "value": "8"
            }
        ],
        "mainProp": {},
        "urlName": ["https://res.cloudinary.com/cifroteh/image/upload/v1645521796/digital/smartphones/realme/c25s/gray/one_plt7up.jpg", "https://res.cloudinary.com/cifroteh/image/upload/v1645521795/digital/smartphones/realme/c25s/gray/two_fxkfwk.jpg"],
    },
    {
        "name": "Смартфон Realme 9 Pro 8/128GB черный",
        "model": "9 Pro",
        "brand": "Realme",
        "balance": 10,
        "price": 20000,
        "memory": "8/128GB",
        "category": "Смартфоны",
        "colorName": "Черный",
        "colorHex": "#000000",
        "prop": [
            {
                "type": "Диагональ (дюйм)", "value": "6.6"
            },
            {
                "type": "Разрешение (пикс)", "value": "2412x1080"
            },
            {
                "type": "Встроенная память (Гб)", "value": "128"
            },
            {
                "type": "Оперативная память (Гб)", "value": "8"
            },
            {
                "type": "Основная камера (Мп)", "value": "64"
            },
            {
                "type": "Фронтальная камера (Мп)", "value": "16"
            }
        ],
        "mainProp": {},
        "urlName": ["https://res.cloudinary.com/cifroteh/image/upload/v1649136897/digital/smartphones/realme/9%20pro/black/1_ksnj0d.jpg", "https://res.cloudinary.com/cifroteh/image/upload/v1649136897/digital/smartphones/realme/9%20pro/black/2_xnkaen.jpg"],
    },
    {
        "name": "Смартфон Realme 8i 4/128GB космический черный",
        "model": "8i",
        "brand": "Realme",
        "balance": 10,
        "price": 21000,
        "memory": "4/128GB",
        "category": "Смартфоны",
        "colorName": "Космический черный",
        "colorHex": "#4A3E3E",
        "prop": [
            {
                "type": "Диагональ (дюйм)", "value": "6.6"
            },
            {
                "type": "Разрешение (пикс)", "value": "2412x1080"
            },
            {
                "type": "Встроенная память (Гб)", "value": "128"
            },
            {
                "type": "Оперативная память (Гб)", "value": "4"
            },
            {
                "type": "Основная камера (Мп)", "value": "50"
            },
            {
                "type": "Фронтальная камера (Мп)", "value": "10"
            }
        ],
        "mainProp": {},
        "urlName": ["https://res.cloudinary.com/cifroteh/image/upload/v1649135895/digital/smartphones/realme/8i/spaceblack/1_ai5j0q.jpg", "https://res.cloudinary.com/cifroteh/image/upload/v1649135895/digital/smartphones/realme/8i/spaceblack/2_ixgso9.jpg"],
    },
    {
        "name": "Смартфон Realme 8i 4/128GB космический фиолетовый",
        "model": "8i",
        "brand": "Realme",
        "balance": 10,
        "price": 22000,
        "memory": "4/128GB",
        "category": "Смартфоны",
        "colorName": "Космический фиолетовый",
        "colorHex": "#CDB8E8",
        "prop": [
            {
                "type": "Диагональ (дюйм)", "value": "6.6"
            },
            {
                "type": "Разрешение (пикс)", "value": "2412x1080"
            },
            {
                "type": "Встроенная память (Гб)", "value": "128"
            },
            {
                "type": "Оперативная память (Гб)", "value": "4"
            },
            {
                "type": "Основная камера (Мп)", "value": "50"
            },
            {
                "type": "Фронтальная камера (Мп)", "value": "10"
            }
        ],
        "mainProp": {},
        "urlName": ["https://res.cloudinary.com/cifroteh/image/upload/v1649135618/digital/smartphones/realme/8i/spaceperple/1_cczqkn.jpg", "https://res.cloudinary.com/cifroteh/image/upload/v1649135618/digital/smartphones/realme/8i/spaceperple/2_kvebqh.jpg"],
    },
]



/*{

        "name": "",
        "balance": 10,
        "price": 18000,

        "category": "",
        "colorName": "",
        "colorHex": "",
        "prop": [{ "type": "", "value": "" },],
        "mainProp": {},
        "urlName": ["",""],
    }, */