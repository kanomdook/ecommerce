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
    qty: number;
    price: number;
    choice: choice = new choice();
}

export class choice {
    discription: string;
    type: string;
}

export class confirmModel {
    price: number;
    total: number;
    amount: number;
    shippingtype: string;
    customer: customer = new customer();
    products: Array<product>;
}