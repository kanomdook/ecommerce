export class paymentModel {
    payment: Array<payment>;
}

export class payment {
    type: string;
    counterservice: Array<counter>;
}

export class counter {
    name: string;
    img: string;
}