export class ListingModel {
  lastvisit: Array<ListingItemModel>;
  popularproducts: Array<ListingItemModel>;
  popularshops: Array<PopularshopsItemModel>;
  banner_title: string;
  banner_image: string;
}

export class ListingItemModel {
  name: string;
  img: string;
  unitprice: number;
}

export class PopularshopsItemModel {
  name: string;
  img: Array<img>;
}

export class img {
  url: string;
}
