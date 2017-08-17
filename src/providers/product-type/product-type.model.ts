export class ProductTypesItemsModel {
    maintype: string;
    subtype: Array<SubTypeItemsModel>;
}

export class SubTypeItemsModel {
    name: string;
}
////////////////to use/////////////////////
export class ProductTypesModel {
    producttypes: Array<ProductTypesItemsModel>;
}
///////////////////////////////////////////