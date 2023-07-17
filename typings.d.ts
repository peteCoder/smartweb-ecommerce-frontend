
type CenterLayoutProps = {
  children: React.ReactNode;
    noPadding?: boolean;
    customBg?: boolean;
    noMarginTopBottom?: boolean;
}

type CategoryProps = {
    backgroundImage: string;
    categories: CategoriesType[];
    catTitle: string;
    linkForButton: string;
}
// HomeOutdoorProps

type DealType = {
    id: number;
    name: string;
    discount: number;
    image: string;
}


type CategoriesType = {
    id: number;
    image: string;
    name: string;
    base_price: number;
}


type RecommendedProductType = {
    id: number;
    image: string;
    name: string;
    base_price: number;
    description: string;
}

type AddAndMinusFromCartProps = {
  hasQtyText?: boolean;
}


