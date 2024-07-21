export interface Billboard {
    id: string;
    label: string
    imageUrl: string
};

export interface Category {
    id: string;
    name: string;
    billboard: Billboard;
    subcategories: Subcategory[]
};

export interface Subcategory {
    id: string;
    name: string;
}

export interface Product {
    id: string;
    category: Category;
    subcategory: Subcategory;
    name: string;
    price: string;
    isFeatured: boolean;
    size?: Size;
    color?: Color;
    images: Image[];
    description: string;
};

export interface Image {
    id: string;
    url: string;
};

export interface Size {
    id: string;
    name: string; 
    value: string;
};

export interface Color {
    id: string;
    name: string; 
    value: string;
};

