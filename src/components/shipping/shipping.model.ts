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
    choice: Array<choice>;
}

export class choice {
    discription: string;
    type: string;
}

export class customerModel {
    customer: customer = new customer();
    products: Array<product>;
    total: number
}