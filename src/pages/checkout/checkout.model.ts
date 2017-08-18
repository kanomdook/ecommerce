export class paymentModel {
    payment: Array<payment>;
    counterservice: Array<counter>;
}

export class payment {
    type: string;
    img: string;
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
    customer: customer = new customer();
    products: Array<product>;
    total: number
}

