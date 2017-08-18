export class ProductItemsModel {
    id: string;
    name: string;
    detail: string;
    unitprice: number;
    img: Array<ImgsModel>;
    review: Array<ReviewsModel>;
    rate: number;
    qa: Array<QASModel>;
    promotion: Array<PomotionsModel>;
    favorite: Array<string>;
    historyLog: Array<string>;
    stock: {
        stockvalue: Array<StockvalueModel>;
        sumin: number;
        sumout: number;
        amount: number;
    };
    qty: number;
    size: {
        issize: boolean;
        detail: {
            desc: string;
            sizedetail: Array<SizeDetailModel>;
        }
    };
    category: Array<CategoryModel>;
    payment: Array<PaymentModel>;
    shipping: Array<ShippingModel>;
    shop: string;
    relationProducts: Array<RelationProductsModel>;
}

export class ImgsModel {
    url: string;
    id: string;
}

export class ReviewsModel {
    comment: string;
    rate: number;
}

export class QASModel {
    question: string;
    answer: number;
}

export class PomotionsModel {
    name: string;
    desc: string;
    code: string;
}

export class StockvalueModel {
    in: number;
    out: number;
}

export class SizeDetailModel {
    name: string;
    qty: number;
}

export class CategoryModel {
    name: string;
    desc: string;
    subcategory: Array<SubcategoryModel>;
}

export class SubcategoryModel {
    name: string;
    desc: string;
}

export class PaymentModel {
    payment: string;
}

export class ShippingModel {
    shipping: string;
}

export class RelationProductsModel {
    name: string;
    imgUrl: string;
    price: number;
}
////////////////to use/////////////////////
export class ProductModel {
    product: ProductItemsModel;
}
///////////////////////////////////////////