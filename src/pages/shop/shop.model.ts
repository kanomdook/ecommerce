export class ShopItemsModel {
    id: string;
    name: string;
    email: string;
    tel: string;
    map: {
        lat: string,
        long: string
    };
    img: {
        id: string,
        url: string
    };
    coverimg: {
        id: string,
        url: string
    };
    detail: string;
    review: Array<ReviewsModel>;
    rate: number;
    historylog: Array<HistorylogsModel>;
    products: Array<ProductsModel>;
}

export class ReviewsModel {
    rate: number;
    comment: string;
    user: string;
}

export class HistorylogsModel {
    customerid: string;
    historydate: string;
}

export class ProductsModel {
    name: string;
    imgUrl: string;
    price: number;
}
////////////////to use/////////////////////
export class ShopModel {
    shop: ShopItemsModel = new ShopItemsModel();
    title: string;
}
///////////////////////////////////////////