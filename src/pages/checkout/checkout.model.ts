export class paymentModel {
    payment: Array<payment>;
    counterservice: Array<counter>;
}

export class payment {
    name: string;
    img: {
        url: string;
    };
}

export class counter {
    name: string;
    img: string;
}

export class confirmModel {
    price: number;
    total: number;
    amount: number;
    shop: string;
    deliveryprice: number;
    shippingtype: string;
    customer: customer = new customer();
    products: Array<product>;
}

export class customer {
    displayName: string;
    tel: string;
    address: address = new address();
}

export class address {
    address: string;
    subdistrict: string;
    district: string;
    province: string;
    postcode: string;
}

export class product {
    name: string;
    img: string;
    qty: number;
    price: number;
    choice: Array<choice>;
}

export class choice {
    discription: string;
    type: string;
}

export class shippingModel {
    _id: string;
    user: customer = new customer();
    products: Array<product>;
    total: number
}

export class saveOrder {
    shipping: saveOrderShipping = new saveOrderShipping();
    items: Array<saveProducts>;
    payment: savePayment = new savePayment();
    amount: number;
    discount: number;
    cart: string;
}

export class saveOrderShipping {
    _id: string;
    firstname: string;
    lastname: string;
    tel: string;
    address: string;
    subdistrict: string;
    district: string;
    province: string;
    postcode: string;
}

export class saveProducts {
    product: ProductDetailModel = new ProductDetailModel();
    qty: number;
    amount: number;
    delivery: delivery = new delivery();
}

export class savePayment {
    paymenttype: string;
    creditno: string;
    creditname: string;
    expdate: string;
    creditcvc: string;
    counterservice: string;
}

export class delivery {
    description: string;
    deliverytype: string;
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

