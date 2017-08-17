export class ListingModel {
  populars: Array<ListingItemModel>;
  categories: Array<ListingItemModel>;
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
