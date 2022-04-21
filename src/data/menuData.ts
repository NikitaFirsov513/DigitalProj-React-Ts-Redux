

export type menuDataTypeElement = {
    "name": string,
    "URLName": string
}

export type menuDataType =
    menuDataTypeElement[];


export const menuData: menuDataType =
    [
        {
            "name": "Смартфоны",
            "URLName": "smartphone"
        },
        {
            "name": "Планшеты",
            "URLName": "tablet"
        }
    ]

