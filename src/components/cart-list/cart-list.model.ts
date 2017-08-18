export class CartModel {
    products: Array<ProductModel>;
    amount: number;
}

export class ProductModel {
    product: ProductDetailModel = new ProductDetailModel();
    qty: number;
    itemamount: number;
}

export class ProductDetailModel {
    _id: string;
    name: string;
    unitprice: number;
    img: Array<ImageModel>;
    size: SizeModel = new SizeModel();
}

export class ImageModel {
    id: string;
    url: string;
}

export class SizeModel {
    detail: string;
    sizedetail: Array<SizeDetailModel>;
}

export class SizeDetailModel {
    name: string;
    qty: number;
}