export class ListingModel {
  lastvisit: Array<ListingItemModel>;
  popularproducts: Array<ListingItemModel>;
  popularshops: Array<PopularshopsItemModel>;
  banner_title: string;
  banner_image: string;
}

export class ListingItemModel {
  title: string;
  imgUrl: string;
  price: number;
}

export class PopularshopsItemModel {
  title: string;
  imgUrl: string;
}
