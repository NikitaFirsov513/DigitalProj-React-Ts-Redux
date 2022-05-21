

export type TAllOrderElement = {

    dataCreate: string,
    dataDelivery: string,
    status: number,
    totalSumma: number,

    priceList: string,
    tovarList: string,
    kolList: string,
    summaList: string,

};

export type TAllOrder = TAllOrderElement[];
/*
export const allOrder: TAllOrder = [
    {
        dataCreate: "2022-04-25T09:38:35",
        dataDelivery: "2022-04-25T09:38:35",
        status: 1,
        totalSumma: 250,
        tovarList: ["Смартфон Xiaomi Redmi 10 4/64GB серый карбон", "Смартфон Realme 9 Pro 8/128GB черный", "Смартфон Xiaomi Redmi 10 4/64GB серый карбон"],
        priceList: ["16 990", "31 000", "16 990"],
        kolList: ["2", "1", "1"],
        summaList: ["33 980", "31 000", "16 990"]
    },
    {
        dataCreate: "2022-04-25T09:38:35",
        dataDelivery: "2022-04-25T09:38:35",
        status: 1,
        totalSumma: 250,
        tovarList: ["Смартфон Xiaomi Redmi 10 4/64GB серый карбон", "Смартфон Realme 9 Pro 8/128GB черный", "Смартфон Xiaomi Redmi 10 4/64GB серый карбон"],
        priceList: ["16 990", "31 000", "16 990"],
        kolList: ["2", "1", "1"],
        summaList: ["33 980", "31 000", "16 990"]
    },
    {
        dataCreate: "2022-04-25T09:38:35",
        dataDelivery: "2022-04-25T09:38:35",
        status: 1,
        totalSumma: 250,
        tovarList: ["Смартфон Xiaomi Redmi 10 4/64GB серый карбон", "Смартфон Realme 9 Pro 8/128GB черный", "Смартфон Xiaomi Redmi 10 4/64GB серый карбон"],
        priceList: ["16 990", "31 000", "16 990"],
        kolList: ["2", "1", "1"],
        summaList: ["33 980", "31 000", "16 990"]
    },


]

*/
